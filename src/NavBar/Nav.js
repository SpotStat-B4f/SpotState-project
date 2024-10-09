import logo from "../Img/logoo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import TopList from "../Top Lists"


function Nav() {
  return (
    <div className="w-full p-2 flex justify-between text-xl pl-16 pr-16 ">
      <Router>
        <img src={logo} alt="Logo" width={75} />

        <ul className="flex justify-between items-center w-[35%] text-white font-small text-center gap-4">
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl  py-1 flex-1 text-center ease-out duration-300">
            <Link to="/Home">Home</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl  py-1 flex-1 text-center ease-out duration-300">
            <Link >Profile</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl  py-1 flex-1 text-center ease-out duration-300">
            <Link to="/Top Lists">Top</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl  py-1 flex-1 text-center ease-out duration-300">
            <Link to="/Top Lists" >Artists</Link>
          </li>
          <li className="hover:text-purple-700 hover:bg-white rounded-2xl  py-1 flex-1 text-center ease-out duration-300">
            <Link >Podcast</Link>
          </li>
        </ul>

        <Routes>
           <Route path="/Home/Home" element={<Home />}></Route>
           <Route path="/Top List" element={<TopList />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default Nav;
