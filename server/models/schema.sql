CREATE TABLE basement_brew;

CREATE TABLE users (
    id uuid PRIMARY KEY,
    username VARCHAR(255) UNIQUE,
    email VARCHAR(50) NOT NULL,
    password VARCHAR NOT NULL
);
CREATE TABLE posts (
    pid uuid PRIMARY KEY,   
    title VARCHAR(255),
    body VARCHAR,
    user_id uuid REFERENCES users(id),
    author VARCHAR REFERENCES users(username),
    date_created TIMESTAMP
);