FROM node:21

WORKDIR /app

COPY . .


EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
