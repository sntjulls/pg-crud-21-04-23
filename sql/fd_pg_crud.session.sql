CREATE TABLE "things"(
    "id" SERIAL PRIMARY KEY,
    "description" TEXT NOT NULL CHECK ("description" != ''),
    "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT current_timestamp
)