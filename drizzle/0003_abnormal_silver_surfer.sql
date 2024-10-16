ALTER TABLE "fullstacktodo" RENAME COLUMN "text" TO "title";--> statement-breakpoint
ALTER TABLE "fullstacktodo" ALTER COLUMN "title" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "fullstacktodo" ALTER COLUMN "description" SET DATA TYPE varchar(256);--> statement-breakpoint
ALTER TABLE "fullstacktodo" ALTER COLUMN "description" SET NOT NULL;