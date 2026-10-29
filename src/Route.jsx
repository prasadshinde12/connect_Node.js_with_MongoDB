import { BrowserRouter, Routes, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import Comp4 from "./components/Comp4";
import Comp5 from "./components/Comp5";
import Pagenotfound from "./components/Pagenotfound";

const PROJECTROUTE = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="comp1" element={<Comp1 />} />
        <Route path="comp2" element={<Comp2 p1="100" p2="200" />} />
        <Route path="comp3" element={<Comp3 />} />
        <Route path="comp4" element={<Comp4 />} />
        <Route path="comp5" element={<Comp5 />} />
        <Route path="*" element={<Pagenotfound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default PROJECTROUTE;
