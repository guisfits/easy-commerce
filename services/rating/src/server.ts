import { Application } from 'https://deno.land/x/oak/mod.ts'

import { APP_PORT } from './env.ts';
import router from './routes.ts'
import RatingConnection from './database/connection.ts';

await RatingConnection.connect();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running on port ${APP_PORT}`);
await app.listen({ port: APP_PORT });
