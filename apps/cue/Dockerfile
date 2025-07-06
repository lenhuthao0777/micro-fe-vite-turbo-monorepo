FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy workspace files
COPY package.json ./
COPY ../../packages/shared ./packages/shared/

# Create necessary directories
RUN mkdir -p packages/shared

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Expose port
EXPOSE 5174

# Start development server
CMD ["pnpm", "dev"]