# vrey_coding_challenge

Full-stack MVC app with a PostgreSQL relational database, which displays daily solar power consumptions for a house.

## Requirements
Local Postgres database

[Mako Fake API](https://github.com/VREY-Energie/mock-measurement-api-recruiting) - provides random consumption values

## Quick Start

### Clone Mako API and run locally
[see here](https://github.com/VREY-Energie/mock-measurement-api-recruiting)

### Install postgres if not already present

### Create .env file in root directory with contents:
```
PORT=3000
POSTGRES_USER='postgres'
POSTGRES_PW='password'
API_URL = 'http://localhost:9292'
```
### Install dependencies
`npm install`

### Run server
`npx tsx src/main.ts`

### Open app
Navigate to `http://localhost:3000` in browser

## Missing features
- Command line interface
- Display metering data in table
- Calculation of daily values and daily average solar consumption
- Styles
- Tests
