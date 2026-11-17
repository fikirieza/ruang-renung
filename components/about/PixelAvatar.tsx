/**
 * Avatar sementara: bingkai piksel dengan inisial.
 * Ganti dengan avatar pixel art buatanmu (misalnya public/avatar.png) kalau sudah jadi.
 */
export function PixelAvatar({ inisial }: { inisial: string }) {
  return (
    <div className="kp-box is-about mx-auto grid aspect-square w-full max-w-[240px] place-items-center p-0! bg-[var(--accent)]!">
      <span className="font-pixel text-7xl font-semibold text-malam">{inisial}</span>
    </div>
  );
}
