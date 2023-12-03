import { Users } from "../users/user.model";
import { ITeam } from "./team.interface";
import { Team } from "./team.model";

const createTeam = async (userIds: string[]): Promise<ITeam> => {
  const users = await Users.find({ _id: { $in: userIds } });
  const team = await Team.create({
    name,
    users: users.map((user) => user._id),
  });
  return team;
};

const getAllTeams = async (): Promise<ITeam[]> => {
  const teams = await Team.find().populate("users");
  return teams;
};

const getSingleTeam = async (id: string): Promise<ITeam | null> => {
  const result = await Team.findById(id).populate("users");
  return result;
};

const updateTeam = async (
  id: string,
  payload: Partial<ITeam>
): Promise<ITeam | null> => {
  const result = await Team.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteTeam = async (id: string) => {
  const result = await Team.findByIdAndDelete(id);
  return result;
};

export const TeamService = {
  createTeam,
  getAllTeams,
  getSingleTeam,
  updateTeam,
  deleteTeam,
};
