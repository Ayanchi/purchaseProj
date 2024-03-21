import {Route, Routes} from "react-router-dom";
import Regist from "../pages/Regist/Regist.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path={"/registers"} element={<Regist />}/>
        </Routes>
    );
};

export default Router;