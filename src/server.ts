import express, { type Request, type Response } from "express";
import { knex } from "./database/knex";

const app = express();
app.use(express.json());

app.post("/courses", async (request: Request, response: Response) => {
	const { name } = request.body;

	await knex("courses").insert({ name });
	//await knex.raw("INSERT INTO courses (name) VALUES (?)", [name]);

	return response.status(201).json();
});

app.get("/courses", async (request: Request, response: Response) => {
	// const courses = await knex.raw("SELECT * FROM courses");
	const courses = await knex("courses").select().orderBy("name");

	return response.json(courses);
});

app.put("/courses", async (request: Request, response: Response) => {});

app.listen(3333, () => console.log("Server is running on port 3333"));
