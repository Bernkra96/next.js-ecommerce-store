import { getCookie } from './cookies';

export async function SessionIdManager() {
  let sessionId = GenerateSessionId();
  const cookieID = await getCookie('cart');
  if (cookieID && cookieID.toString().length === 5) {
    sessionId = parseInt(cookieID);
  }

  return sessionId;
}

function GenerateSessionId() {
  return getRandomInt(10000, 99999);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

SessionIdManager();
