# backup.ps1 — Backup rapido do MazyOS em .zip (no OneDrive se existir).
# Rode com clique direito > "Executar com PowerShell", ou: powershell -File scripts\backup.ps1
$ErrorActionPreference = 'Stop'
$root  = Split-Path $PSScriptRoot -Parent
$stamp = Get-Date -Format 'yyyyMMdd-HHmm'
$destDir = if ($env:OneDrive -and (Test-Path $env:OneDrive)) { Join-Path $env:OneDrive 'Backups-MazyOS' } else { Join-Path $root 'Backups-MazyOS' }
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
$zip = Join-Path $destDir ('MazyOS-backup-' + $stamp + '.zip')
Compress-Archive -Path (Join-Path $root '*') -DestinationPath $zip -Force
Write-Host "Backup criado em: $zip" -ForegroundColor Green
