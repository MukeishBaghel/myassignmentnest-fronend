# Use an official Node runtime as the base image
FROM node:22-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Build the app for production
RUN npm run build

# Install serve module
RUN npm install -g serve

# Expose port 5000 for the app
EXPOSE 3000

# Define the command to run the app using serve
CMD ["serve", "-s", "dist", "-l", "3000"]