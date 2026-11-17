import { sectionByKey } from "@/lib/sections";
import { kontak, luarLayar, perjalanan, perkenalan, profil, skill, tools } from "@/lib/about";
import { DialogBox } from "@/components/ui/DialogBox";
import { PixelButton } from "@/components/ui/PixelButton";
import { SeasonBadge } from "@/components/ui/SeasonBadge";
import { PixelAvatar } from "@/components/about/PixelAvatar";

export const metadata = { title: `${sectionByKey.about.label} · Ruang Renung` };

export default function AboutPage() {
  return (
    <main className="kp-season-bg is-about min-h-dvh">
      <div className="mx-auto max-w-5xl px-5 py-14">
        <div className="mb-10 flex flex-wrap gap-3">
          <PixelButton href="/" musim="polos">Kembali ke kamar</PixelButton>
        </div>

        <div className="grid gap-12 md:grid-cols-[260px_1fr]">
          <aside className="flex flex-col gap-8">
            <PixelAvatar inisial={profil.inisial} />
            <div className="text-center">
              <h1 className="font-pixel text-3xl font-semibold leading-9">{profil.nama}</h1>
              <p className="mt-1 text-base text-ink">{profil.peran}</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <PixelButton href={profil.cv} musim="dingin" target="_blank" rel="noreferrer">Unduh CV</PixelButton>
              <PixelButton href={`mailto:${profil.email}`} musim="polos">Kirim email</PixelButton>
            </div>
          </aside>

          <div className="flex flex-col gap-12">
            <DialogBox section="about" tab="About · Halo">
              {perkenalan.map((p, i) => (
                <p key={i} className="mt-2 mb-3 text-lg leading-8">{p}</p>
              ))}
            </DialogBox>

            <DialogBox section="about" tab="Skill">
              <div className="mt-2 flex flex-col gap-6">
                {skill.map((g) => (
                  <div key={g.judul}>
                    <h2 className="font-pixel text-xl font-medium">{g.judul}</h2>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {g.item.map((s) => (
                        <li key={s}><SeasonBadge section="about">{s}</SeasonBadge></li>
                      ))}
                    </ul>
                    {g.catatan && <p className="mt-2 text-sm text-ink-2">{g.catatan}</p>}
                  </div>
                ))}
                <div>
                  <h2 className="font-pixel text-xl font-medium">Tools sehari-hari</h2>
                  <p className="mt-2 text-base leading-7">{tools.join(" · ")}</p>
                </div>
              </div>
            </DialogBox>

            <DialogBox section="about" tab="Perjalanan">
              <ol className="mt-2 flex flex-col gap-6">
                {perjalanan.map((l) => (
                  <li key={l.judul} className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
                    <span className="font-pixel text-base text-ink-2">{l.waktu}</span>
                    <div>
                      <p className="text-lg font-semibold leading-7">{l.judul}</p>
                      <p className="text-base text-ink-2">{l.tempat}</p>
                      <p className="mt-1 text-base leading-7">{l.isi}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </DialogBox>

            <DialogBox section="about" tab="Di luar layar">
              <p className="mt-2 text-lg leading-8">{luarLayar}</p>
            </DialogBox>

            <DialogBox section="about" tab="Kontak" showNext>
              <ul className="mt-2 grid gap-3 sm:grid-cols-2">
                {kontak.map((k) => (
                  <li key={k.label} className="flex flex-col">
                    <span className="font-pixel text-sm text-ink-2">{k.label}</span>
                    <a href={k.href} target={k.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-lg leading-7 text-link underline underline-offset-4">
                      {k.teks}
                    </a>
                  </li>
                ))}
              </ul>
            </DialogBox>
          </div>
        </div>
      </div>
    </main>
  );
}
