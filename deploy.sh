#!/bin/bash

npm run build

mkdir docs

cp -r .next/* docs/

echo "User-agent: *" > docs/404.html

git add .
git commit -m "Atualização de produção"
git push origin main
