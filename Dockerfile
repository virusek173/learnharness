FROM node:22-bookworm-slim
ENV TZ=Europe/Warsaw

# Chromium: the demo builder's verification browser (src/agent/subagents/headless.ts).
RUN apt-get update \
	&& apt-get install -y --no-install-recommends chromium ca-certificates tzdata \
	&& rm -rf /var/lib/apt/lists/*
ENV CHROME_PATH=/usr/bin/chromium

# Claude Code CLI for the claude-code provider; login comes from the host's ~/.claude mount.
ARG CLAUDE_CODE_VERSION=2.1.316
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}
ENV DISABLE_AUTOUPDATER=1

ENV ELECTRON_SKIP_BINARY_DOWNLOAD=1
WORKDIR /app
RUN chown node:node /app
USER node

COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start", "--", "-H", "0.0.0.0", "-p", "3000"]
