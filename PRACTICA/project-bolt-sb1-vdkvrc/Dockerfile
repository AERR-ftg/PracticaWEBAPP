# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias y construir
COPY package*.json ./
RUN npm install

# Copiar todo el proyecto y construirlo
COPY . .
RUN npm run build

# Etapa 2: Servidor estático
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto para nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
