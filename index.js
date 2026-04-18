// 1. Gerekli kütüphaneyi (express) projemize dahil ediyoruz.
const express = require('express');

// 2. Express uygulamasını başlatıyoruz.
const app = express();

// 3. Port ayarı: Render (veya Azure) kendi portunu buraya otomatik enjekte eder.
// Eğer bulutta çalışmıyorsa varsayılan olarak 3000 portunu kullanır.
const port = process.env.PORT || 3000;

// 4. Ana sayfa (/) isteği geldiğinde tarayıcıya ne gönderileceğini tanımlıyoruz.
// Burası saf HTML kodudur.
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="tr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bulut Bilişim Ödevi</title>
            <style>
                body {
                    background-color: #f0f0f2;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    text-align: center;
                    padding-top: 100px;
                    margin: 0;
                }
                .container {
                    background-color: white;
                    display: inline-block;
                    padding: 40px;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                h1 {
                    color: #0078d4; /* Azure/Microsoft mavisi */
                    margin-bottom: 30px;
                }
                p {
                    font-size: 18px;
                    color: #333;
                    margin: 10px 0;
                }
                strong {
                    color: #000;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Bulut Bilişim Ödevi - Render CI/CD</h1>
                <p><strong>Ad Soyad:</strong> Fatih Daşar</p>
                <p><strong>Öğrenci No:</strong> 231002047</p>
                <p><em>Durum: Uygulama başarıyla bulutta çalışıyor!</em></p>
            </body>
        </div>
        </html>
    `);
});

// 5. Sunucuyu belirtilen portta dinlemeye başlıyoruz.
app.listen(port, () => {
    console.log(`Uygulama yerelde http://localhost:${port} adresinde çalışıyor.`);
    console.log('Buluta yüklenmeye hazır!');
});