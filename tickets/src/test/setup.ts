import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";

declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>; // because cookie is a string[] - array of strings
    }
  }
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdfasdf";

  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = async () => {
  // Build a JWT payload. { id, email }
  // Create the JWT!
  // Build the session object { jwt: MY_JWT }
  // Turn that session into JSON
  // Take JSON and encode it as base64
  // return a string that's the cookie with the encoded data
};
