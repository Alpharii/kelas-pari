Git adalah sistem kontrol versi untuk melacak perubahan kode.

1. Membuat Repository Baru
```bash
git init
```

Membuat repo Git di folder saat ini.

2. Menambahkan File ke Staging Area
```bash
git add nama_file # tambah 1 file
git add . # tambah semua file
```

staging area adalah tempat file siap untuk di-commit.

3. Menyimpan Perubahan (Commit)
```bash
git commit -m "pesan commit"
```

Menyimpan perubahan dari staging ke riwayat Git.

4. Menambahkan Remote Repository
```bash
git remote add origin https://github.com/user/repo.git
```

Menghubungkan repo lokal ke repo online (GitHub, GitLab, dll.).

5. Mengecek dan Membuat Branch
```bash
git branch # melihat semua branch
git branch nama_branch # membuat branch baru
git checkout nama_branch # pindah branch
```

Branch adalah cabang pengembangan terpisah.

6. Mengirim Perubahan ke Remote
```bash
git push -u origin main # push branch main pertama kali
git push # push setelahnya
git push -u origin nama_branch # push branch lain
```

Mengirim commit dari lokal ke repo online.

Ringkasan Git
git init → inisialisasi repo Git.
git add → masukkan file ke staging area.
git commit → simpan perubahan ke riwayat Git.
git remote add → hubungkan ke repo online.
git branch → cek atau buat cabang pengembangan.
git push → kirim perubahan ke remote repo.

