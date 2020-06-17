const env = Deno.env.toObject();

export const APP_PORT = Number(env.APP_PORT);
export const DB_HOST = env.DB_HOST;
export const DB_PORT = Number(env.DB_PORT);
export const DB_USERNAME = env.DB_USERNAME;
export const DB_PASSWORD = env.DB_PASSWORD;
export const DB_DATABASE = env.DB_DATABASE;
