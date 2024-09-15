# Use the official Bun image as a base image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy all project files to the container
COPY . .

# Install dependencies using Bun
RUN bun install

# Expose the port where the app will run
EXPOSE 3000

# Command to run the application with Bun
CMD ["bun", "run", "start"]