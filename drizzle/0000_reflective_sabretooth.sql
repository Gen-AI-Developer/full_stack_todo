CREATE TABLE IF NOT EXISTS "fullstacktodo" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"created_at" text DEFAULT '2024-10-15T17:38:24.823Z',
	"completed" boolean DEFAULT false
);
