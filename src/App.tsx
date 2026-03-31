import Repository from "./Repository";
import {Route, Routes} from "react-router";
import Gist from "./Gist";

export default function App() {
    return (
        <Routes>
            <Route path='gist/:user/:id' element={<Gist/>}/>
            <Route path='/:user?/:repo?' element={<Repository/>}/>
        </Routes>
    );
}