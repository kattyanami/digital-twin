# Digital Twin

A full-stack “digital twin” experience: a **Next.js** marketing-style UI with an embedded chat surface, backed by a **FastAPI** service that calls OpenAI and stores lightweight conversation memory.

This repo is designed to deploy to **Vercel** as a **multi-service** project:

- Frontend is served at `/`
- Backend is served under `/_/backend/*` (configured via root `vercel.json`)

---

## Repository layout

- `frontend/`: Next.js app (UI + chat client)
- `backend/`: FastAPI API (`server.py`) + optional AWS Lambda adapter (`lambda_handler.py`)
- `vercel.json`: Vercel multi-service routing configuration
- `backend/data/`: supporting text/PDF assets used by the twin prompt pipeline (as implemented in your code)

---

## How the pieces connect

### Frontend → backend

The chat client calls:

- `${NEXT_PUBLIC_API_URL}/chat`

In production on Vercel, `NEXT_PUBLIC_API_URL` should be:

- `/_/backend`

That resolves to the same origin, for example:

- `https://YOUR_DOMAIN/_/backend/chat`

Locally, if `NEXT_PUBLIC_API_URL` is unset, the client falls back to:

- `http://localhost:8000/chat`

### Backend behavior (high level)

- Loads a system prompt via `prompt()` from `context.py`
- Calls OpenAI chat completions using model `gpt-4.1-mini`
- Persists short-term conversation context (last 10 messages) to either:
  - local JSON files under `MEMORY_DIR`, or
  - S3 objects when `USE_S3=true`

---

## API reference

Base paths:

- Local dev (default uvicorn): `http://localhost:8000`
- Vercel: `https://YOUR_DOMAIN/_/backend`

### `GET /health`

Returns service health and whether S3 memory is enabled.

Example:

```bash
curl -sS https://YOUR_DOMAIN/_/backend/health
