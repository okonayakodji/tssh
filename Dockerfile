FROM node:20.9-alpine
WORKDIR /app
COPY ./src/ ./src/
COPY package.json ./
COPY vite.config.js ./
COPY index.html ./
RUN npm install
RUN npm install -g vite
RUN vite build
CMD vite preview --port 3001
