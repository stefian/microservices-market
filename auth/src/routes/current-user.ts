import express from "express";

import { currentUser } from "@w3ai/common";

const router = express.Router();

router.get("/api/users/currentuser", currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null }); // the json payload with id and email
});

export { router as currentUserRouter };
