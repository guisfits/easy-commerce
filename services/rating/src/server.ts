import { Application } from 'https://deno.land/x/oak/mod.ts'

import { HOST, PORT } from './config.ts';
import router from './routes.ts'
import RatingConnection from './database/connection.ts';

await RatingConnection.connect();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running on ${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);
