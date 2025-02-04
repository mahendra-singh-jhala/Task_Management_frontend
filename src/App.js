import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoute from "./routes/UserRoute";
import PageNotFound from "./page/pagenotfound/PageNotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<UserRoute />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </Router>
    );
}

export default App;
