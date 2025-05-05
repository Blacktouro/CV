# Etapa de build
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa de produção com NGINX
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

