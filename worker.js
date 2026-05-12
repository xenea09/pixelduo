const PROJECT_LABELS = {
  new: 'Neue Webseite',
  redesign: 'Redesign',
  shop: 'Online-Shop',
  other: 'Anderes',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      let body;
      try {
        body = await request.json();
      } catch {
        return Response.json({ error: 'Ungültige Anfrage' }, { status: 400 });
      }

      const { name, email, project, message } = body;

      if (!name || !email || !project || !message) {
        return Response.json({ error: 'Fehlende Felder' }, { status: 400 });
      }

      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'B&G Technologies <noreply@eneabaechler.ch>',
          to: ['baechlerenea@gmail.com'],
          subject: `Neue Anfrage von ${name} – ${PROJECT_LABELS[project] ?? project}`,
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
        const text = await r.text();
        console.error('Resend error:', text);
        return Response.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 });
      }

      return Response.json({ ok: true });
    }

    return env.ASSETS.fetch(request);
  },
};
