#!/bin/bash
# This generate the swagger documentation

# Make path relative to this script
cd "$(dirname "$0")"

# Install swagger-autogen module
npm install --no-save swagger-autogen@2.22.0

# Generate the swagger documentation
node ../swagger/swagger.js

# Exit
exit 0