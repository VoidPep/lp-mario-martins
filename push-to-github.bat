@echo off
cd /d "d:\Projetos\Mario Martins\lp-mario-martins"

echo ========================================
echo Configurando Git...
echo ========================================
git config user.name "VoidPep"
git config user.email "pedrohm1009@gmail.com"

echo.
echo ========================================
echo Removendo arquivos markdown do stage...
echo ========================================
git rm --cached README_LP.md
git rm --cached RESUMO_VISUAL.md
git rm --cached PROJETO_COMPLETO.md
git rm --cached DEPLOYMENT.md

echo.
echo ========================================
echo Status antes do commit...
echo ========================================
git status

echo.
echo ========================================
echo Fazendo commit...
echo ========================================
git commit -m "docs: remove documentation markdown files

- Remove README_LP.md - detailed project documentation
- Remove RESUMO_VISUAL.md - visual summary
- Remove PROJETO_COMPLETO.md - project overview
- Remove DEPLOYMENT.md - deployment guide
- Keep only essential README.md for GitHub

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

echo.
echo ========================================
echo Enviando para GitHub...
echo ========================================
git push -u origin main

echo.
echo ========================================
echo CONCLUIDO!
echo ========================================
echo Repositorio: https://github.com/VoidPep/lp-mario-martins
pause
