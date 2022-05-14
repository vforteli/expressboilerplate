FROM node:latest as base

COPY package*.json ./
COPY tsconfig.json ./

RUN npm ci

COPY src ./src




FROM base as test
CMD [ "npm", "run", "test" ]


FROM base as prod

RUN npm run build

EXPOSE 3001

CMD [ "node", "./dist/index.js"]