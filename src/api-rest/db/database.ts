import mongoose from "mongoose";
import config from "../config/config";

enum mongoStatusConnection {
  "disconnected",
  "connected",
  "connecting",
  "disconnecting",
}

let mongoConnection: number = mongoStatusConnection.disconnected;

export const conect = async () => {
  if (mongoConnection) {
    console.log(mongoStatusConnection.connected);

    console.log("Ya existe una conexión a la BD");
    return;
  }
  if (mongoose.connections.length > mongoStatusConnection.disconnected) {
    mongoConnection = mongoose.connections[0].readyState;
    
    if (mongoConnection === mongoStatusConnection.connected) {
      console.log("Usando conexión anterior");
      return;
    }
    await mongoose.disconnect();
  }
  await mongoose.connect(config.DB.URI);
  mongoConnection = mongoStatusConnection.connected;
  console.log("Mongodb connection stablished");
};

export const disconnect = async () => {
  if (mongoConnection === mongoStatusConnection.disconnected) return;
  await mongoose.disconnect();
  mongoConnection = mongoStatusConnection.disconnected;
  console.log("Desconectado de MongoDB");
};
