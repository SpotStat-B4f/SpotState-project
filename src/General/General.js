import Data from "../spotify_data.json";
// import profile from "../Img/profile.jpg";
import Cards from "./Cards";

const DataLngth = () => Data.length;
const Songs = Data.filter((item) => item.episode_name === null);
const DateAndTime = Songs.map((item) => item.ts);

const SongPlay = () => {
  return Data.filter((item) => item.episode_name === null).length;
};

const TrackPlay = () => {
  const SongsTrackName = Songs.map((item) => item.master_metadata_track_name);

  return [...new Set(SongsTrackName)].length;
};

const TimeSongListen = () => {
  return Math.round(
    Songs.map((item) => item.ms_played).reduce((a, b) => a + b) /
      (1000 * 60 * 60)
  );
};

const AvgTimeNonSkipp = () => {
  const sumTime =
    Songs.filter((item) => item.skipped !== null || item.skipped !== false)
      .map((item) => item.ms_played)
      .reduce((a, b) => a + b) /
    (1000 * 60 * 60);

  const MyData = Songs.filter(
    (item) => item.skipped !== null || item.skipped !== false
  ).map((item) => item.ts);

  const Date = MyData.map((item) => item.slice(0, item.indexOf("T") - 1));

  const n = [...new Set(Date)].length;
  return Math.round(sumTime / n);
};

const _ = require("lodash");

const mostFrequent = (arr) => {
  let freq = _.countBy(arr);
  return _.maxBy(Object.keys(freq), (o) => freq[o]);
};

const HourLisiting = () => {
  const hour = DateAndTime.map((item) =>
    item.slice(item.indexOf("T") + 1, item.indexOf("T") + 3)
  );

  return mostFrequent(hour);
};

function SeasonLisiting() {
  const sesion = DateAndTime.map((item) =>
    item.slice(item.indexOf("-") + 1, item.indexOf("-") + 3)
  );
  const result = (month) => {
    if (month == "02" || month == "01" || month == "12") return "Winter";
    if (month == "03" || month == "04" || month == "05") return "Spring";
    if (month == "06" || month == "07" || month == "08") return "Summer";
    if (month == "09" || month == "10" || month == "11") return "Autumn";
  };
  const mostFRreq = mostFrequent(sesion);
  return result(mostFRreq);
}
function Fun() {
  return (
    <>
      <p>Song Play Is : {SongPlay()} </p>
      <p>Track Is : {TrackPlay()} </p>
      <p>Time Song Listen : {TimeSongListen()} Hour</p>
      <p>Avg Time Non-Skipping Song Listen : {AvgTimeNonSkipp()} </p>
      <p>Hour Lisiting : {HourLisiting()}</p>
      <p>Season : {SeasonLisiting()}</p>
      {DateAndTime[0]}
    </>
  );
}

function Profile() {
  return (
    <div className="bg-black py-24 flex justify-center flex-col items-center bg-gradient-to-r from-pink-950 via-[#1a001a] via-[#2e003e]  to-[#0d000d] ">
      <div className="h-[60%] w-[90%] bg-gradient-to-b from-pink-500 via-purple-700 to-purple-1000 rounded-[50px] border-[6px] border-purple-700 flex flex-col items-center justify-center">
        <div className="bg-profilebg bg-cover bg-no-repeat bg-cover rounded-t-[46px] h-full bg-bottom flex flex-col items-center justify-center w-full">
          <div className="relative mt-[100px] self-start ">
            <div className="w-[180px] h-[180px]   rounded-full p-[10px] bg-gradient-to-r from-green-300  via-pink-300 via-blue-400 via-rose-500 to-purple-500 bg-[length:250%_200%]  animate-border-rotate shadow-lg">
              <img
                src=""
                width={160}
                height={160}
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <ul className="flex justify-center items-center w-[80%] text-white font-medium text-lg  gap-6 p-2">
          <li className="hover:text-green-300 rounded-2xl py-2 px-4 text-center ease-out duration-300 cursor-pointer hover:scale-[1.1] duration-300 ease-out">
            <a href="#">Play Song</a>
          </li>
          <li
            id="two"
            className="hover:text-green-300  rounded-2xl py-2 px-4 text-center ease-out duration-300 cursor-pointer hover:scale-[1.1] duration-300 ease-out"
          >
            <a href="#">Tracks</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-2 px-4 text-center ease-out duration-300 cursor-pointer hover:scale-[1.1] duration-300 ease-out">
            <a href="#">Spent Time</a>
          </li>
          <li className="hover:text-green-300  rounded-2xl py-2 px-4 text-center ease-out duration-300 cursor-pointer hover:scale-[1.1] duration-300 ease-out">
            <a href="#">Avg Daily Listen</a>
          </li>
          <li className="hover:text-green-300  rounded-2xl py-2 px-4 text-center ease-out duration-300 cursor-pointer hover:scale-[1.1] duration-300 ease-out">
            <a href="#">Focus Houre</a>
          </li>
          <li className="hover:text-green-300 rounded-2xl py-2 px-4 text-center ease-out duration-300 cursor-pointer hover:scale-[1.1] duration-300 ease-out">
            <a href="#">Focus Season</a>
          </li>
        </ul>
      </div>

      <div className="w-full py-10">
        <Cards
          one={SongPlay()}
          two={TrackPlay()}
          three={TimeSongListen()}
          four={AvgTimeNonSkipp()}
          five={HourLisiting()}
          six={SeasonLisiting()}
        />
      </div>
    </div>
  );
}
function General() {
  return (
    <diV className="flex flex-col  ">
      <Profile />
    </diV>
  );
}

export default General;
