# Portfolio Site

A minimal portfolio for Taieb Bourbia, built with vinext, Next, React,
and Tailwind CSS.

## Edit Your Information

Update your portfolio content in:

```txt
app/portfolio-content.ts
```

That file controls the name, headline, links, technologies, projects, extra
repositories, experience, and contact details. The page groups technologies by
category and keeps extra repositories in an expandable list.

The portrait used on the homepage is stored at:

```txt
public/taieb-bourbia-photo.jpg
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Validate

```bash
npm run lint
npm run build
```

## Notes

- The site is intentionally static and does not need a database.
- `.openai/hosting.json` keeps D1 and R2 disabled.
- The build output is Cloudflare Worker-compatible through the Sites vinext
  setup.
