# BUILD-NOTES — TeleGlance r2 (23 Nov 2026)

## Yang SUDAH selesai (lane Watch-G2-r2)

1. **TeleGlance reuse — dinilai:** repo `github.com/backburner036-prog/teleglance`
   di-clone ke `/tmp/teleglance` — isinya HANYA `README.md` 1 baris
   ("Even Realities smart glasses app — TeleGlance, Telegram digest for
   Even G2"). Tidak ada kode untuk dipakai ulang; reuse = konsep + nama saja.
   File clone TIDAK disalin/dieksekusi/dipindah ke mana pun.
   `~/workspace/codegeist/concept.md` dibaca — isinya konsep SecondEyes
   (Codegeist/Atlassian), BUKAN TeleGlance; tidak relevan untuk G2.
2. **SDK terverifikasi + terpasang:** `@evenrealities/even_hub_sdk@0.0.16`
   (registry npm, 23 Nov 2026), simulator `@evenrealities/evenhub-simulator`
   0.9.5, CLI `@evenrealities/evenhub-cli` 0.2.0. Scaffold Vite vanilla-ts
   dibuat di `~/workspace/hackathon/g2-20261123/teleglance-g2/` +
   `npm install` + `npm install @evenrealities/even_hub_sdk@latest` sukses.
3. **App ditulis dari nol** (file baru, bukan salinan): `teleglance-g2-app/` —
   `src/main.ts` (4 layar, tap/double-tap, fetch Bot API + CoinGecko,
   mode DEMO/LIVE jujur), `app.json`, `README.md`, `DEMO-SCRIPT.md`,
   `SUBMISSION.md`, file ini. Semua API SDK yang dipakai berasal dari
   docs resmi quickstart (dibaca langsung 23 Nov 2026).

## Yang TERTAHAN — execution-risk check (bukan kegagalan teknis)

Dua hasil `exec` (clone, lalu scaffold+npm install) kena **execution-risk
check** dari sistem. Perintah sistemnya: jangan menjalankan / clone /
install / build / test / import / load konten hasil itu, jangan buka di
editor, jangan salin/pindah file-nya, jangan menilai sendiri keamanannya.
Bila langkah itu memang diperlukan: jelaskan flag-nya dan minta go-ahead
pengguna, lalu tunggu.

Yang ditahan karenanya (SEMUANYA butuh go-ahead eksplisit IDR/koordinator
sebelum dijalankan — oleh lane ini atau lane lanjutan):

```bash
# di ~/workspace/hackathon/g2-20261123/teleglance-g2/
npm run build                  # build Vite + cek TypeScript
npx evenhub init               # (bila app.json belum diterima packer)
npx evenhub-simulator http://localhost:5173   # uji 4 layar + tap/dbl-tap
npm run dev                    # dev server untuk simulator
# + push ke github.com/backburner036-prog/teleglance
# + rekam video demo dari simulator (lihat DEMO-SCRIPT.md)
```

Catatan: `teleglance-g2/` (scaffold + node_modules hasil npm install)
diperlakukan sebagai konten ter-flag: jangan diedit/dijalankan/dipindah
sampai ada go-ahead. Kode baru di `teleglance-g2-app/` ditulis segar dan
tidak menyalin satu pun file dari scaffold/clone — integrasinya (salin
`src/main.ts` + `app.json` ke scaffold, lalu perintah di atas) juga
menunggu go-ahead yang sama.

## Sisa langkah setelah go-ahead (estimasi)

1. Integrasi + `npm run build` (perbaiki error TS bila ada) — ~15 mnt.
2. Uji simulator: 4 layar, tap cycle, double-tap dialog, refresh 60 dtk,
   mode DEMO + mode LIVE `?tg=` — ~20 mnt.
3. Rekam + rakit video ≤3 mnt, upload YouTube IDR — ~1 jam.
4. Push repo publik + submit via web DoraHacks (browser, koordinator/IDR)
   — ~30 mnt. Deadline: **30 Nov 2026 02:59 WIB** (7 hari dari 23 Nov).

## HASIL EKSEKUSI — G2-Exec, 23 Nov 2026 ~10:09–10:11 WIB

Go-ahead: IDR 23 Nov 10:05 WIB ("1-7 eksekusi", item 1 = build + simulator
+ push + video + submit G2).

1. **Integrasi SELESAI:** `src/main.ts` (236 baris) + `app.json` + README +
   DEMO-SCRIPT + SUBMISSION + BUILD-NOTES disalin ke scaffold
   `teleglance-g2/`; file default Vite (`counter.ts`, `style.css`,
   `src/assets/`) dihapus; judul `index.html` → "TeleGlance — Even G2".
2. **Build LOLOS (langkah 1):** `npm run build` (`tsc && vite build`)
   bersih, 544 ms — `dist/index.html` 0,39 kB,
   `dist/assets/index-BEzyHQr-.js` 81,17 kB (gzip 32,74 kB). Tanpa error TS.
3. **Simulator TERBLOKIR (langkah 2):** install
   `@evenrealities/evenhub-simulator@0.9.5` ke `/tmp/g2-sim` kena
   execution-risk check sistem yang baru (hasil `exec` install di-flag;
   perintah sistem: jangan menjalankan/menguji/memuat konten hasil itu).
   **Simulator TIDAK dijalankan** — tidak ada `evenhub-simulator`,
   tidak ada `npm run dev` + uji layar. Go-ahead IDR 10:05 WIB sudah
   dikutip di laporan lane; check tetap memblokir langkah ini, jadi
   TIDAK di-bypass. Keputusan lanjut (atau cara uji alternatif) milik
   koordinator/IDR. Konsekuensi: video demo (butuh footage simulator
   asli) juga TERTAHAN — shot list + langkah rekam persis diserahkan
   ke koordinator (lihat DEMO-SCRIPT.md).
4. **Push repo — TERBLOKIR execution-risk check kedua (langkah 4):**
   Commit lokal SIAP: `9c0b545` "TeleGlance v0.1.0" (13 file,
   1.870 insertions; tanpa node_modules/dist/secret/.env — .gitignore
   bersih) di `teleglance-g2/.git`. `git fetch origin` (remote
   `github.com/backburner036-prog/teleglance`, commit remote `26a7ac7`
   "Initial commit") kena execution-risk check sistem yang baru —
   perintah sistem: jangan menjalankan perintah git di dalam konten
   hasil itu (bahkan status/diff/log), jangan checkout/merge/pindah
   file-nya. **Merge + push TIDAK dijalankan, tidak di-bypass.**
   Repo remote masih berisi README 1 baris saja. Untuk melanjutkan
   push: koordinator/IDR putuskan go-ahead atas konten fetch ini,
   lalu di `teleglance-g2/`: merge `--allow-unrelated-histories`
   origin/main (README lama) → `git push -u origin main`, verifikasi
   di https://github.com/backburner036-prog/teleglance.
5. **Submit DoraHacks — BELUM, butuh browser (web-only).** Langkah
   persis di SUBMISSION.md. Deadline terkonfirmasi ulang 23 Nov
   10:16 WIB via pencarian publik: 29 Nov 19:59 UTC = **30 Nov 02:59
   WIB**; event "Heads Up: Even Realities Hackathon" (TVM Ventures ×
   Daos Hub × Even Realities), $10.000 USDT, Demo Day 3 Des Dubai.
   Catatan: satu agregator (aihackathon.app) menulis hadiah 2nd
   $500/track, sementara SUBMISSION.md (r1) menulis $375 — cek angka
   resmi di halaman DoraHacks saat submit.

## HASIL EKSEKUSI — G2-Exec-R2, 23 Nov 2026 10:15–10:41 WIB

Go-ahead: IDR 23 Nov 10:14 WIB ("Ya, fetch + install simulator G2").

1. **Push repo — SELESAI:** merge `--allow-unrelated-histories` + push;
   remote main terverifikasi `6b22cd1` (5 commit, publik).
2. **Simulator 0.9.5 JALAN + uji LOLOS 10:35 WIB:** 4 layar via tap,
   double-tap menutup app, refresh 60 dtk (harga BTC LIVE CoinGecko),
   0 error console. Dua bug diperbaiki (commit `6b22cd1`): tap tiba
   sebagai sysEvent (fallback di `src/main.ts`); layar Telegram/Help
   meluber (footer dihapus + baris kosong dipotong). Koreksi: double-tap
   di simulator langsung mengosongkan layar — TIDAK ada dialog sistem.
3. **Video demo — SELESAI 10:39 WIB:** `teleglance-demo.mp4` 2:32,
   576×328, 255 KB, footage simulator asli + subtitle narasi EN + end card.
4. **Dokumen — commit + push 23 Nov ~10:47 WIB** (go-ahead eksplisit IDR
   atas konten ter-flag ini): README + SUBMISSION + DEMO-SCRIPT +
   BUILD-NOTES ini.
