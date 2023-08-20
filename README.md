# AnimeCRUD API

This project is an anime CRUD API developed using Node without any framework. It allows users to create, read, update, and delete anime data. The API is self-hosted and can be used by any application that needs to access anime data.

## Run Locally

Clone the project

```bash
  git clone https://github.com/sumit-kamble/anime-crud-api.git
```

Go to the project directory

```bash
  cd anime-crud-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API working

#### Get all animes

```http
  GET /api/animes
```

#### Get anime by Id (UUID)

```http
  GET /api/animes/id
```

#### Post anime

```http
  POST /api/animes/
```

##### Example request body

```json
{
  "title": "Berserk",
  "image_url": "https://myanimelist.net/anime/33/Berserk_1997",
  "synopsis": "Guts is a lone mercenary who fights for survival in a dark and violent world. He wields a massive sword and wears a metal arm, and he is driven by a thirst for revenge against the demons who killed his lover.",
  "genres": ["Action", "Adventure", "Drama", "Fantasy"],
  "studio": "Otogi Pro",
  "rating": "8.75",
  "episodes": 25,
  "release_date": "1997-03-07",
  "main_characters": ["Guts", "Casca", "Griffith", "Puck"],
  "opening_theme": "Tell Me Why by COIL",
  "ending_theme": "Ash Crow by COIL"
}
```

#### Update anime

```http
  PUT /api/animes/id
```

##### Update the anime details in request body

```json
{
  "title": "Berserk",
  "image_url": "https://myanimelist.net/anime/33/Berserk_1997",
  "synopsis": "Guts is a lone mercenary who fights for survival in a dark and violent world. He wields a massive sword and wears a metal arm, and he is driven by a thirst for revenge against the demons who killed his lover, Casca. Along the way, he meets a variety of strange and dangerous characters, including the mysterious Griffith, who offers Guts a chance to join his band of mercenaries, the Band of the Hawk.",
  "genres": ["Action", "Adventure", "Drama", "Fantasy", "Horror"],
  "studio": "Otogi Pro",
  "rating": "8.75",
  "episodes": "25",
  "release_date": "1997-03-07",
  "main_characters": {
    "Guts": {
      "image_url": "https://myanimelist.net/character/13/Guts",
      "description": "A former mercenary who wields a massive sword and wears a metal arm. He is driven by a thirst for revenge against the demons who killed his lover, Casca."
    },
    "Casca": {
      "image_url": "https://myanimelist.net/character/14/Casca",
      "description": "A former soldier who was once Guts' lover. She was turned into a demon by Griffith, but Guts was able to save her. She is now haunted by the memories of what happened to her."
    },
    "Griffith": {
      "image_url": "https://myanimelist.net/character/15/Griffith",
      "description": "The leader of the Band of the Hawk. He is a charismatic and ambitious man who is willing to do whatever it takes to achieve his goals. He is also the one who turned Casca into a demon."
    },
    "Puck": {
      "image_url": "https://myanimelist.net/character/16/Puck",
      "description": "A fairy who is friends with Guts. He is a wise and mischievous creature who provides comic relief in the midst of the darkness."
    }
  },
  "opening_theme": "Tell Me Why by COIL",
  "ending_theme": "Ash Crow by COIL"
}
```

#### Delete anime

```http
  Delete /api/animes/id
```
