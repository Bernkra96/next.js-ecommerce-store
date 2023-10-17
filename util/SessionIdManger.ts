import { getCookie } from './cookies';

// Create a session ID
// If there is a cookie with the name 'cart' and it is 5 digits long, use that as the session ID
// Otherwise, generate a random number between 10000 and 99999
export async function SessionIdManager() {
  let sessionId = GenerateSessionId();
  const cookieID = await getCookie('cart');
  if (cookieID && cookieID.toString().length === 5) {
    sessionId = parseInt(cookieID);
  }

  return sessionId;
}
// Get a random number between min and max
function GenerateSessionId() {
  return getRandomInt(10000, 99999);
}
// Ger random number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

SessionIdManager();
