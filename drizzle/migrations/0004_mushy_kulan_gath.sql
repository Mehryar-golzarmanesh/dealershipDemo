ALTER TABLE "test_drive_requests" ALTER COLUMN "preferred_date" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "test_drive_requests" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "test_drive_requests" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "test_drive_requests" ADD COLUMN "status" varchar(20) DEFAULT 'new' NOT NULL;--> statement-breakpoint
ALTER TABLE "test_drive_requests" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;