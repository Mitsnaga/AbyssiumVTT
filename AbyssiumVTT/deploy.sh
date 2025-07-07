#!/bin/bash
npm run build &&
scp -r dist/* root@195.201.151.250:/var/www/vtt-frontend &&
ssh root@195.201.151.250 "sudo systemctl reload nginx"

