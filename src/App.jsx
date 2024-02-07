import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home.jsx";
import { Menu } from "./components/pages/menu/menu.jsx";
import { Category } from "./components/pages/category/Category.jsx";
import { About } from "./components/pages/about/aboutus.jsx";
import { Contact } from "./components/pages/contact/contactus.jsx";
import { News } from "./components/pages/News/News.jsx";
import { Blog } from "./components/pages/blog/blog.jsx";
import { Submenu } from "./components/pages/submenu/submenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/texas/" element={<Home />} />
        <Route path="/texas/home" element={<Home />} />
        <Route path="/texas/menu" element={<Menu />} />
        <Route path="/texas/category" element={<Category />} />
        <Route path="/texas/about" element={<About />} />
        <Route path="/texas/contact" element={<Contact />} />
        <Route path="/texas/news" element={<News />} />
        <Route path="/texas/news/:title" element={<Blog />} />
        <Route path="/texas/menu/:submenu" element={<Submenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
