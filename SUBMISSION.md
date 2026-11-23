# TeleGlance — Paket Submit DoraHacks (Even Realities G2)

> Status 23 Nov 2026 ~10:40 WIB: repo SUDAH PUSH ke GitHub (commit
> `6b22cd1`, 23 Nov 10:39 WIB — terverifikasi via `git ls-remote`, 5 commit,
> publik). Build LOLOS. **Simulator test LOLOS 23 Nov 10:35 WIB** (sim 0.9.5:
> 4 layar + tap/double-tap + refresh 60 dtk, 0 error console). **Video demo
> SELESAI 23 Nov 10:39 WIB** (`video/teleglance-demo.mp4`, 2:32, 576×328,
> footage simulator asli + subtitle EN; upload YouTube IDR tersisa).
> Submit DoraHacks BELUM (butuh URL video YouTube dulu). Jangan klaim sudah
> submit sebelum langkah di bawah benar-benar dieksekusi.

## Fakta hackathon (terverifikasi lane r1, 23 Nov 2026)

- Event: Even Realities G2 Hackathon, DoraHacks — $10.000 USDT, 10 pemenang
  (Grand $2.000, 1st/track $1.250, 2nd $375, Best Telegram $1.000,
  Community Partner s.d. $500) + s.d. 10 pasang G2 refurbished.
  **Diskrepansi SELESAI 23 Nov 10:20 WIB:** angka resmi DoraHacks 2nd/track
  = **$375** (SUBMISSION.md r1 benar); $500 yang ditulis satu agregator
  adalah Community Partner Award (s.d. $500), bukan 2nd/track.
- **Deadline submit: 30 Nov 2026 02:59 WIB** (29 Nov 19:59 UTC).
- Demo Day 3 Des 2026, Dubai, remote tersedia. Cash USDT ≤7 hari setelah Demo Day.
- Syarat: repo publik GitHub/GitLab + README, video demo ≤3 mnt (simulator
  atau G2), deskripsi singkat, maks 5 feature request. Tim 1–4, worldwide.
  Demos testnet/paper/read-only; dilarang pegang dana user & nasihat finansial.
- Submit: HANYA via web DoraHacks (tidak ada API/CLI submit yang ditemukan).
  URL: https://dorahacks.io/hackathon/even-realities/detail

## Checklist submit

- [x] Source app (`src/main.ts`) + manifest (`app.json`) + README
- [x] Rencana video demo ≤3 mnt (`DEMO-SCRIPT.md`)
- [x] Build lolos: `npm run build` + `vite build` — LOLOS 23 Nov 10:09 WIB
      (`tsc` bersih, dist 81,17 kB). `evenhub pack` tidak dijalankan
      (bukan bagian pipeline yang diminta; packer opsional bila diperlukan).
- [x] Uji simulator: 4 layar + tap/double-tap + refresh 60 dtk —
      **LOLOS 23 Nov 10:35 WIB** (sim 0.9.5, Xvfb :99, automation API :9898;
      bukti `sim-test/v3-*.png` + `sim-test-results.json`). Temuan + fix:
      (a) tap simulator tiba sebagai sysEvent bukan textEvent — fix di
      `src/main.ts` (fallback sysEvent, commit `6b22cd1`); (b) layar Telegram
      (13 baris) + Help (11 baris) meluber dari 576×288 (muat 10 baris) —
      footer Telegram dihapus + 1 baris kosong Help dipotong; (c) double-tap
      menutup app (layar blank) — simulator TIDAK menampilkan dialog sistem;
      narasi video disesuaikan. Harga crypto LIVE CoinGecko terverifikasi
      (BTC $61.418–$61.520 bergerak antar shot); refresh 60 dtk terverifikasi
      (jam "Sinkron" + harga berubah).
- [x] Video demo direkam dari simulator asli — **SELESAI 23 Nov 10:39 WIB**:
      `video/teleglance-demo.mp4` (2:32, 576×328, h264, 255 KB; 5 shot
      sesuai DEMO-SCRIPT.md; subtitle EN dibakar; end card repo + deadline).
      **Sisa: upload ke YouTube IDR (Public/Unlisted) — langkah BOT utama.**
      Cuplikan LIVE Telegram belum ada (butuh token bot dari IDR).
- [x] Repo publik `github.com/backburner036-prog/teleglance` diisi —
      PUSHED 23 Nov 10:39 WIB (commit `6b22cd1`, terverifikasi via
      `git ls-remote`: `6b22cd14c426808e4c37a39c8aab303c8a14c390`).
- [ ] Daftar + submit di halaman DoraHacks (via browser — lane ini tidak
      bisa; serahkan ke koordinator/IDR)
- [ ] Deskripsi submit (draf): "TeleGlance — Telegram digest + crypto
      watchlist for Even G2. One glance: latest Telegram messages and
      BTC/ETH/SOL spot prices on a 576×288 canvas. Tap cycles screens,
      double-tap exits. Demo mode needs zero accounts; live mode uses your
      own Telegram bot (Bot API) + public CoinGecko prices. Read-only,
      no funds, no financial advice."

## Langkah submit persis (untuk koordinator/IDR — via browser)

1. Buka https://dorahacks.io/hackathon/even-realities/detail, login DoraHacks
   (akun IDR; bila belum ada, daftar gratis — email saja).
2. Klik Register/Submit Project → isi: nama "TeleGlance", track
   Messaging (+ tandai Best Telegram Integration), deskripsi draf di atas.
3. Tempel: URL repo GitHub publik + URL video YouTube ≤3 mnt.
4. Kirim SEBELUM 30 Nov 2026 02:59 WIB. Simpan screenshot halaman
   konfirmasi + submission ID ke `SUBMISSION.md` ini.

## FLAG — bukan blocker build, tapi keputusan IDR bila menang

- **KYC di payout:** T&C hackathon DoraHacks mencadangkan "Prize
  distribution is subject to KYC/AML review and sponsor approval where
  applicable." IDR 23 Nov 09:47 WIB membuka kembali kategori ini untuk
  keenam target termasuk G2. Bila menang dan payout menuntut dokumen
  identitas, keputusan milik IDR; lane TIDAK PERNAH mengisi/mengirim
  dokumen identitas atau form pajak.
- **Akun Even Realities di HP IDR (C19):** masih parkir — tidak disentuh
  lane ini. Dampak: uji kacamata fisik tidak bisa; simulator cukup
  untuk build + submit + video. Full-inbox Telegram (MTProto) juga
  parkir karenanya — app memakai Bot API + mode DEMO.
- **Lisensi kontribusi DoraHacks ToS 2023:** peserta memberi lisensi luas
  atas Contributions (termasuk hak sell/resell). Bila IDR mau, minta
  klarifikasi sebelum submit — bukan blocker.
