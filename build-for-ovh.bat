@echo off
chcp 65001 >nul
echo ========================================
echo   Build pour Production OVH
echo ========================================
echo.

echo [1/2] Construction du projet avec base path racine...
echo.

REM Définir une variable d'environnement pour forcer le base path à /
set VITE_BASE_PATH=/
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ ERREUR : La construction a échoué.
    pause
    exit /b 1
)

echo.
echo [2/2] Création du dossier de déploiement...
echo.

REM Créer un dossier de déploiement
if exist deploy-ovh rmdir /S /Q deploy-ovh
mkdir deploy-ovh

REM Copier les fichiers du build
xcopy /E /I /Y dist\* deploy-ovh\

REM Copier les fichiers PHP et PHPMailer
echo Copie des fichiers PHP...
copy /Y public\send-email.php deploy-ovh\send-email.php
xcopy /E /I /Y public\PHPMailer-master deploy-ovh\PHPMailer-master\

REM Copier le .htaccess pour production
echo Copie du .htaccess pour production...
copy /Y .htaccess.production deploy-ovh\.htaccess

REM Copier les images depuis public
if exist public\workora_logo.png copy /Y public\workora_logo.png deploy-ovh\
if exist public\workora_logo.svg copy /Y public\workora_logo.svg deploy-ovh\
if exist public\pdp.png copy /Y public\pdp.png deploy-ovh\
if exist public\pwa-*.png copy /Y public\pwa-*.png deploy-ovh\

REM Copier robots.txt et sitemap.xml
if exist public\robots.txt copy /Y public\robots.txt deploy-ovh\
if exist public\sitemap.xml copy /Y public\sitemap.xml deploy-ovh\

echo.
echo ✅ Build terminé !
echo.
echo Le dossier 'deploy-ovh' contient tous les fichiers à uploader sur OVH.
echo.
echo Prochaines étapes :
echo 1. Connectez-vous à votre hébergement OVH (FileZilla, FTP, etc.)
echo 2. Uploadez tout le contenu du dossier 'deploy-ovh' dans 'www' ou 'public_html'
echo 3. Vérifiez que PHP est activé sur votre hébergement
echo 4. Testez votre site !
echo.
pause

