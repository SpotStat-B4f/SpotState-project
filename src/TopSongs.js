import React, { useState } from "react";
import data from "./spotify_data.json"

const TopSongsComponent = () => {
    const [showMore, setShowMore] = useState(false)
    const [filter, setFilter] = useState(false)

    const filterToggle = () => {
        setFilter(!filter)
    }


    const showToggle = () => {
        setShowMore(!showMore)
    }

    const songsPlaytimeArray = [];

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
        const trackName = song.master_metadata_track_name;
        const playtime = song.ms_played;

        if (trackName) {
            const trackEntry = songsPlaytimeArray.find(entry => entry.trackName === trackName);

            if (trackEntry) {
                trackEntry.playtime += playtime;
            } else {
                songsPlaytimeArray.push({ trackName: trackName, playtime: playtime });
            }
        }
    });

    const sortedSongs = songsPlaytimeArray.sort((a, b) => b.playtime - a.playtime).slice(0, 100);

    const displayedSortedSongs = showMore ? sortedSongs : sortedSongs.slice(0, 10)


    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Top 100 Songs by Playtime</h1>
            <button onClick={filterToggle}>{filter ? "from the begining" : "Last year"}</button>
            <ul>
                {displayedSortedSongs.map((entry, index) => {
                    const totalMinutes = Math.floor(entry.playtime / 1000 / 60);
                    const hours = Math.floor(totalMinutes / 60)
                    const minutes = totalMinutes % 60;

                    return (
                        <li key={index}>
                            {index + 1}. {entry.trackName} - {hours} hours {minutes} minutes
                        </li>
                    )
                })}
            </ul>
            <button onClick={showToggle}>{showMore ? "Show Less" : "Show More"}</button>
        </div>
    );

}

export default TopSongsComponent