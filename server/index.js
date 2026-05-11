import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

const PROJECT_LABELS = {
  new: 'Neue Webseite',
  redesign: 'Redesign',
  shop: 'Online-Shop',
  other: 'Anderes',
};

app.post('/api/contact', async (req, res) => {
  const { name, email, project, message } = req.body;

  if (!name || !email || !project || !message) {
    return res.status(400).json({ error: 'Fehlende Felder' });
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'B&G Technologies <noreply@eneabaechler.ch>',
        to: ['baechlerenea@gmail.com'],
        subject: `Neue Anfrage von ${name} — ${PROJECT_LABELS[project] ?? project}`,
        reply_to: email,
        html: `
          <h2 style="color:#4f6b3a">Neue Anfrage via B&amp;G Technologies</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Projekt:</strong> ${PROJECT_LABELS[project] ?? project}</p>
          <hr>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!r.ok) {
      const body = await r.text();
      console.error('Resend error:', body);
      return res.status(500).json({ error: 'Resend-Fehler' });
    }

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server-Fehler' });
  }
});

app.listen(3001, () => {
  console.log('API-Server läuft auf http://localhost:3001');
});
