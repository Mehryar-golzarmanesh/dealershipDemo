ALTER TABLE "cars"
  ADD COLUMN IF NOT EXISTS "motor" varchar(100),
  ADD COLUMN IF NOT EXISTS "power_direction" varchar(50),
  ADD COLUMN IF NOT EXISTS "inside_color" varchar(50),
  ADD COLUMN IF NOT EXISTS "space" varchar(50);
