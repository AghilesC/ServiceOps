@echo off
chcp 65001 >nul
echo ========================================
echo   Déploiement ServiceOps vers Apache
echo ========================================
echo.

echo [1/3] Construction du projet React...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERREUR : La construction a échoué.
    echo Vérifiez que vous êtes dans le dossier ServiceOps.
    pause
    exit /b 1
)

echo.
echo [2/3] Copie des fichiers dans public...
echo.

REM Copier les assets
if exist dist\assets (
    if not exist public\assets mkdir public\assets
    xcopy /E /I /Y /Q dist\assets\* public\assets\
    echo ✓ Assets copiés
)

REM Copier index.html
if exist dist\index.html (
    copy /Y dist\index.html public\index.html >nul
    echo ✓ index.html copié
)

REM Copier les autres fichiers statiques
if exist dist\*.json (
    for %%f in (dist\*.json) do copy /Y "%%f" public\ >nul
)
if exist dist\*.txt (
    for %%f in (dist\*.txt) do copy /Y "%%f" public\ >nul
)
if exist dist\*.xml (
    for %%f in (dist\*.xml) do copy /Y "%%f" public\ >nul
)
if exist dist\*.webmanifest (
    for %%f in (dist\*.webmanifest) do copy /Y "%%f" public\ >nul
)
if exist dist\*.js (
    for %%f in (dist\*.js) do copy /Y "%%f" public\ >nul
)

echo ✓ Autres fichiers copiés

echo.
echo [3/3] Vérification de la présence de send-email.php...
if exist public\send-email.php (
    echo ✓ send-email.php présent
) else (
    echo ⚠️ ATTENTION : send-email.php n'est pas dans public/
)

echo.
echo ========================================
echo   ✅ DÉPLOIEMENT TERMINÉ !
echo ========================================
echo.
echo Prochaines étapes :
echo 1. Ouvrez XAMPP Control Panel
echo 2. Démarrez Apache (bouton Start)
echo 3. Ouvrez votre navigateur
echo 4. Accédez à : http://localhost/ServiceOps/public/
echo.
echo Le formulaire de contact devrait maintenant fonctionner !
echo.
pause

