FROM hayd/deno:alpine-1.0.5

EXPOSE 8001

WORKDIR /app

USER deno

COPY src/deps.ts /app
RUN deno cache --unstable deps.ts

ADD /src /app
RUN deno cache -c tsconfig.json --unstable server.ts

CMD ["run", "--allow-env", "--allow-net", "--config", "tsconfig.json", "--unstable", "server.ts" ]
