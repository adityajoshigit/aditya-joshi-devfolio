# Use the official Node.js image as the base image
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the production build artifacts
COPY ./build ./build

# Expose the port if necessary
# EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "start"]
