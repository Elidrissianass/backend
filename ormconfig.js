module.exports = {
    type: 'postgres',
    host: 'monorail.proxy.rlwy.net', // Replace with your Railway.app PostgreSQL host
    port: 19609, // Replace with your PostgreSQL port
    username: 'postgres', // Replace with your PostgreSQL username
    password: 'DAdg32eAcCgF*bc34Cg1d535C1aEeaAF', // Replace with your PostgreSQL password
    database: 'railway', // Replace with your PostgreSQL database name
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    subscribers: ['dist/subscribers/*{.ts,.js}'],
    cli: {
      entitiesDir: 'src',
      migrationsDir: 'src/migrations',
      subscribersDir: 'src/subscribers',
    },
  };
  