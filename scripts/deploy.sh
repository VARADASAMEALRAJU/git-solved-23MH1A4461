
#!/bin/bash
# Development Deployment Script
# Version: 2.0.0-beta

set -e

echo "====================================="
echo "DevOps Simulator - Development Deploy"
echo "====================================="

# Configuration
DEPLOY_ENV="development"
DEPLOY_MODE="docker-compose"
APP_PORT=3000
ENABLE_DEBUG=true

echo "Environment: $DEPLOY_ENV"
echo "Mode: $DEPLOY_MODE"
echo "Port: $APP_PORT"
echo "Debug: $ENABLE_DEBUG"

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Run tests
echo "Running tests..."
npm test

# Deploy application
echo "Starting deployment..."
echo "Using Docker Compose..."
docker-compose up -d

# Wait for application to start
echo "Waiting for application to be ready..."
sleep 5

# Health check
echo "Performing health check..."
curl -f http://localhost:$APP_PORT/health || exit 1

echo "Deployment completed successfully!"
echo "Application available at: http://localhost:$APP_PORT"
echo "Hot reload enabled - code changes will auto-refresh"