# Personal Developer Blog

A modern blog built with React Router, featuring a clean design focused on sharing development insights, tutorials, and personal experiences.

## Features

- Server-side rendering
- Hot Module Replacement (HMR)
- Asset bundling and optimization
- Data loading and mutations
- TypeScript support
- TailwindCSS for styling
- Responsive design
- Dark theme with cyan accents

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t blog-app .

# Run the container
docker run -p 3000:3000 blog-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Tech Stack

- React Router v7
- React 19
- TypeScript
- Tailwind CSS v4
- Vite
- Node.js

## Project Structure

```
app/
├── components/     # Reusable components
├── landing/        # Landing page component
├── routes/         # Route components
├── welcome/        # Welcome component
├── app.css         # Global styles
├── root.tsx        # Root component
└── routes.ts       # Route configuration

public/             # Static assets
```

## Styling

This project uses Tailwind CSS for styling with a custom dark theme featuring slate backgrounds and cyan accents. The design is responsive and optimized for readability.
