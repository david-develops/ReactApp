import { func } from "prop-types";
import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";

function App(){
    return(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}

export default App;