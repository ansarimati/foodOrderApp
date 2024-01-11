import mongoose from "mongoose";
import { User } from "../models/User";

export async function POST (req, res) {

    const body = await req.json();
    // console.log("body", body);

    mongoose.connect(process.env.MONGO_URL);
    const createdUser = await User.create(body);
    return Response.json(createdUser);
}
