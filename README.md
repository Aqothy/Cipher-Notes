This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

Jam stack application built using Next.js app router, mongodb, mongoose, and node. Whisper note's authentication works by sending access and refresh token after login. The access token will be stored in redux state memory, and the refresh token will be stored in http only cookie. By doing so the system prevents against the two most common site attacks XSS and CSFR, assuring top security, learn more about it here: https://www.youtube.com/watch?v=iD49_NIQ-R4. Through the use of custom refresh hook, axios interceptors and persist login component, the user is able to be authenticated even when the page reloads or access token expires.

## Future improvements

- Implement cloudinary to work with images
