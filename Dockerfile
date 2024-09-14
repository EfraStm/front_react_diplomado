FROM node:22.3.0-alpine3.20
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app/
COPY --chown=app package.json .
RUN npm install
COPY --chown=app . /app/
EXPOSE 3000
CMD ["npm", "run", "start"]
