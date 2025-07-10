import { int, sqliteTable, text, real } from "drizzle-orm/sqlite-core";

import { location } from "./location";
import { user } from "./auth";

export const locationLog = sqliteTable("locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  userId: int().notNull().references(() => user.id),
  locationId: int().notNull().references(() => location.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now())
});
