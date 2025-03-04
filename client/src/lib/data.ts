import type { InsertMuscleGroup, InsertVideo } from "@shared/schema";

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

const demoThumbnails = [
  "https://img.youtube.com/vi/oo0bZ6Vrepg/maxresdefault.jpg",
  "https://img.youtube.com/vi/58gI3jXNnPI/maxresdefault.jpg",
  "https://img.youtube.com/vi/xvv_K1CeEEo/maxresdefault.jpg",
  "https://img.youtube.com/vi/_pxX2gq5t4g/maxresdefault.jpg",
  "https://img.youtube.com/vi/dPb9JxFMuuE/maxresdefault.jpg"
];

function generateMockVideos(muscleGroupId: number, groupName: string): InsertVideo[] {
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
    "Shoulders": [
      { title: "Shoulder Workout - Build Bigger Shoulders", videoId: "oo0bZ6Vrepg" },
      { title: "Shoulder Press Variations", videoId: "xvv_K1CeEEo" },
      { title: "The Best Shoulder Workout for Mass", videoId: "zD266B2jk0s" },
      { title: "Overhead Press Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Lateral Raise Variations", videoId: "89e518dl4I8" }
    ],
    "Biceps": [
      { title: "Bicep Curls - Build Bigger Biceps", videoId: "oo0bZ6Vrepg" },
      { title: "Bicep Workout - Full Body", videoId: "xvv_K1CeEEo" },
      { title: "Hammer Curl Variations", videoId: "zD266B2jk0s" },
      { title: "Concentration Curl Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Bicep Cable Exercises", videoId: "89e518dl4I8" }
    ],
    "Triceps": [
      { title: "Tricep Dips - Build Bigger Triceps", videoId: "oo0bZ6Vrepg" },
      { title: "Tricep Workout - Full Body", videoId: "xvv_K1CeEEo" },
      { title: "Skullcrusher Variations", videoId: "zD266B2jk0s" },
      { title: "Overhead Tricep Extension Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Tricep Cable Exercises", videoId: "89e518dl4I8" }
    ],
    "Forearms": [
      { title: "Forearm Exercises - Improve Grip Strength", videoId: "oo0bZ6Vrepg" },
      { title: "Wrist Curls - Full Body", videoId: "xvv_K1CeEEo" },
      { title: "Reverse Wrist Curl Variations", videoId: "zD266B2jk0s" },
      { title: "Farmers Walk Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Forearm Strength Exercises", videoId: "89e518dl4I8" }
    ],
    "Abs": [
      { title: "Abdominal Exercises - Build Stronger Abs", videoId: "oo0bZ6Vrepg" },
      { title: "Plank Variations", videoId: "xvv_K1CeEEo" },
      { title: "Crunches - Full Body", videoId: "zD266B2jk0s" },
      { title: "Leg Raises Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Russian Twists - Full Body", videoId: "89e518dl4I8" }
    ],
    "Quadriceps": [
      { title: "Quad Exercises - Build Stronger Legs", videoId: "oo0bZ6Vrepg" },
      { title: "Squat Variations", videoId: "xvv_K1CeEEo" },
      { title: "Leg Press - Full Body", videoId: "zD266B2jk0s" },
      { title: "Lunges Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Leg Extensions - Full Body", videoId: "89e518dl4I8" }
    ],
    "Hamstrings": [
      { title: "Hamstring Curls - Build Stronger Legs", videoId: "oo0bZ6Vrepg" },
      { title: "Romanian Deadlifts", videoId: "xvv_K1CeEEo" },
      { title: "Good Mornings - Full Body", videoId: "zD266B2jk0s" },
      { title: "Hamstring Stretches Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Glute-Ham Raises - Full Body", videoId: "89e518dl4I8" }
    ],
    "Glutes": [
      { title: "Glute Bridges - Build Stronger Glutes", videoId: "oo0bZ6Vrepg" },
      { title: "Hip Thrust Variations", videoId: "xvv_K1CeEEo" },
      { title: "Donkey Kicks - Full Body", videoId: "zD266B2jk0s" },
      { title: "Glute Stretches Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Cable Kickbacks - Full Body", videoId: "89e518dl4I8" }
    ],
    "Calves": [
      { title: "Calf Raises - Build Stronger Calves", videoId: "oo0bZ6Vrepg" },
      { title: "Seated Calf Raises", videoId: "xvv_K1CeEEo" },
      { title: "Standing Calf Raises - Full Body", videoId: "zD266B2jk0s" },
      { title: "Calf Stretches Tutorial", videoId: "dPb9JxFMuuE" },
      { title: "Calf Exercises - Full Body", videoId: "89e518dl4I8" }
    ]
  };

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