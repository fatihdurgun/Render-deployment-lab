const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Azure kendi portunu buraya enjekte eder

app.get('/', (req, res) => {
    res.send(`
        <html>
            <body style="background-color: #f0f0f2; font-family: sans-serif; text-align: center; padding-top: 50px;">
                <h1>Bulut Bilişim Ödevi</h1>
                <p><strong>Ad Soyad:</strong> Fatih Daşar</p>
                <p><strong>Öğrenci No:</strong> [231002047]</p>
                "scripts": {
                    "start": "node index.js"
                },
            </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışıyor.`);
});