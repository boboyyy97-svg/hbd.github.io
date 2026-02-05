# 🎂 Birthday Wishes Website

Ini adalah website ucapan ulang tahun yang **modern, aesthetic, dan interaktif** yang bisa dibuka online!

---

## 📁 **Struktur Folder**

```
birthday-wishes/
├── index.html          (File HTML utama)
├── style.css           (File CSS - styling)
├── script.js           (File JavaScript - logic)
├── music.mp3           (File musik - GANTI INI)
└── img/                (Folder foto)
    ├── story-1.jpg     (Foto slide 2, posisi kiri)
    ├── story-2.jpg     (Foto slide 2, posisi kanan)
    ├── gallery-featured-1.jpg  (Foto featured gallery, kiri)
    ├── gallery-featured-2.jpg  (Foto featured gallery, kanan)
    ├── gallery-1.jpg   (Foto gallery grid 1)
    ├── gallery-2.jpg   (Foto gallery grid 2)
    ├── gallery-3.jpg   (Foto gallery grid 3)
    └── gallery-4.jpg   (Foto gallery grid 4)
```

---

## 🎵 **Cara Ganti Musik**

1. **Download file musik** (MP3 format) dari:
   - YouTube ke MP3 converter: https://youtube-mp3.download/
   - Atau dari Spotify, SoundCloud, dll
   - Pastikan nama file adalah `music.mp3`

2. **Letakkan file** `music.mp3` di folder yang sama dengan `index.html`

3. **Selesai!** Musik otomatis akan diputar saat website dibuka.

---

## 📸 **Cara Ganti Foto**

### **Slide 2 (The Story) - 2 Foto**

1. Siapkan 2 foto berkualitas baik
2. Rename menjadi:
   - `story-1.jpg` (kiri)
   - `story-2.jpg` (kanan)
3. Letakkan di folder `img/`

**Edit caption di `index.html` (baris ~71-72):**
```html
<p class="story-photo-caption">Ubah teks caption di sini</p>
```

---

### **Slide 3 (Gallery) - 6 Foto Total**

**2 Foto Featured (besar di atas):**
- `gallery-featured-1.jpg` (kiri)
- `gallery-featured-2.jpg` (kanan)

Edit caption di `index.html` (baris ~107-108):
```html
<p class="gallery-featured-caption">Ubah caption di sini</p>
```

**4 Foto Grid (kecil di bawah):**
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`

Edit label di `script.js` (baris ~52-67):
```javascript
const images = [
    {
        src: 'img/gallery-1.jpg',
        label: 'Ubah label di sini'  // <-- Edit ini
    },
    // ... dan seterusnya
];
```

---

## ✏️ **Cara Edit Text**

### **Slide 1 (Cover)**
Edit di `index.html`:
```html
<h1 class="cover-title">Happy Birthday!</h1>  <!-- Judul -->
<p class="cover-subtitle">Klik untuk memulai...</p>  <!-- Subtitle -->
<button>Buka Kado ✨</button>  <!-- Tombol -->
```

### **Slide 2 (Story)**
Edit di `index.html` (baris ~92-107):
```html
<p class="story-paragraph">Ubah text cerita di sini</p>
```

Semua text cerita bisa disesuaikan sesuai keinginan.

### **Slide 3 (Gallery)**
Edit di `script.js`:
```javascript
label: 'Ganti label foto di sini'
```

### **Slide 4 (The Wish)**
Edit di `index.html` (baris ~114-118):
```html
<h2 class="wish-title">Terima Kasih!</h2>
<p class="wish-text">Ubah pesan penutup di sini</p>
```

---

## 🎨 **Cara Ganti Warna**

Edit `style.css` bagian `:root` (baris ~8-14):

```css
:root {
    --primary-color: #D4A574;      /* Warna utama (coklat) */
    --secondary-color: #E8D4C4;    /* Warna secondary (cream) */
    --accent-color: #C9A885;       /* Warna accent (coklat gelap) */
    --light-bg: #FEFBF7;           /* Warna background (putih terang) */
    --dark-text: #4A4A4A;          /* Warna text (abu-abu gelap) */
    --white: #FFFFFF;              /* Putih */
}
```

Contoh warna aesthetic yang bagus:
- **Rose Gold**: `#B76E79` (primary), `#F4EDED` (secondary)
- **Mint Green**: `#6FBE8F` (primary), `#E8F5E9` (secondary)
- **Lavender**: `#C4A0E1` (primary), `#F3E5F5` (secondary)

---

## 📱 **Cara Upload ke Internet**

### **Opsi 1: Netlify (PALING MUDAH) ⭐**

1. Compress folder `birthday-wishes` jadi ZIP
2. Buka https://netlify.com
3. Sign up (pakai Google/GitHub)
4. Drag-drop folder ke dashboard
5. Dapat link otomatis dalam 1 menit!

### **Opsi 2: GitHub Pages**

1. Buat GitHub account
2. Buat repository: `username.github.io`
3. Upload semua file ke repo
4. Akses di: `https://username.github.io/`

### **Opsi 3: Vercel**

1. Buka https://vercel.com
2. Sign up (pakai GitHub)
3. Import project folder
4. Dapat link otomatis

---

## 🖼️ **Ukuran Foto yang Disarankan**

- **Slide 2 (Story)**: 500x400px
- **Slide 3 (Featured)**: 600x500px
- **Slide 3 (Grid)**: 400x400px

Semua foto akan auto-resize sesuai layout, tapi ukuran di atas adalah optimal.

---

## 🔧 **Troubleshooting**

### **Musik tidak terdengar**
- Pastikan file `music.mp3` ada di folder yang sama dengan `index.html`
- Coba ganti nama file ke `music.mp3` (case-sensitive)
- Chrome memerlukan user interaction untuk play audio otomatis

### **Foto tidak muncul**
- Pastikan file nama foto **TEPAT** sama (case-sensitive):
  - `story-1.jpg` (bukan Story-1.jpg)
  - Pastikan ada folder `img/`
- Download foto lokal, jangan URL online

### **Layout kecil/besar**
- Edit `style.css` untuk font size:
```css
.cover-title {
    font-size: 3.5rem;  /* Ubah angka ini */
}
```

---

## 📞 **Tips**

1. **Test di mobile**: Buka di HP sebelum share
2. **Gunakan foto berkualitas**: Minimal 1200x1000px
3. **Musik yang tepat**: Pilih lagu yang berkesan
4. **Text yang personal**: Edit semua text sesuai karakter orang yang dirayakan
5. **Share dengan QR Code**: Buat QR code dari link Netlify

---

## 🎉 **Selamat Membuat!**

Website ini siap digunakan dan bisa di-customize sesuai keinginan. Enjoy! ✨

Jika ada pertanyaan, silakan tanya! 😊
