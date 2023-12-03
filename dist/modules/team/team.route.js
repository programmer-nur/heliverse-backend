"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutes = void 0;
const express_1 = __importDefault(require("express"));
const team_controller_1 = require("./team.controller");
const router = express_1.default.Router();
router.post("/", team_controller_1.TeamController.createTeam);
router.get("/", team_controller_1.TeamController.getAllTeams);
router.get("/:id", team_controller_1.TeamController.getSingleTeam);
exports.TeamRoutes = router;
