import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import "./app.css";
import {BrowserRouter as Router ,Switch  , Route , Link} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/ProductList/ProductList";
function App() {
  return ( 
    <Router>
      < Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/users">
            <UserList/>
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:productId">
            <User/>
          </Route>
          <Route path="/newproduct">
            <NewUser/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
