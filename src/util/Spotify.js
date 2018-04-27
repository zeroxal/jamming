let accessToken = '';
const ClientID = '310b9f64086940d6a47d941353d30296';
const redirectURI = 'http://localhost:3000';

const Spotify {
getAccessToken() {
if (if accessToken !== ''){
  return accessToken;
}
  let expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);
  let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

else if(expirationTimeMatch && accessTokenMatch ) {
  let accessToken = accessTokenMatch[1];
  let expireTime = expirationTimeMatch[1];

  window.setTimeout(() => accessToken = '', expirationTime * 1000);
  window.history.pushState('Access Token', null, '/');

  return accessToken;
} else {
return `https://accounts.spotify.com/authorize?client_id=${ClientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
}
}
}



export Spotify;
