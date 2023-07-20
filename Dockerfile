FROM node:20 as backend

WORKDIR /app/backend

COPY ./backend .

RUN npm install

FROM node:20 as frontend

WORKDIR /app/frontend

COPY ./frontend .

RUN npm install

FROM node:20

WORKDIR /app

COPY --from=backend /app/backend ./backend
COPY --from=frontend /app/frontend ./frontend

CMD ["npm", "run", "dev"]