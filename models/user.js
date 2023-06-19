import { Schema , model , models } from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is requires"]
    },
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is requires"]
    },
    image: {
        type: String
    }
});

const User = models.User || model("User", userSchema);

export default User;