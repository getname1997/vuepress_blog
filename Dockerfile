# Use an official Node.js runtime as the base image
FROM node:18.0-alpine3.14 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the project
RUN npm run build


# Use a lightweight nginx image as the base for the second stage
FROM node:18.0-alpine3.14 as production-stage

WORKDIR /app

RUN npm install -g http-server
# Copy the built files from the previous stage to the nginx public directory
COPY --from=build-stage /app/docs/.vuepress/dist /app

# Expose port 8080
EXPOSE 8080

# Start the nginx server
CMD ["http-server", "-p", "8080"]
