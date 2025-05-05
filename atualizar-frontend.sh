#!/bin/bash

echo "🔧 A fazer build do Vite..."
cd ~/projetos/cv-projecto/frontend || exit 1
npm run build

echo "📁 A copiar nova build para o NGINX..."
sudo rm -rf /var/www/cv-frontend/*
sudo cp -r dist/* /var/www/cv-frontend/

echo "✅ Frontend do CV atualizado com sucesso!"
