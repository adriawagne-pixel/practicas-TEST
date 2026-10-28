const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  let client = null; // 1. Declarar client aquí para que tenga alcance global en el describe

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    if (database) {
      await database.dropDatabase();
    }
    if (client) {
      await client.close(); // 2. Cerrar la conexión del cliente MongoDB
    }
    if (server) {
      await server.close(); // 3. Cerrar el servidor HTTP
    }
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 2020,
          author: 'Author 1',
        },
        {
          name: 'Book 2',
          year: 2021,
          author: 'Author 2',
        },
      ]);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
