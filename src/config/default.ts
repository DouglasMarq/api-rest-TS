export = {
  database: {
    main: {
      host: process.env.DB_HOST || 'cluster0-twaan.gcp.mongodb.net',
      port: process.env.DB_PORT || '27017',
      name: process.env.DB_NAME || 'Cluster0',
      user: process.env.DB_USER || 'admin',
      pass: process.env.DB_PASS || 'da123456789',
    },
  },
  server: {
    port: process.env.SERVER_PORT || 3001,
    host: process.env.SERVER_HOST || '127.0.0.1',
    name: process.env.SERVER_NAME || 'MEAN-Starter',
    socket: {
      port: process.env.SERVER_SOCKET_PORT || 443,
    },
  },
  secrets: {
    secret: 'c4ca4238a0b923820dcc509a6f75849b',
    jwt_secret: 'homologacao',
  },
};
