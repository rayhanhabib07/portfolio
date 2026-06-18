# Portfolio — Shadhin

Conversion-focused agency portfolio built with Next.js, TypeScript, and Tailwind CSS.

**Live:** [shadhincodes.vercel.app](https://shadhincodes.vercel.app)

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** for styling
- **Supabase** for contact form storage
- **Vercel** for hosting + CI/CD

## Structure

```
app/
  components/
    Nav.tsx           — sticky nav with mobile menu + CTA
    Hero.tsx          — positioning headline + call-to-action
    CaseStudies.tsx   — project stories (Problem → Approach → Build → Result)
    Services.tsx      — productised service offerings
    About.tsx         — bio + photo
    Testimonials.tsx  — data-driven, add entries as reviews come in
    Blog.tsx          — hidden until posts are added
    Contact.tsx       — working form + scheduling embed placeholder
  api/contact/
    route.ts          — Zod validation, Supabase insert, rate limiting
```

## Adding content

**Case study** — add an entry to the `caseStudies` array in `CaseStudies.tsx`.

**Testimonial** — add an entry to the `testimonials` array in `Testimonials.tsx`.

**Blog post** — add an entry to the `posts` array in `Blog.tsx`. The section appears automatically.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
