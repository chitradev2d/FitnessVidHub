import { MuscleGroup, Video, InsertMuscleGroup, InsertVideo } from "@shared/schema";

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
    // Initialize with mock data
    const muscleGroups: InsertMuscleGroup[] = [
      {
        name: "Chest",
        description: "Pectoralis Major exercises",
        imageUrl: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b"
      },
      {
        name: "Back",
        description: "Latissimus Dorsi and Trapezius exercises",
        imageUrl: "https://images.unsplash.com/photo-1498661694102-0a3793edbe74"
      },
      // Add more muscle groups...
    ];

    muscleGroups.forEach((group, index) => {
      this.muscleGroups.set(index + 1, { ...group, id: index + 1 });
    });

    // Add mock videos for each muscle group
    let videoId = 1;
    Array.from(this.muscleGroups.values()).forEach((group) => {
      for (let i = 0; i < 5; i++) {
        const video: Video = {
          id: videoId++,
          title: `${group.name} Workout ${i + 1}`,
          description: `Complete ${group.name.toLowerCase()} workout routine`,
          thumbnailUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
          videoId: `mock-${group.id}-${i}`,
          muscleGroupId: group.id,
          stats: {
            views: Math.floor(Math.random() * 1000000),
            likes: Math.floor(Math.random() * 50000),
            duration: "10:00"
          },
          outcomes: [
            "Muscle strength",
            "Improved endurance",
            "Better flexibility"
          ]
        };
        this.videos.set(video.id, video);
      }
    });
  }
}

export const storage = new MemStorage();
