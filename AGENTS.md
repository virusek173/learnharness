<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# No guessing

All design authority belongs to the human. **Never guess a design or implementation decision.** If anything is ambiguous — naming, behavior, data shapes, UX, defaults, scope boundaries, prompt wording — STOP and ask with the ask-user-question tool before proceeding. If you are "a little unsure," you are unsure: ask. A wrong guess is far more expensive than a question. Ask early, ask specific, one question per call.

Concretely: first investigate and plan rigorously (asking the user design questions along the way), get the plan approved by the user, and only then implement. Implementation should be mechanical execution of an approved plan — not interpretation.

# Fork & deployment

This repo is a fork of [amosblomqvist/learnharness](https://github.com/amosblomqvist/learnharness). Remotes: `origin` is the fork (`virusek173/learnharness`), `upstream` is the original. Keep fork-specific changes small so upstream syncs stay easy.

The app runs in Docker (`Dockerfile`, `docker-compose.yml`; `make up|down|build|restart|logs`). The container listens on `127.0.0.1:3000` only and is exposed to the tailnet over HTTPS via Tailscale Serve — the app needs HTTPS (it errored over plain HTTP). `data/`, `auth.json`, `chatgpt-credentials.json` and the host's `~/.claude` are mounted into the container — they are never baked into the image or committed.
