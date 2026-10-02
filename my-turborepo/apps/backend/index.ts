import { WebSocketServer } from "ws"; 
import "dotenv/config"; 
import mongoose from "mongoose"; 
import "os"
import { WorkspaceModel } from "db/client"; 

await mongoose.connect(process.env.DB_URL!)
const server = new WebSocketServer({port : 8080 }); 

server.on("connection", (ws) => {
  ws.on("message", async (msg) => {
    console.log(msg); 
    try {
    const workspace = await WorkspaceModel.create({
      path: "123", 
      name : "123123"
    });
      console.log("Workspace created:", workspace);
    }
    catch(error) { 
      console.log("error connecting to the database"  , error); 
    }
 

   });
});