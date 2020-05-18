import React from "react"
import Nav from "./Nav"
import Header from "./Header"
import PortfolioSection from "./PortfolioSection"
import About from "./About"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import CopyrightSection from "./CopyrightSection"

const App = () => {
    return (
        <div>
            <Nav />
            <Header />
            <PortfolioSection />
            <About />
            <ContactSection />
            <Footer />
            <CopyrightSection />
        </div>
    )
}

export default App