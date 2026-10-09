# Bizim Hikâyemiz

Çiftler için anıları, fotoğrafları, mektupları ve canlı birliktelik sayaçlarını vintage scrapbook tarzında sergileyen basit bir web günlüğü.

[![Demo](https://img.shields.io/badge/Canlı%20Demo-ahmetkaan244.github.io-pink?style=for-the-badge&logo=github)](https://ahmetkaan244.github.io/bizimhikayemiz/) 

Herhangi bir framework, paket yöneticisi veya derleme adımı gerektirmez; saf HTML, CSS ve JavaScript ile yazılmıştır.

## Özellikler

- **Canlı sayaçlar:** Tanışma ve ilişki başlangıç tarihine göre anlık gün, saat, dakika ve saniye hesabı.
- **Zaman tüneli:** İlişkinin dönüm noktalarını gösteren scrapbook dikey akışı.
- **Polaroid albüm:** Tıklandığında büyüyen fotoğraflar ve notlar (lightbox).
- **Mektuplar:** Tıklanınca açılan nostaljik mektup modalları.
- **Müzik çalar:** Arka planda çalan piyano melodisi (veya kendi mp3 dosyanız).
- **Mobil uyumlu:** Telefon, tablet ve masaüstü ekranlarıyla uyumlu responsive arayüz.

## Kullanım

1. Repoyu klonlayın veya zip olarak indirin.
2. `index.html` dosyasını doğrudan tarayıcınızda açın.

## Özelleştirme

Sitedeki tüm veriler `data.js` dosyası içindedir. Bu dosyayı bir metin editörüyle açıp düzenleyebilirsiniz:

- **İsimler:** `couple` objesi altındaki `person1` ve `person2` alanlarını değiştirin.
- **Tarihler:** `dates` objesi altındaki `firstTalkDate` ve `relationshipDate` alanlarını `YYYY-AA-GGTHH:MM:SS` formatında güncelleyin.
- **Şarkı:** Kendi şarkınızı kullanmak isterseniz MP3 dosyanızı `assets/` klasörüne atıp `music.audioSrc` alanına dosya yolunu yazın (örn: `assets/sarki.mp3`).
- **Fotoğraflar ve Anılar:** `polaroids`, `specialMemories`, `timeline` ve `letters` dizilerindeki metinleri ve görsel yollarını kendi anılarınıza göre düzenleyin.

## Yayınlama (GitHub Pages)

Projeyi internette yayınlamak için:

1. Repoyu GitHub hesabınıza yükleyin.
2. Repo sayfasında **Settings** > **Pages** bölümüne gidin.
3. **Branch** kısmında `main` (veya `master`) ve `/ (root)` seçip kaydedin.
4. Birkaç dakika içinde siteniz `https://kullanici-adiniz.github.io/repo-adiniz/` adresinde yayında olacaktır.

## Lisans

MIT
