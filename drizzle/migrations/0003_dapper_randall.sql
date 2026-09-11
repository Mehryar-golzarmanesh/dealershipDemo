CREATE TABLE "test_drive_requests" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"preferred_date" date NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cars" ADD COLUMN "motor" varchar(100);--> statement-breakpoint
ALTER TABLE "cars" ADD COLUMN "power_direction" varchar(50);--> statement-breakpoint
ALTER TABLE "cars" ADD COLUMN "inside_color" varchar(50);--> statement-breakpoint
ALTER TABLE "cars" ADD COLUMN "space" varchar(50);