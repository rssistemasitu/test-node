"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
// Middleware para permitir parsing de JSON
app.use(express_1.default.json());
// Rota de teste
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
// Rota POST para receber dados
app.post("/data", (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Received data for ${name}, age: ${age}` });
});
// Inicia o servidor
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
