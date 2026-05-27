@echo off
cd "d:\Projetos\Mario Martins\lp-mario-martins"

echo ===== Configurando Git =====
git config user.name "VoidPep"
git config user.email "your-email@github.com"

echo.
echo ===== Verificando Configuração =====
git config --get user.name
git config --get user.email

echo.
echo ===== Verificando Remote =====
git remote -v

if errorlevel 1 (
    echo Remote não encontrado, adicionando...
    git remote add origin https://github.com/VoidPep/lp-mario-martins.git
) else (
    echo Remote já existe
)

echo.
echo ===== Removendo Arquivos do Cache =====
git rm --cached README_LP.md RESUMO_VISUAL.md PROJETO_COMPLETO.md 2>nul
if exist DEPLOYMENT.md git rm --cached DEPLOYMENT.md 2>nul

echo.
echo ===== Fazendo Commit =====
git commit -m "docs: remove documentation markdown files

- Remove README_LP.md - detailed project documentation
- Remove RESUMO_VISUAL.md - visual summary  
- Remove PROJETO_COMPLETO.md - project overview
- Keep only essential README.md for GitHub

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo ===== Fazendo Push =====
git push -u origin main

echo.
echo ===== Concluído! =====
