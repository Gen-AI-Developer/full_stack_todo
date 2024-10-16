ALTER TABLE "fullstacktodo" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "fullstacktodo" ADD COLUMN "createAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "fullstacktodo" ADD COLUMN "updateAt" timestamp;