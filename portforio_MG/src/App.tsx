import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Skills from "./components/Skills";
import Others from "./components/Others";
import TopPage from "./components/TopPage";
function App() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/' element={<TopPage />} />
                <Route path='/products' element={<Products />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/others' element={<Others />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
