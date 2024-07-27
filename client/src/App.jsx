// import { FaMountainSun } from "react-icons/fa6";
import { BrowserRouter as Router } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

import AllRoutes from "./AllRoutes";

function App() {
  return (
    <>
      <Router>
        <AllRoutes />
      </Router>
    </>
  )
}

export default App;
