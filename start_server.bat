@echo off
echo Starting CareerSpark Local Server...
echo.
echo Open your browser and go to: http://localhost:8000
echo.
echo Please keep this window open while using the site.
echo To stop the server, close this window.
echo.
python -m http.server 8000
pause
