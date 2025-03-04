import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const muscleGroups = pgTable("muscle_groups", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  thumbnailUrl: text("thumbnail_url").notNull(),
  videoId: text("video_id").notNull(),
  muscleGroupId: integer("muscle_group_id").notNull(),
  stats: json("stats").$type<{
    views: number;
    likes: number;
    duration: string;
  }>().notNull(),
  outcomes: json("outcomes").$type<string[]>().notNull(),
});

export const insertMuscleGroupSchema = createInsertSchema(muscleGroups).omit({ id: true });
export const insertVideoSchema = createInsertSchema(videos).omit({ id: true });

export type MuscleGroup = typeof muscleGroups.$inferSelect;
export type InsertMuscleGroup = z.infer<typeof insertMuscleGroupSchema>;
export type Video = typeof videos.$inferSelect;
export type InsertVideo = z.infer<typeof insertVideoSchema>;
