# home-maker

A small **REST API** for managing household inventory — track items per household (add, update, list, remove). Built with **Node.js / Express 5** and **MongoDB (Mongoose)**.

> Backend service (early-stage). Organized with a routes → controllers → models structure.

## Tech Stack

Node.js · Express 5 · MongoDB · Mongoose

## Project Structure

```
server/
  index.js                 # Express app entry
  routes/inventory.js      # inventory routes
  controllers/inventory.js # request handlers
  models/
    household.js           # Household schema
    inventory.js           # Inventory item schema
```

## Getting Started

```bash
cd server
npm install
# set your MongoDB connection string (e.g. a MONGO_URI env var)
npm start        # runs with nodemon
```

The API exposes inventory endpoints backed by MongoDB via Mongoose models for households and their inventory items.
