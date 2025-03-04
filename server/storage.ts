import { MuscleGroup, Video, InsertMuscleGroup, InsertVideo } from "@shared/schema";
import { mockMuscleGroups, generateInitialVideos } from "../shared/lib/data";

export interface IStorage {
  getMuscleGroups(): Promise<MuscleGroup[]>;
  getMuscleGroup(id: number): Promise<MuscleGroup | undefined>;
  getVideosByMuscleGroup(muscleGroupId: number): Promise<Video[]>;
  searchVideos(query: string): Promise<Video[]>;
}

export class MemStorage implements IStorage {
  private muscleGroups: Map<number, MuscleGroup>;
  private videos: Map<number, Video>;

  constructor() {
    this.muscleGroups = new Map();
    this.videos = new Map();
    this.initializeData();
  }

  async getMuscleGroups(): Promise<MuscleGroup[]> {
    return Array.from(this.muscleGroups.values());
  }

  async getMuscleGroup(id: number): Promise<MuscleGroup | undefined> {
    return this.muscleGroups.get(id);
  }

  async getVideosByMuscleGroup(muscleGroupId: number): Promise<Video[]> {
    return Array.from(this.videos.values()).filter(
      (video) => video.muscleGroupId === muscleGroupId
    );
  }

  async searchVideos(query: string): Promise<Video[]> {
    const lowercaseQuery = query.toLowerCase();
    return Array.from(this.videos.values()).filter((video) =>
      video.title.toLowerCase().includes(lowercaseQuery)
    );
  }

  private initializeData() {
    // Initialize muscle groups
    mockMuscleGroups.forEach((group: InsertMuscleGroup, index: number) => {
      this.muscleGroups.set(index + 1, { ...group, id: index + 1 });
    });

    // Initialize videos
    const videos = generateInitialVideos();
    videos.forEach((video: InsertVideo, index: number) => {
      this.videos.set(index + 1, { ...video, id: index + 1 });
    });
  }
}

export const storage = new MemStorage();