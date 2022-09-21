import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Features from "./views/Features";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />}>
                <Route path="features"  element={<Features />}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);