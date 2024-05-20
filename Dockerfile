# Stage 1: Build the application
FROM node:18-bullseye-slim AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Configure Yarn to have a longer network timeout
RUN yarn config set network-timeout 600000

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application
FROM node:18-bullseye-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/tailwind.config.ts ./
COPY --from=builder /app/postcss.config.mjs ./

# Configure Yarn to have a longer network timeout
RUN yarn config set network-timeout 600000

# Install only production dependencies
RUN yarn install --frozen-lockfile --production=true

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
