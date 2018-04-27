let accessToken = '';
const ClientID = '310b9f64086940d6a47d941353d30296';
const redirectURI = 'http://zeroxal-jammming.surge.sh';

const Spotify = {

  getAccessToken() {
    if (accessToken !== '') {
      return accessToken;
    }

    let expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);
    let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

    if (expirationTimeMatch && accessTokenMatch) {
      let accessToken = accessTokenMatch[1];
      let expireTime = expirationTimeMatch[1];

      window.setTimeout(() => accessToken = '', expireTime * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${ClientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
    }
  },

  searchSP(term) {
    let Token = this.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${Token}`
      }
    }).then(response => {
      if (response.ok) {
        return response.json
      } else {
        throw new Error('Request failed!')
      }
    }).then(jsonResponse => {
      if (jsonResponse.hasOwnProperty('tracks')) {
        return jsonResponse.tracks.items.map(track => ({id: track.id, name: track.name, artist: track.artists[0].name, album: track.album.name, uri: track.uri}));
      }

    })

  },

  savePlaylist(playListName, trackURIs){
    if (!playListName || !trackURIs){
      return;
    }
let Token = this.accessToken;
let header = {Authorization: `Bearer ${Token}`};
let user;

return fetch(`https://api.spotify.com/v1/me`,
  {headers : header}).then(response =>
    {if (response.ok){
      return response.json()
    }
  }).then(jsonResponse => {
    user = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${user}/playlists`, {
      headers : header,
      method: 'POST',
      body: JSON.stringify({name: playListName}),
  })
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
  }).then(jsonResponse => {
    let playListID = jsonResponse.id;

    return fetch(`https://api.spotify.com/v1/users/${user}/playlists/${playListID}/tracks`, {
      headers : header,
      method: 'POST',
      Accept: 'application/json',
      body: JSON.stringify({uris: trackURIs})
    })
      })
    }
  }




export default Spotify;
