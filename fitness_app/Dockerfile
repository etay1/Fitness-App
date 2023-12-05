# Stage 1: Install dependencies and build
FROM node:14 AS builder

WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Use a smaller image for serving the built assets
FROM nginx:alpine

# Copy the built assets from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command to start nginx will serve the built React app
CMD ["nginx", "-g", "daemon off;"]

