import Render from "./Render";
import {Route, Routes} from "react-router";

export default function App() {
    return (
        <Routes>
            <Route path='/:user?/:repo?' element={<Render/>}/>
        </Routes>
    );
}