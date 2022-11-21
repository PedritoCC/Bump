import React from "react";
import Footer from "../Footer";
import Header from "../Header";


const Layout = ({
    children,
}) => {
    return (
        <>
            <Header />
            <div className = "pt-16 min-h-screen" >{children}</div>
            <Footer/>
        </>
    )
}

export default Layout;