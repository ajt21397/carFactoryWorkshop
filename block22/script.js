async function init() {
    const songs = await fetchAllSongs();
    console.log(songs);
  }


  const fetchAllSongs = async () => {
    try {
        const response = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


function renderSongs(songs) {
    const songContainer = document.querySelector('#song-container');
    songContainer.innerHTML = '';
    songs.forEach((song) => {
      const songElement = renderSong(song);
      songContainer.append(songElement);
    });
  }

init();