.PHONY: all build move dockerbuild start

all: build remove move dockerbuild
build:	
	@echo "Running build command"
	npm run build

move: 
	@echo "Moving build folder to deployment directory"
	mv build/ deployment/   

remove:
	@echo "Rmoving directory inside the deployment folder"
	rm -rf deployment/build

start:
	@echo "starting the app server"
	cd deployment && npm start

dockerbuild:
		@echo "building docker image"
		cd deployment && sudo docker build -t shubhamdixit863/goreactfrontend .
		@echo "pushing docker image"
		docker push shubhamdixit863/goreactfrontend

       
      