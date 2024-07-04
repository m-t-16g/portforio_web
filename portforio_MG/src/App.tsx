import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Skills from "./components/Skills";
import TopPage from "./components/TopPage";
import Footer from "./components/Footer";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<TopPage />} />
                <Route path='/products' element={<Products />} />
                <Route path='/skills' element={<Skills />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
