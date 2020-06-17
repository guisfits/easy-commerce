const denoEnv = Deno.env.toObject();

const env = {
  APP_PORT: Number(denoEnv.APP_PORT),
  APP_PORT_INTERNAL: Number(denoEnv.APP_PORT_INTERNAL),
  DB_HOST: denoEnv.DB_HOST,
  DB_PORT: Number(denoEnv.DB_PORT),
  DB_USERNAME: denoEnv.DB_USERNAME,
  DB_PASSWORD: denoEnv.DB_PASSWORD,
  DB_DATABASE: denoEnv.DB_DATABASE,
}

console.log(env);
export default env;
