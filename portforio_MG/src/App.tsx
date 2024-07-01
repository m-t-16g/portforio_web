import { useState } from "react";
import "./App.css";
import Contents from "./components/Contents";
import Header from "./components/Header";
import Nav from "./components/Nav";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header></Header>
            <Contents></Contents>
            <Nav></Nav>
        </>
    );
}

export default App;
