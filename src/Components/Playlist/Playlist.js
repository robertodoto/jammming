import React from "react";
import styles from './Playlist.module.css';
import Tracklist from "../TrackList/Tracklist";

function Playlist(props) {
  function handleNameChange(event) {
    props.updatePlaylistName(event.target.value);
  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange} />
      <Tracklist 
      userSearchResults={props.playlistTracks}
      onRemove={props.onRemove}
      isRemoval={false}
      />
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist; 