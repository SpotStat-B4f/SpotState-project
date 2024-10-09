import TopArtistsComponent from "./TopArtist"
import TopSongsComponent from "./TopSongs";
import TopAlbumsComponent from "./TopAlbums";


const TopList = () => {
    return (
        <div>
            <TopArtistsComponent />
            <TopSongsComponent />
            <TopAlbumsComponent />

        </div>
    )
}

export default TopList