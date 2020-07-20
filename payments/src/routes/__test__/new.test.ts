import request from "supertest";
import { app } from "../../app";

it("returns a 404 when puschasing an order that does not exist", async () => {});

it("returns a 401 when purchasing an order that doesnt belong to the user", async () => {});

it("returns a 400 when purchasing a cancelled order", async () => {});
