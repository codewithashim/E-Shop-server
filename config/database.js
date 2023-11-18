module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost2"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "e-shop"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "1234"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: { rejectUnauthorized: false },
    },
  }
});
   