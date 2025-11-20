import express from "express";
import Movie from "../models/Movie.js";

const router = express.Router();

// Get all movies
// Get all movies with pagination
router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const totalMovies = await Movie.countDocuments();
    const movies = await Movie.find().skip(skip).limit(limit);

    res.json({
      total: totalMovies,
      page,
      limit,
      totalPages: Math.ceil(totalMovies / limit),
      movies,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies", error });
  }
});

router.get("/test", async (req, res) => {
  const movie = await Movie.findOne();
  res.json(movie);
});



// Add new movie
router.post("/", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
});

router.put("/:id", async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
});

router.delete("/:id", async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
