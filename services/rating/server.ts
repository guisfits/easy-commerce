import { Application } from 'https://deno.land/x/oak/mod.ts'

import { HOST, PORT } from './config.ts';
import router from './routes.ts'
import { initializeDb, seed } from './database/connection.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await initializeDb();
await seed();

console.log(`Running on ${HOST}:${PORT}`);
await app.listen(`${HOST}:${PORT}`);
