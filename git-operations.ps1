# Git Operations Script
Set-Location "d:\Projetos\Mario Martins\lp-mario-martins"

Write-Host "===== Configurando Git =====" -ForegroundColor Green
git config user.name "VoidPep"
git config user.email "your-email@github.com"

Write-Host "`n===== Verificando Configuração =====" -ForegroundColor Green
$username = git config --get user.name
$email = git config --get user.email
Write-Host "User Name: $username" -ForegroundColor Cyan
Write-Host "User Email: $email" -ForegroundColor Cyan

Write-Host "`n===== Verificando Remote =====" -ForegroundColor Green
git remote -v

Write-Host "`n===== Removendo Arquivos do Cache =====" -ForegroundColor Green
git rm --cached README_LP.md RESUMO_VISUAL.md PROJETO_COMPLETO.md --force
git rm --cached DEPLOYMENT.md --force

Write-Host "`n===== Status Git =====" -ForegroundColor Green
git status

Write-Host "`n===== Fazendo Commit =====" -ForegroundColor Green
git commit -m "docs: remove documentation markdown files

- Remove README_LP.md - detailed project documentation
- Remove RESUMO_VISUAL.md - visual summary  
- Remove PROJETO_COMPLETO.md - project overview
- Keep only essential README.md for GitHub

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"

Write-Host "`n===== Fazendo Push =====" -ForegroundColor Green
git push -u origin main

Write-Host "`n===== Operações Concluídas! =====" -ForegroundColor Green
