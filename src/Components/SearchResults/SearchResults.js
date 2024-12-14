import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/Tracklist";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
        {/* <!-- Add a TrackList component --> */}
        <Tracklist userSearchResults={props.userSearchResults} />
      </div>
        );
}

export default SearchResults;