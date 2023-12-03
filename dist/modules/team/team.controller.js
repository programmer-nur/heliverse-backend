"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const team_service_1 = require("./team.service");
const createTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield team_service_1.TeamService.createTeam(req.body);
        res.send({
            success: true,
            message: "Team created successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllTeams = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield team_service_1.TeamService.getAllTeams();
        res.send({
            success: true,
            message: "Teams retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield team_service_1.TeamService.getSingleTeam(id);
        res.send({
            success: true,
            message: "Team retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deleteTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield team_service_1.TeamService.deleteTeam(id);
        res.send({
            success: true,
            message: "Team delete successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
const updateTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const TeamData = req.body;
        const result = yield team_service_1.TeamService.updateTeam(id, TeamData);
        res.send({
            success: true,
            message: "Team update successfully",
            data: result,
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.TeamController = {
    createTeam,
    getAllTeams,
    getSingleTeam,
    deleteTeam,
    updateTeam,
};
