CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

--Favorites table
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (256) NOT NULL,
    "category_id" INTEGER
);

INSERT INTO "favorites" ("url", "category_id")
VALUES ('https://media0.giphy.com/media/2jukgZs1AECkGNxAL2/giphy.gif?cid=9858292c8vf76exwp80qdxrgqivh5dgjtifi29dufke33789&rid=giphy.gif', '2');
