# file: next-app/Dockerfile

FROM node:16

WORKDIR /app

# install node packages
COPY package.json package-lock.json ./
RUN npm ci

# build app
COPY . .
RUN npm run build

# start the Next.js app
CMD npm start

#
# end of file: next-app/Dockerfile
