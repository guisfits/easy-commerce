FROM node:12.18-alpine as builder
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent 
COPY . .
RUN npm run prebuild
RUN npm run build

FROM node:12.18-alpine as runnable
ENV NODE_ENV production
# EXPOSE 3000
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app ./
CMD npm run start:prod
