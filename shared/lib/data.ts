import type { InsertMuscleGroup, InsertVideo } from "../schema";

export const mockMuscleGroups: InsertMuscleGroup[] = [
  {
    name: "Chest",
    description: "Pectoralis Major exercises for building upper body strength",
    imageUrl: "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b"
  },
  {
    name: "Back",
    description: "Latissimus Dorsi and Trapezius workouts for a stronger back",
    imageUrl: "https://images.unsplash.com/photo-1498661694102-0a3793edbe74"
  },
  {
    name: "Shoulders",
    description: "Deltoid exercises to build boulder shoulders",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18"
  },
  {
    name: "Biceps",
    description: "Bicep workouts for stronger arms",
    imageUrl: "https://images.unsplash.com/photo-1495837174058-628aafc7d610"
  },
  {
    name: "Triceps",
    description: "Tricep exercises for well-defined arms",
    imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659"
  },
  {
    name: "Forearms",
    description: "Forearm workouts for improved grip strength",
    imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
  },
  {
    name: "Abs",
    description: "Core exercises targeting the Rectus Abdominis and Obliques",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    name: "Quadriceps",
    description: "Quad exercises for powerful legs",
    imageUrl: "https://images.unsplash.com/photo-1493655430214-3dd7718460bb"
  },
  {
    name: "Hamstrings",
    description: "Hamstring workouts for balanced leg development",
    imageUrl: "https://images.unsplash.com/photo-1461280360983-bd93eaa5051b"
  },
  {
    name: "Glutes",
    description: "Glute exercises for a stronger posterior chain",
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df"
  },
  {
    name: "Calves",
    description: "Calf raises and exercises for lower leg development",
    imageUrl: "https://images.unsplash.com/photo-1483428400520-675ef69a3bc4"
  }
];

const videoData: Record<string, Array<{ title: string, videoId: string }>> = {
  "Chest": [
    { title: "8 Best Chest Exercises YOU Should Be Doing", videoId: "oo0bZ6Vrepg" },
    { title: "25 Minute Dumbbell Complete Chest Workout", videoId: "xvv_K1CeEEo" },
    { title: "The PERFECT Science Based Chest Workout (2025 EDITION)", videoId: "zD266B2jk0s" },
    { title: "The Chest Workout (MOST EFFECTIVE!)", videoId: "dPb9JxFMuuE" },
    { title: "The PERFECT Chest Workout (Sets and Reps Included)", videoId: "89e518dl4I8" }
  ],
  "Back": [
    { title: "Major Muscle Groups Of The Human Body - Back Focus", videoId: "58gI3jXNnPI" },
    { title: "Complete Back Workout with Pull-ups", videoId: "_pxX2gq5t4g" },
    { title: "The Perfect Deadlift Form", videoId: "dPb9JxFMuuE" },
    { title: "Lat Pulldown Tutorial", videoId: "89e518dl4I8" },
    { title: "Row Variations for Back Development", videoId: "ykQlXirszbo" }
  ],
  // ... [same videoData as before for other muscle groups]
};

function generateMockVideos(muscleGroupId: number, groupName: string): InsertVideo[] {
  const muscleVideos = videoData[groupName] || Array(5).fill({ title: `${groupName} Workout`, videoId: "default" });

  return muscleVideos.map((video, index) => ({
    title: video.title,
    description: `A comprehensive ${groupName.toLowerCase()} workout routine for strength and definition`,
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    videoId: video.videoId,
    muscleGroupId,
    stats: {
      views: Math.floor(Math.random() * 1000000) + 50000,
      likes: Math.floor(Math.random() * 50000) + 1000,
      duration: `${Math.floor(Math.random() * 20) + 5}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`
    },
    outcomes: [
      `Increased ${groupName.toLowerCase()} strength`,
      `Better ${groupName.toLowerCase()} definition`,
      `Improved ${groupName.toLowerCase()} endurance`,
      index % 2 === 0 ? "Enhanced flexibility" : "Better coordination",
      index % 3 === 0 ? "Injury prevention" : "Functional strength"
    ]
  }));
}

export function generateInitialVideos(): InsertVideo[] {
  return mockMuscleGroups.flatMap((group, index) =>
    generateMockVideos(index + 1, group.name)
  );
}
