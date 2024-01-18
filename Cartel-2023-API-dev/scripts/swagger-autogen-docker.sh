#!/bin/sh
# This generate the swagger documentation

# Make path relative to this script
cd "$(dirname "$0")"

# Install swagger-autogen module
npm install --no-save swagger-autogen@2.22.0

# Generate the swagger documentation
node ../swagger/swagger.js

# Remove swagger-autogen module
npm uninstall swagger-autogen

# Clean cache
npm cache clean --force

# Exit
exit 0