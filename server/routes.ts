import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  app.get("/api/muscle-groups", async (_req, res) => {
    const muscleGroups = await storage.getMuscleGroups();
    res.json(muscleGroups);
  });

  app.get("/api/muscle-groups/:id", async (req, res) => {
    const muscleGroup = await storage.getMuscleGroup(Number(req.params.id));
    if (!muscleGroup) {
      res.status(404).json({ message: "Muscle group not found" });
      return;
    }
    res.json(muscleGroup);
  });

  app.get("/api/muscle-groups/:id/videos", async (req, res) => {
    const videos = await storage.getVideosByMuscleGroup(Number(req.params.id));
    res.json(videos);
  });

  app.get("/api/videos/search", async (req, res) => {
    const query = req.query.q as string;
    if (!query) {
      res.status(400).json({ message: "Query parameter 'q' is required" });
      return;
    }
    const videos = await storage.searchVideos(query);
    res.json(videos);
  });

  return createServer(app);
}
