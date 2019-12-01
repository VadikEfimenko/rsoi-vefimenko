import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {Cinema} from "../entity/Cinema";

const CinameBaseController = (app, connection) => {
    const cinemaContainer = connection.getRepository(Cinema);

    app.use(bodyParser.json());

    app.get("/", (req, res) => {
        res.send('Keep alive!')
    });

    app.get("/films", async (req: Request, res: Response) => {
        const users = await cinemaContainer.find();
        res.json(users);
    });

    app.get("/film/:id", async (req: Request, res: Response) => {
        const results = await cinemaContainer.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/film", async (req: Request, res: Response) => {
        const user = await cinemaContainer.create(req.body);
        const results = await cinemaContainer.save(user);

        console.log('Added new film!');

        return res.send(results);
    });

    app.put("/film/:id", async (req: Request, res: Response) => {
        const user = await cinemaContainer.findOne(req.params.id);

        cinemaContainer.merge(user, req.body);

        const results = await cinemaContainer.save(user);
        console.log('Film info is changed!');

        return res.send(results);
    });

    app.delete("/film/:id", async (req: Request, res: Response) => {
        const results = await cinemaContainer.delete(req.params.id);
        console.log('Film deleted!');

        return res.send(results);
    });
};

export {CinameBaseController};