# LaSalle - DiseΓ±o del software II 

# π― Pokedex Challenges

# 1.1 Pokemon Types

### Requirements:

* API: https://pokeapi.co
* Given the name of the pokemon return the type by:
  * Console - Terminal
  * Via Endpoint Http Body Json
* Control exceptions (Pokemon not found, PokeApi is down).
* The input via argument has to continue to work even if the api is down.

# 1.2 Favorite Pokemon

### Requirements:

* Create user
* Given the id of the pokemon add to the user's favorite list and save in memory:
  * Via Endpoint Http Body Json
* Control exceptions (User not found, UserAlreadyExists, PokemonAlreadyFavorite, PokeApi is down).

# 2. π Environment Setup

### π³ Needed tools

1. [Install Docker](https://www.docker.com/get-started)
2. [Install NodeJS (Required by CLI pokedex)](https://nodejs.org/es/download/)
2. Clone this project: `https://github.com/GvPau/mdas-api-pau_garcia`
3. Move to the project folder: `cd mdas-api-pau_garcia`
4. npm install

# 3. π Apps

### π₯ CLI Pokedex

1. docker-compose up --build
2. npm link
3. Now we can execute the pokedex cli

<img src="images/cli.png" height="300px">

### π₯ API Pokedex
1. docker-compose up --build
2. Go to: http://localhost:5001/docs

<img src="images/api-challenge-2.png" height="250px">

# 4. π Tests

### β Acceptance, Integration and Unit Testing
1. npm run test (for Mac and Linux)
2. npm run test:win (for Windows)
