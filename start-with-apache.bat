@echo off
chcp 65001 >nul
echo ========================================
echo   Configuration Apache pour ServiceOps
echo ========================================
echo.

REM Vérifier si Apache est démarré
echo [Vérification] Contrôle de l'état d'Apache...
tasklist /FI "IMAGENAME eq httpd.exe" 2>NUL | find /I /N "httpd.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo ✓ Apache est déjà démarré.
) else (
    echo ⚠️ Apache n'est pas démarré.
    echo.
    echo IMPORTANT : Vous devez démarrer Apache dans XAMPP Control Panel :
    echo 1. Ouvrez XAMPP Control Panel
    echo 2. Cliquez sur 'Start' pour Apache
    echo 3. Attendez que l'indicateur devienne vert
    echo.
    pause
)

echo.
echo Construction et déploiement du projet...
call copy-build-to-public.bat

echo.
echo ========================================
echo   CONFIGURATION TERMINÉE
echo ========================================
echo.
echo Si Apache est démarré, vous pouvez maintenant :
echo 1. Ouvrir votre navigateur
echo 2. Accéder à : http://localhost/ServiceOps/public/
echo.
echo Pour tester PHP directement :
echo http://localhost/ServiceOps/public/send-email.php
echo.
echo Le formulaire de contact devrait maintenant fonctionner !
echo.
pause

