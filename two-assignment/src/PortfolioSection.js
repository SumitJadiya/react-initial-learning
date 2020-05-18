import React from "react"
import PortfolioItem from "./PortfolioItem"
import PortfolioModels from "./PortfolioModels"
import PortfolioDivider from "./PortfolioDivider"

const PortfolioSection = () => (
    <section className="page-section portfolio" id="portfolio">
        <div className="container">
            <PortfolioDivider />
            <div className="row">
                <PortfolioItem target="#portfolioModal1" imgPath="cabin.png" />
                <PortfolioItem target="#portfolioModal2" imgPath="cake.png" />
                <PortfolioItem target="#portfolioModal3" imgPath="circus.png" />
                <PortfolioItem target="#portfolioModal4" imgPath="game.png" />
                <PortfolioItem target="#portfolioModal5" imgPath="safe.png" />
                <PortfolioItem target="#portfolioModal6" imgPath="submarine.png" />
            </div>
        </div>
        <PortfolioModels />

    </section>

)

export default PortfolioSection