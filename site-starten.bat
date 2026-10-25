@echo off
title Website starten
echo Discord-login starten...
powershell -NoProfile -Command "if(-not (Get-NetTCPConnection -LocalPort 8017 -State Listen -ErrorAction SilentlyContinue)){ Start-Process node -ArgumentList 'auth\server.js' -WorkingDirectory '%~dp0' -WindowStyle Hidden }"
echo Website aanzetten in Caddy...
copy /Y "C:\caddy\sites\vandamvincent.caddy" "C:\caddy\sites\enabled\vandamvincent.caddy" >nul
copy /Y "C:\caddy\sites\vandamvincent-apps.caddy" "C:\caddy\sites\enabled\vandamvincent-apps.caddy" >nul
"C:\caddy\caddy.exe" reload --config "C:\caddy\Caddyfile" --adapter caddyfile >nul 2>&1
if errorlevel 1 (
  echo.
  echo MISLUKT: Caddy kon niet herladen. Draait Caddy? Controleer C:\caddy\Caddyfile.
) else (
  echo.
  echo De website staat AAN: https://www.vandamvincent.nl
  echo Wijzigingen in de map "site" staan direct live; je hoeft dit bestand daarvoor niet te draaien.
)
echo.
pause
