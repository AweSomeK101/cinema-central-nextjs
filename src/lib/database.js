import { MongoClient } from "mongodb";
import { MONGODB_URI, NODE_ENV } from "./Constants";

if (!MONGODB_URI) throw new Error("MongoDB URI mising");

let dbClient;

if (NODE_ENV === "development") {
  if (!global.dbClient) {
    global.dbClient = new MongoClient(MONGODB_URI, { maxPoolSize: 5 });
  }
  dbClient = global.dbClient;
} else {
  dbClient = new MongoClient(MONGODB_URI, { maxPoolSize: 5 });
}

dbClient.on("connectionCreated", () => console.log("db connectionCreated"));
dbClient.on("connectionClosed", () => console.log("db connectionClosed"));
dbClient.on("error", (e) => console.log("db error", e));

export default dbClient;
