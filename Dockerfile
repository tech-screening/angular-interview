FROM node:22-bullseye-slim

LABEL name="Angular dev environment" \
  description="This image can be used to create a dev environment for building Angular." \
  vendor="angular"

# Set working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy package files
COPY package*.json ./

# Install dependencies with clean npm install
RUN npm install

# Copy the rest of the application
COPY . .

# Expose development server port
EXPOSE 4200

# Expose test runner port
EXPOSE 9876

# Set environment variables for Angular development server
ENV HOST=0.0.0.0

# Start development server with file watching and host/port configuration
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--poll", "2000", "--disable-host-check"]
