import { Router } from "express";

const router = Router();

import Users from "../models/user";
import { createUser, getUsers, loginUser } from "../controllers/users";

// get all the users
router.route("/").get(async (req, res) => {
    const response = await getUsers();
    res.status(response.status).send(response);
});

// create a new user
router.route("/signup").post(async (req, res) => {
    const response = await createUser(req.body);
    res.status(response.status).send(response);
});

// user authentication AKA login
router.route("/login").post(async (req, res) => {
    const response = await loginUser(req.body);
    if (response.data) {
        res.header("x-auth-token", response.data);
    }
    res.status(response.status).send(response);
});

export default router;
