import mongoose from "mongoose"; 

export const Workspace = new mongoose.Schema({
  path: String, 
  name: String, 
  
})

export const Session = new mongoose.Schema({
  conversation: [Object], 
  workspaceId : [{type : mongoose.Schema.Types.ObjectId , ref : 'Workspace'}  ] 
}) 

export const WorkspaceModel = mongoose.model("Workspace", Workspace); 
export const SessionModel = mongoose.model("Session", Session); 