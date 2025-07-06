# Build stage
FROM node:18-alpine as builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json pnpm-*.yaml ./
COPY apps/host/package*.json ./apps/host/
COPY apps/cue/package*.json ./apps/cue/
COPY apps/react-remote/package*.json ./apps/react-remote/
COPY packages/shared/package*.json ./packages/shared/

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Build applications
RUN pnpm build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/apps/host/dist /usr/share/nginx/html/host
COPY --from=builder /app/apps/cue/dist /usr/share/nginx/html/cue
COPY --from=builder /app/apps/react-remote/dist /usr/share/nginx/html/react-remote

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]