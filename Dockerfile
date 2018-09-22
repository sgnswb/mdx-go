FROM node:10-alpine

WORKDIR /usr/src

COPY docs .
# RUN cd docs
# COPY package.json .
# COPY package-lock.json .
RUN npm i

# COPY . .
RUN npm run build && mv dist /public