#!/bin/bash
# Unified Deployment Script
# Handles both Production and Development environments
# Version: 2.0.0

set -e

echo "====================================="
echo "DevOps Simulator - Unified Deployment"
echo "====================================="

# Select environment (default = production)
DEPLOY_ENV=${1:-production}

if [ "$DEPLOY_ENV" == "production" ]; then
    DEPLOY_REGION="us-east-1"
    APP_PORT=8080
    APP_URL="https://app.example.com"
elif [ "$DEPLOY_ENV" == "development" ]; then
    DEPLOY_REGION="local"
    APP_PORT=3000
    APP_URL="http://localhost:$APP_PORT"
else
    echo "Error: Unknown environment '$DEPLOY_ENV'"
    echo "Usage: ./deploy.sh [production|development]"
    exit 1
fi

echo "Environment: $DEPLOY_ENV"
echo "Region: $DEPLOY_REGION"
echo "Port: $APP_PORT"

# Pre-deployment checks
echo "Running pre-deployment checks..."
if [ ! -f "config/app-config.yaml" ]; then
    echo "Error: Configuration file not found!"
    exit 1
fi

# Deploy application
echo "Starting deployment..."
echo "Pulling latest Docker images..."
# docker pull devops-simulator:latest

if [ "$DEPLOY_ENV" == "production" ]; then
    echo "Applying rolling update strategy..."
    # kubectl rolling-update devops-simulator
else
    echo "Launching development server..."
    # npm run dev or docker-compose up
fi

echo "Deployment completed successfully!"
echo "Application available at: $APP_URL"
