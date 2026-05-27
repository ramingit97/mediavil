# ---- Stage 1: build the Vite app ----
FROM node:22-slim AS build
WORKDIR /app

# Install deps with a clean, reproducible install
COPY package.json package-lock.json ./
RUN npm ci

# Build (tsc -b && vite build -> /app/dist)
COPY . .
RUN npm run build

# ---- Stage 2: serve static files with nginx ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
