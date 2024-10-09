import TopArtistsComponent from "./TopArtist"
import TopSongsComponent from "./TopSongs";
import TopAlbumsComponent from "./TopAlbums";


const TopList = () => {
    return (
        <div className="flex flex-row w-5/6 gap-5 jsutify">
            <TopArtistsComponent className="w-2/6" />
            <TopSongsComponent className="w-2/6" />
            <TopAlbumsComponent className="w-2/6" />

        </div>
    )
}

export default TopList