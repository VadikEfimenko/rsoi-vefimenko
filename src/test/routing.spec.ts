import { createConnection } from "typeorm";
import * as express from "express";
import {CinameBaseController} from "../routing/routing";
import * as request from "supertest";

const app = express();

describe('Rouiting tests', () => {
    before((done) => {
        createConnection().then(connection => {
            CinameBaseController(app, connection);
            app.listen(process.env.TEST_PORT);
            done();
        });
    });

    it ('invalid rout', (done) => {
        request(app).get("/anything").expect(404).end(done);
        console.log('OK!')
    });

    it ('valid response status', (done) => {
        request(app).get("/").expect(200).end(done);
        console.log('OK!')
    });

    it ('film success deleted', (done) => {
        request(app).delete("/film/1").expect(200).end(done);
        console.log('OK!')
    });

    it ('film success changed', (done) => {
        request(app).put("/film/2").query({"dd": 2}).expect(200).end(done);
        console.log('OK!')
    });
});