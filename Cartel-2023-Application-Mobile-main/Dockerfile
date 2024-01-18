# Use an existing Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app/src

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Run npm install to install the dependencies
RUN npm install

# Install the serve package globally
RUN npm install -g serve

# Copy the rest of the source code to the container
COPY . .

# Build the application
RUN npm run build

# Serve the built application
CMD ["serve", "-s", "build"]