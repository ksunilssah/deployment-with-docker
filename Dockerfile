FROM node:8-alpine

#Create app directory
RUN mkdir -p /app

#Define working directory
WORKDIR /app

#Copy package.json to working directory from your root folder. If you have package.lock.json you can use wild card to copy both files.
#Copy package*.json /app/
COPY package.json /app/

#Install your packages
RUN npm install

#Copy all the application code to your working directory
COPY . /app/

EXPOSE 80

#Run your build once container is launched

CMD ["npm", "run", "start"]