# Project Goals
Membangun aplikasi yang dapat digunakan untuk memudahkan dalam memberikan tugas dan mengelola tugas dari _Project Manager_ ke anggota. Serta memudahkan anggota untuk melihat tugas-tugas yang harus dikerjakan guna mencapai tujuan project pada kegiatan _Project Based Learning._

# Project Scope
- Project ini digunakan sebagai penunjang kegiatan _Project Based Learning_ iTech Hackathon. 
- Pada milestone [0.1.0](https://github.com/iTech-Hackathon/Task-Management/milestone/1) (Klik link for more info), project ini lebih memfokuskan pada **Software Feature** yang sempurna dengan tampilan yang sederhana. Kemudian, secara _incremental_ aplikasi dari project ini dikembang hingga menjadi lebih baik.
- Project yang akan dikembangkan merupakan aplikasi berbasis web yang responsif.
- Terdapat 2 role (atau hak akses) dalam aplikasi ini, yaitu:
    - Project Manager, dengan hak akses berupa:
        - Mengelola project (Create, Read, Update & Delete)
        - Mengeola tugas project (Create, Read, Update & Delete) 
        - _Semua fitur yang ada pada role Anggota ..._
    - Member, dengan hak akses berupa:
        - Melihat tugas (Read)
        - Update status tugas (Update)
- Pada milestone [0.1.0](https://github.com/iTech-Hackathon/Task-Management/milestone/1), tidak perlu ada fitur personalisasi akun (Foto profil, dll).
- Kontent deskripsi/catatan tugas dan project harus mendukung format penulisan Markdown.
- Untuk meringankan penggunaan [back end](#technology), deskripsi tugas dan project tidak disimpan pada back end. Melainkan disimpan di repo khusus GitHub organization ini dalam bentuk markdown. Sehingga pada back end hanya menyimpan sebgian data yang rinciannya sebagai berikut:
    - Kode tugas dan project
    - Judul tugas dan project
    - Metadata tugas dan project
    - Status tugas masing-masing anggota
    - _TBD._ (To Be Determined)

# User Story (Non Standard)
- Core Feature:
    - Sebagai **Project Manager**, saya ingin aplikasi tersebut dapat mengelola (CRUD) project A, project B, dst. Dari project tersebut (misalkan project A) saya dapat mengelola (CRUD) tugas project. Disetiap tugas/project, **Project Manager** dapat memberikan judul tugas/project dan dapat memberikan catatan atau deskripsi tugas/project.
    - Pada **Sistem**, seharusnya dapat memunculkan project-project yang telah dibuat oleh project manager beserta tugas-tugas nya kepada **Project Manager** dan **Anggota**
    - Sebagai **Anggota**, saya ingin aplikasi tersebut dapat memunculkan project-project dan tugas-tugas project beserta deskripsi/catatan nya. Dari tugas-tugas project tersebut, **Anggota** dapat mengupdate status pekerjaan (ToDo atau Done)

![Tolong pakai background putih for better look.](ProjectTask.png)
<p align="center">Gambar 1. Hubungan project dan tugas</p>

# Technology & Library
- **Font End**
    - React JS
    - Material Design (Design System)
    - Markdown parser

- **Back End**
    - Firebase (untuk hosting, database NoSQL, dll)

# NoSQL Database Schema
```
{
    "projects": [
        {
            "id": <Projects-ID: String>,
            "title": <Title: String>,
            "tasks": [
                {
                    "id": <Tasks-ID: String>,
                    "title": <Title: String>
                    "description_url": <Raw-README-URL: String>
                },
                ...
            ]
        },
        ...
    ],
    "users": [
        {
            "username": <GitHub-Username: String>,
            "role": <User-Role: String>,
            "completed_tasks": [
                {
                    "project": <Projects-ID: String>,
                    "task": <Tasks-ID: String>
                },
                ...
            ]
        },
        ...
    ]
}
```

- `Projects-ID` \
    Menggunakan format periode ke pengurusan `[Tahun Sekarang][Digit terakhir tahun depan]-[Project ke N]`. 

    Contoh: 
    Periode ke pengurusan 2022/2023, project ke 3. Maka ditulis menjadi `20223-3`

- `Tasks-ID` \
    Menggunakan format yang `[Tugas ke N]`.

    Contoh:
    Pada project `20223-3` terdapat 10 tugas, dan Project Manager menambahkan 1 tugas lagi. Sehingga menjadi tugas yang baru tersbut memiliki ID `11`

- `Title` \
    Menyimpan dul/garis besar dari project/tugas yang diberikan.

- `Raw-Readme-URL` \
    Menyimpan URL deskripsi tugas/project dalam format Markdown yang dapat diambil secara raw/plain text.

- `GitHub-Username` \
    Username Github anggota, yang sudah terdaftar.

- `User-Role` \
    Role yang ada pada aplikasi ini, yaitu `Project Manger` dan `Member`
