FROM kkarczmarczyk/node-yarn as node
LABEL author="Daniel Ruiz"
WORKDIR /app
COPY package.json package.json
RUN yarn install
COPY . .
EXPOSE 3001
CMD yarn start
