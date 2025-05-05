#!/bin/bash

echo "🔧 A fazer build do React..."
cd ~/projetos/cv-projecto/frontend || exit 1
npm run build

echo "📁 A copiar nova build para o NGINX..."
sudo rm -rf /var/www/pre-bolsa-frontend/*
sudo cp -r dist/* /var/www/pre-bolsa-frontend/

echo "✅ Frontend atualizado com sucesso!"

