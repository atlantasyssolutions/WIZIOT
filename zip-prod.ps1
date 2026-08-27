$source = "d:\WizzIot\wiziot-website"
$stage = "d:\WizzIot\wiziot-stage"
Remove-Item -Path $stage -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Path $stage | Out-Null

Write-Host "Copying files to staging..."
robocopy $source $stage /MIR /XD node_modules .git .cache /XF ALL_1000*.md AGENTS.md ENV.LOCAL inject-*.js fix-*.js process-*.js split-*.js apply-*.js wiziot-app.zip wiziot-production.zip zip-prod.ps1

Write-Host "Removing .next/cache to save space..."
Remove-Item -Path "$stage\.next\cache" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "Zipping the staging directory (this guarantees a valid zip file)..."
Remove-Item -Path "d:\WizzIot\wiziot-deploy.zip" -Force -ErrorAction SilentlyContinue
Compress-Archive -Path "$stage\*" -DestinationPath "d:\WizzIot\wiziot-deploy.zip" -Force

Write-Host "Cleaning up staging..."
Remove-Item -Path $stage -Recurse -Force

Write-Host "Done! File created at d:\WizzIot\wiziot-deploy.zip"
