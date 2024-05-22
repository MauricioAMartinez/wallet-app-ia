FROM node:18-bullseye

WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala Angular CLI globalmente y las dependencias del proyecto
RUN npm install -g @angular/cli \
    && npm ci

# Copia todo el código del proyecto
COPY . .

# Compilar la aplicación (opcional, útil para producciones)
# RUN ng build --prod

# Expone el puerto que la aplicación utilizará
EXPOSE 4200

# Comando para iniciar la aplicación
CMD ["ng", "serve", "--host", "0.0.0.0"]
