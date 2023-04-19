"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./services/firebase");
const auth_1 = __importDefault(require("./middlewares/auth"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(auth_1.default);
app.use('/auth', routes_1.authRoutes);
app.use('/users', routes_1.usersRoutes);
app.use('/dashboard', routes_1.dashboardRoutes);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server test');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
