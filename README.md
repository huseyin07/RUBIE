# RUBIE

A polished, responsive single-page community website for RUBIE on ARC. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Required image assets

Binary assets are intentionally excluded from this code-only repository. Before running or deploying, place the supplied authentic Rubie imagery at:

- `public/rubie.png`
- `public/rubie-story.jpeg`
- `public/frank-rubie.jpg`

The repository does not substitute or generate dog imagery; this preserves Rubie's real appearance and proportions.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repository to your Git provider.
2. Import it into Vercel.
3. Keep the detected **Next.js** framework preset and default build settings.
4. Deploy. No environment variables or backend services are required.

Alternatively, run `npx vercel` from the project directory after authenticating with the Vercel CLI.
