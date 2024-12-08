import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://amrit:amrit@cluster0.ltutc.mongodb.net/food-del")
    .then(() => {
      console.log("DB connected");
    });
};
