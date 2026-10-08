# Portfolio Site

A simple animated portfolio for Taieb Bourbia, built with vinext, Next, React,
and Tailwind CSS.

## Edit Your Information

Update your portfolio content in:

```txt
app/portfolio-content.ts
```

That file controls the name, headline, links, focus areas, projects, extra
repositories, experience, and contact details.

The generated hero image is stored at:

```txt
public/portfolio-hero.png
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
