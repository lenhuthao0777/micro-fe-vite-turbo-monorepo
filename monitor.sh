#!/bin/bash

# Simple monitoring script

check_service() {
    if curl -f http://localhost/health > /dev/null 2>&1; then
        echo "✅ Service is healthy"
    else
        echo "❌ Service is down, restarting..."
        docker-compose -f docker-compose.prod.yml restart
    fi
}

# Run health check
check_service

# Log disk usage
df -h

# Log memory usage
free -h