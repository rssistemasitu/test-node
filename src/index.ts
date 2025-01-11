import express, { Request, Response } from "express";

const app = express();
const port = 3001;

// Middleware para permitir parsing de JSON
app.use(express.json());

// Rota de teste
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Rota POST para receber dados
app.post("/data", (req: Request, res: Response) => {
  const { name, age } = req.body;
  res.json({ message: `Received data for ${name}, age: ${age}` });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
