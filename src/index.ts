import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import { CinameBaseController } from "./routing/routing"


createConnection().then(connection => {
    const port = process.env.PORT || 8080;
    const app = express();

    CinameBaseController(app, connection);

    app.listen(port);
    console.log('Сервер запущен!');

}).catch(error => console.log(error));
