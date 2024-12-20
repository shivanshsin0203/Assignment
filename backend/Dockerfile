# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/
# Install dependencies
RUN npx prisma generate
RUN npm install

# Copy app source
COPY . .

# Expose port (assuming your backend runs on 5000)
EXPOSE 3001

# Start command
CMD ["node", "index.js"]
