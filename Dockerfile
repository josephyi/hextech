FROM josephyi/alpine-phoenix:1.1

ADD . /app
WORKDIR /app
RUN mix hex.info
RUN npm install
EXPOSE 4000
EXPOSE 4001
ENTRYPOINT mix phoenix.server
