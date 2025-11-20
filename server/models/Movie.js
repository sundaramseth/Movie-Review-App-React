import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  genre: [String],
  director: String,
  cast: [String],
  rating: Number,
  poster: String,
  description: String,
});

export default mongoose.model("Movie", movieSchema);
