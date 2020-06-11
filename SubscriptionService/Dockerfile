FROM node:12.16-alpine
WORKDIR /app/
COPY . /app/
RUN npm i

ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]
EXPOSE 3000