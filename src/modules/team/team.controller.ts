import { Request, Response } from "express";
import { TeamService } from "./team.service";

const createTeam = async (req: Request, res: Response) => {
  try {
    const result = await TeamService.createTeam(req.body);
    res.send({
      success: true,
      message: "Team created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllTeams = async (req: Request, res: Response) => {
  try {
    const result = await TeamService.getAllTeams();
    res.send({
      success: true,
      message: "Teams retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await TeamService.getSingleTeam(id);
    res.send({
      success: true,
      message: "Team retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deleteTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await TeamService.deleteTeam(id);
    res.send({
      success: true,
      message: "Team delete successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const TeamData = req.body;
    const result = await TeamService.updateTeam(id, TeamData);
    res.send({
      success: true,
      message: "Team update successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
export const TeamController = {
  createTeam,
  getAllTeams,
  getSingleTeam,
  deleteTeam,
  updateTeam,
};
