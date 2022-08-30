# TUTO : https://youtu.be/hqOW4TuN59M
# ContainerizingApps
#STEP 1 USING NODE
cd web_app_interface/ContainerizingApps/vue

npm install

npm run build
npm run serve OR npm run dev FOR DEV

#STEP 2 CREATE IMG DOCKER
docker-compose up -d --build vue

# LOG IF WORKING
docker ps
#STEP 3 DOCKERIZE PROJECT
docker exec -it containerizingapps_vue_1 sh
