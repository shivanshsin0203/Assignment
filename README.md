# Full Stack Project

A responsive web application built with modern technologies, featuring a TypeScript React frontend and Node.js Express backend.

## Tech Stack

### Frontend
- React with TypeScript
- Vite (Build tool)
- Zustand (State management)
- Responsive design

### Backend
- Express.js
- Prisma ORM
- PostgreSQL
- Docker

## Deployment

- Frontend: Cloudflare Pages
- Backend: Google Cloud Run

## Getting Started

### Prerequisites
- Node.js
- Docker
- PostgreSQL
- pnpm/npm/yarn

### Frontend Setup
```bash
cd frontend
pnpm install
pnpm dev
```

### Backend Setup
```bash
cd backend
pnpm install
docker-compose up -d   # Start PostgreSQL
pnpm prisma migrate dev
pnpm dev
```

## Environment Variables

### Frontend
Create `.env` file in frontend directory:
```
VITE_API_URL=your_backend_url
```

### Backend
Create `.env` file in backend directory:
```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
PORT=3000
```

## Development

1. Start the PostgreSQL database using Docker
2. Run Prisma migrations
3. Start the backend server
4. Start the frontend development server

## Building for Production

### Frontend
```bash
cd frontend
pnpm build
```

### Backend
```bash
cd backend
docker build -t your-app-name .
```

## Deployment

### Frontend (Cloudflare Pages)
- Connect your repository to Cloudflare Pages
- Set build command: `pnpm build`
- Set build output directory: `dist`

### Backend (Google Cloud Run)
- Build and push Docker image to Google Container Registry
- Deploy to Cloud Run using the Google Cloud Console or CLI

## Project Structure
```
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── backend/
    ├── src/
    ├── prisma/
    ├── Dockerfile
    └── package.json
```
