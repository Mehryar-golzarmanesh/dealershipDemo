import {
  pgTable,
  serial,
  varchar,
  integer,
  numeric,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ===== NEW: Brands Table =====
export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  logo: text("logo"),
  country: varchar("country", { length: 50 }),
  website: varchar("website", { length: 255 }),
  description: text("description"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ===== Updated: Cars Table =====
export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  brandId: integer("brand_id")
    .references(() => brands.id, {
      onDelete: "restrict",
    })
    .notNull(),
  model: varchar("model", { length: 100 }).notNull(),
  year: integer("year").notNull(),
  price: numeric("price", { precision: 12, scale: 2 }).notNull(),
  mileage: integer("mileage").notNull().default(0),
  transmission: varchar("transmission", { length: 50 }).notNull(),
  fuelType: varchar("fuel_type", { length: 50 }).notNull(),
  color: varchar("color", { length: 50 }),
  vin: varchar("vin", { length: 17 }).unique(),
  description: text("description"),
  images: text("images").array().notNull().default([]),
  isFeatured: boolean("is_featured").notNull().default(false),
  isAvailable: boolean("is_available").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// ===== Inquiries Table =====
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  carId: integer("car_id").references(() => cars.id, {
    onDelete: "set null",
  }),
  type: varchar("type", { length: 20 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  preferredDate: varchar("preferred_date", { length: 50 }),
  message: text("message"),
  status: varchar("status", { length: 20 }).notNull().default("new"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// ===== Relations =====
export const brandsRelations = relations(brands, ({ many }) => ({
  cars: many(cars),
}));

export const carsRelations = relations(cars, ({ one, many }) => ({
  brand: one(brands, {
    fields: [cars.brandId],
    references: [brands.id],
  }),
  inquiries: many(inquiries),
}));

export const inquiriesRelations = relations(inquiries, ({ one }) => ({
  car: one(cars, {
    fields: [inquiries.carId],
    references: [cars.id],
  }),
}));

export type Brand = typeof brands.$inferSelect;
export type NewBrand = typeof brands.$inferInsert;
export type Car = typeof cars.$inferSelect;
export type NewCar = typeof cars.$inferInsert;
export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
