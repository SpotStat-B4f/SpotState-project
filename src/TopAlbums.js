import React, { useState } from "react";
import data from "./spotify_data.json"

const TopAlbumsComponent = () => {
    const [showMore, setShowMore] = useState(false)
    const [filter, setFilter] = useState(false)

    const filterToggle = () => {
        setFilter(!filter)
    }


    const showToggle = () => {
        setShowMore(!showMore)
    }

    const albumsPlaytimeArray = [];

    const now = new Date();
    const sameDateLastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
    const filtered = filter
        ? data.filter(item => {
            const itemDate = new Date(item.ts); 
            console.log("Item date:", itemDate); 
            return itemDate >= sameDateLastYear;
        })
        : data;

    filtered.forEach(song => {
        const album = song.master_metadata_album_album_name;
        const playtime = song.ms_played;

        if (album) {
            const albumEntry = albumsPlaytimeArray.find(entry => entry.album === album);

            if (albumEntry) {
                albumEntry.playtime += playtime;
            } else {
                albumsPlaytimeArray.push({ album: album, playtime: playtime });
            }
        }
    });

    const sortedAlbums = albumsPlaytimeArray.sort((a, b) => b.playtime - a.playtime).slice(0, 100);

    const displayedSortedAlbums = showMore ? sortedAlbums : sortedAlbums.slice(0, 10)


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Top 100 Albums by Playtime</h1>
            <button onClick={filterToggle}>{filter ? "from the begining" : "Last year"}</button>
            <ul>
                {displayedSortedAlbums.map((entry, index) => (
                    <li key={index} className="mb-2">
                        {index + 1}. {entry.album} - {Math.floor(entry.playtime / 1000 / 60)} minutes
                    </li>
                ))}
            </ul>
            <button onClick={showToggle}>{showMore ? "Show Less" : "Show More"}</button>
        </div>
    );

}

export default TopAlbumsComponent