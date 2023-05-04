import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../elements/NoPage";
import Categories from "../pages/Admin/Categories/Categories";
import Products from "../pages/Content/Products/Products";
import About from "../pages/Content/About/About";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/results/:id" element={<Detail />} /> */}
            <Route path="*" element={<NoPage />} />
        </Routes>
    );
};

export default Routing;
