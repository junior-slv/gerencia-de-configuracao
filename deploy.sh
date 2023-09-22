#!/bin/bash

# Construir o projeto Next.js
npm run build

# Criar um novo diretório chamado "docs"
mkdir docs

# Copiar os arquivos da pasta ".next" para o diretório "docs"
cp -r .next/* docs/

# Crie um arquivo "404.html" (necessário para o GitHub Pages)
echo "User-agent: *" > docs/404.html

# Comprometa as alterações no GitHub
git add .
git commit -m "Atualização de produção"
git push origin main
