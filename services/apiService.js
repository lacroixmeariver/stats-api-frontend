const fetch = require('node-fetch');

const API_BASE_URL = process.env.BACKEND_API_BASE_URL;

async function fetchAllPlayers() {
  const response = await fetch(API_BASE_URL + "/players"); 
  return response.json(); 
}

async function fetchPlayer(playerId) {
  const response = await fetch(API_BASE_URL + "/players/" + playerId); 
  return response.json(); 
}

async function fetchAllTeams() {
  const response = await fetch(API_BASE_URL + "/teams"); 
  return response.json(); 
}

async function fetchTeam(teamId) {
  const response = await fetch(API_BASE_URL + "/players/" + teamId); 
  return response.json(); 
}

async function fetchAllGames() {
  const response = await fetch(API_BASE_URL + "/games"); 
  return response.json(); 
}

async function fetchGame(gameId) {
  const response = await fetch(API_BASE_URL + "/players/" + gameId); 
  return response.json(); 
}

module.exports = {
  fetchAllPlayers, fetchPlayer, fetchAllTeams, fetchTeam, fetchAllGames, fetchGame 
};
