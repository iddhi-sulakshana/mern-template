import { model, Schema } from "mongoose";
import type { IUser } from "../types/user";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config/environment";

const userSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        avatarUrl: {
            type: String,
            default: `https://robohash.org/set_set4/bgset_bg1/${() =>
                Math.random()}?size=100x100`,
        },
    },
    { timestamps: true }
);

// generate auth token function
userSchema.methods.generateAuthToken = function () {
    return sign({ _id: this._id }, JWT_SECRET, { expiresIn: "24h" });
};

const Users = model<IUser>("User", userSchema);

export default Users;
