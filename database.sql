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
    "url" VARCHAR (100) NOT NULL,
    "category_id" INTEGER NOT NULL
);

INSERT INTO "favorites" ("url", "category_id")
VALUES ('https://giphy.com/gifs/this-is-fine-QMHoU66sBXqqLqYvGO', '5'), 
('https://giphy.com/gifs/trash-dumpster-fire-Jrl4FlTaymFFbNiwU5', '3'), 
('https://giphy.com/gifs/smile-nicolas-cage-nic-PHHtPDk6peKyI', '2'), 
('https://giphy.com/gifs/disney-sloth-sloths-zootopia-IG6i30q4DMT0Q', '3'), 
('https://giphy.com/gifs/moodman-cat-2020-wack-kefZA9vr3rKCJThLjL', '1');