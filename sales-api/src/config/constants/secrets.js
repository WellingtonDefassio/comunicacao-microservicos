const env = process.env;

export const MONGO_DB_URL = env.MONGO_DB_URL
  ? env.MONGO_DB_URL
  : "mongodb://admin:admin@localhost:27017";

export const API_SECRET = env.API_SECRET
  ? env.API_SECRET
  : "c2VuaGEtZGEtYXVsYS1taWNyb3NlcnZpY2Vz";

export const RABBIT_MQ_URL = env.RABBIT_MQ_URL
  ? env.RABBIT_MQ_URL
  : "amqp://localhost:5672";
