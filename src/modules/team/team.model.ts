import { Schema, model } from "mongoose";
import { ITeam, TeamModel } from "./team.interface";

const teamSchema = new Schema<ITeam, TeamModel>({
  users: [{ type: Schema.Types.ObjectId, ref: "Users", required: true }],
});

export const Team = model<ITeam, TeamModel>("Team", teamSchema);
