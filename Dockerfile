FROM node:20-alpine AS base
WORKDIR /usr/app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile

FROM base AS builder
COPY --from=deps /usr/app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:20-alpine AS runner
WORKDIR /usr/app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_OPTIONS=--max-old-space-size=384

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/.next/standalone ./
COPY --from=builder /usr/app/.next/static ./.next/static

RUN mkdir -p /usr/app/.next/cache/images && chown -R nextjs:nextjs /usr/app

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
