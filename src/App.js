import Theme from "./theme/theme";
import SideBar from "./layouts/SideBar";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import routes from "./routers/routes";
import AllPages from "./views/AllPages";

function App() {

  

  return (
    <Theme>
      
      <Router>
      <SideBar />
      <div>
        <AllPages />
      </div>
      </Router>
    </Theme>
  );
}

export default App;
