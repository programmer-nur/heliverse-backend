"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Users", required: true }],
});
exports.Team = (0, mongoose_1.model)("Team", teamSchema);
