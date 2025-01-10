import { Router } from "express";

const router = Router();

import Users from "../models/user";

router.get("/", async (req, res) => {
    const users = await Users.find();
    res.send(users);
});

export default router;
