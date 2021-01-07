import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/orders">
                    <Orders />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;