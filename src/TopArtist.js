import React, { useState } from 'react';
import data from './spotify_data.json';

const TopArtistsComponent = () => {
    const [showMore, setShowMore] = useState(false);
    const [filter, setFilter] = useState(false);

    const filterToggle = () => {
        setFilter(!filter);
    };

    const showToggle = () => {
        setShowMore(!showMore);
    };

    const artistPlaytimeArray = [];

    const now = new Date();
    const sameDateLastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    const filtered = filter
        ? data.filter(item => {
            const itemDate = new Date(item.ts);
            return itemDate >= sameDateLastYear;
        })
        : data;

    filtered.forEach(song => {
        const artist = song.master_metadata_album_artist_name;
        const playtime = song.ms_played;

        if (artist) {
            const artistEntry = artistPlaytimeArray.find(entry => entry.artist === artist);

            if (artistEntry) {
                artistEntry.playtime += playtime;
            } else {
                artistPlaytimeArray.push({ artist: artist, playtime: playtime });
            }
        }
    });

    const sortedArtists = artistPlaytimeArray.sort((a, b) => b.playtime - a.playtime).slice(0, 100);
    const displayedSortedArtists = showMore ? sortedArtists : sortedArtists.slice(0, 10);

    return (
        <div className="p-6 max-w-4xl mx-auto bg-[#3a0e73] rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6 text-white">Top 100 Artists by Playtime</h1>
            <button 
                onClick={filterToggle} 
                className="mb-4 text-sm font-medium text-white hover:text-[#00D084] transition duration-300"
            >
                {filter ? "Show All Time" : "Show Last Year"}
            </button>
            <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-900 text-white">
                        <th className="py-3 px-4"></th> {/* Empty header for images */}
                        <th className="py-3 px-4 text-left">Rank</th>
                        <th className="py-3 px-4 text-left">Artist</th>
                        <th className="py-3 px-4 text-left">Playtime</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    {displayedSortedArtists.map((entry, index) => {
                        const totalMinutes = Math.floor(entry.playtime / 1000 / 60);
                        const hours = Math.floor(totalMinutes / 60);
                        const minutes = totalMinutes % 60;

                        let medalColor = '';
                        if (index === 0) {
                            medalColor = 'text-[#FFD700]'; // Gold for 1st place
                        } else if (index === 1) {
                            medalColor = 'text-[#C0C0C0]'; // Silver for 2nd place
                        } else if (index === 2) {
                            medalColor = 'text-[#cd7f32]'; // Bronze for 3rd place
                        } else {
                            medalColor = 'text-white'; // Default color for others
                        }

                        return (
                            <tr key={index} className={`hover:bg-gray-700 transition duration-300 ${medalColor}`}>
                                <td className="py-4 px-4">
                                    <img 
                                        src={`https://via.placeholder.com/50`} // Placeholder image URL
                                        alt={entry.artist} 
                                        className="w-10 h-10 rounded-full" // Adjust the size as needed
                                    />
                                </td>
                                <td className="py-4 px-4">{index + 1}</td>
                                <td className="py-4 px-4">{entry.artist}</td>
                                <td className={`py-4 px-4 ${medalColor}`}>{hours}h {minutes}m</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="sticky bottom-0 bg-[#3a0e73] p-4">
                <button 
                    onClick={showToggle} 
                    className="text-xs md:text-sm font-medium text-white bg-opacity-0 hover:text-[#00D084] transition duration-300 py-2 px-3 md:py-3 md:px-4"
                >
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default TopArtistsComponent;
