# Mengubah folder GLB voxel jadi data/kamar_data.json yang ringan.
# Pakai: python scripts/glb_ke_data.py <folder_glb>   (butuh numpy)
import json,struct,glob,sys,base64
import numpy as np
U=0.0375
def load(f):
    b=open(f,'rb').read();l=struct.unpack('<I',b[12:16])[0];j=json.loads(b[20:20+l])
    bin_off=20+l+8;blob=b[bin_off:]
    p=j['meshes'][0]['primitives'][0];acc=j['accessors'];bv=j['bufferViews']
    def get(i):
        a=acc[i];v=bv[a['bufferView']];n={'SCALAR':1,'VEC3':3,'VEC4':4}[a['type']]
        dt={5126:np.float32,5125:np.uint32,5123:np.uint16}[a['componentType']]
        o=v.get('byteOffset',0)+a.get('byteOffset',0)
        return np.frombuffer(blob,dt,a['count']*n,o).reshape(-1,n) if n>1 else np.frombuffer(blob,dt,a['count'],o)
    return get(p['attributes']['POSITION']),get(p['attributes']['NORMAL']),get(p['attributes']['COLOR_0'])
out={};pal={};stats=[]
for f in sorted(glob.glob(sys.argv[1]+'/*.glb')):
    name=f.split('/')[-1][:-4]
    P,N,C=load(f)
    q=len(P)//4;P=P.reshape(q,4,3);N=N[::4];C=C[::4]
    G=np.rint(P/U).astype(int)
    groups={}
    for i in range(q):
        ax=int(np.argmax(np.abs(N[i])));sg=1 if N[i][ax]>0 else 0
        pl=G[i,0,ax];oth=[a for a in range(3) if a!=ax]
        u0,u1=G[i,:,oth[0]].min(),G[i,:,oth[0]].max();v0,v1=G[i,:,oth[1]].min(),G[i,:,oth[1]].max()
        col=tuple(np.round(C[i][:3],4))
        if col not in pal: pal[col]=len(pal)
        key=(ax,sg,pl,pal[col])
        cells=groups.setdefault(key,set())
        for u in range(u0,u1):
            for v in range(v0,v1): cells.add((u,v))
    quads=[]
    for (ax,sg,pl,ci),cells in groups.items():
        cells=set(cells)
        for (u,v) in sorted(cells):
            if (u,v) not in cells: continue
            w=1
            while (u+w,v) in cells: w+=1
            h=1
            while all((u+k,v+h) in cells for k in range(0,w)): h+=1
            for k in range(0,w):
                for m in range(0,h): cells.discard((u+k,v+m))
            quads.append([ax*2+sg,pl,u,v,u+w,v+h,ci])
    out[name]=quads;stats.append((name,q,len(quads)))
for s in stats: print(s)
palette=[None]*len(pal)
for c,i in pal.items(): palette[i]=[float(x) for x in c]
arr={k:base64.b64encode(np.array(v,dtype=np.int16).tobytes()).decode() for k,v in out.items()}
json.dump({'unit':U,'palette':palette,'objects':arr},open('data/kamar_data.json','w'))
import os;print('palette',len(palette),'bytes',os.path.getsize('kamar_data.json'))
