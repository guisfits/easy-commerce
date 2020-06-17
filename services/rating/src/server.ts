import { Application } from './deps.ts'
import env from './env.ts';
import router from './routes.ts'
import RatingConnection from './database/connection.ts';

await RatingConnection.connect();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running on port ${env.APP_PORT}`);
await app.listen({ port: env.APP_PORT });
