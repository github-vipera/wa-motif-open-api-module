ng build @wa-motif-open-api/platform-service --prod
npm pack dist/wa-motif-open-api/platform-service/ 

ng build @wa-motif-open-api/security-service  --prod
npm pack dist/wa-motif-open-api/security-service/


ng build @wa-motif-open-api/app-content-service --prod
npm pack dist/wa-motif-open-api/app-content-service/

ng build @wa-motif-open-api/configuration-service --prod
npm pack dist/wa-motif-open-api/configuration-service/

mv *.tgz ../local_dist/
