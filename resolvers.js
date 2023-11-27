import mongoose from "mongoose";
import { quotes, users } from "./fakedb.js";
import { randomBytes } from "crypto";
const User = mongoose.model("User")

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
        const user = await User.findOne({ email: userNew.email });
        if (user) {
          throw new Error("User already exists with that email");
        }
  
        const newUser = new User({
          ...userNew,
        });
        return await newUser.save();
      },
  },
};

export default resolvers;
