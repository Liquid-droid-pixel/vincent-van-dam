@echo off
title Website stoppen
echo Website uitzetten in Caddy...
del /Q "C:\caddy\sites\enabled\vandamvincent.caddy" >nul 2>&1
del /Q "C:\caddy\sites\enabled\vandamvincent-apps.caddy" >nul 2>&1
"C:\caddy\caddy.exe" reload --config "C:\caddy\Caddyfile" --adapter caddyfile >nul 2>&1
if errorlevel 1 (
  echo.
  echo MISLUKT: Caddy kon niet herladen. Draait Caddy? Controleer C:\caddy\Caddyfile.
) else (
  echo.
  echo De website staat UIT. De andere sites op Caddy blijven gewoon draaien.
)
echo Discord-login stoppen...
powershell -NoProfile -Command "Get-NetTCPConnection -LocalPort 8017 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue }"
echo.
pause
