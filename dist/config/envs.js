"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.JWT_SECRET = exports.DB_USER = exports.DB_TYPE = exports.DB_PORT = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_HOST = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_NAME = process.env.DB_NAME || "my_db";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "";
exports.DB_PORT = Number(process.env.DB_PORT) || 3306;
exports.DB_TYPE = process.env.DB_TYPE || "mysql";
exports.DB_USER = process.env.DB_USER || "root";
exports.JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";
exports.PORT = Number(process.env.PORT) || 3000;
