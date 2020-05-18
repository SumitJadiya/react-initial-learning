import React from "react"
import PortfolioDivider from "./PortfolioDivider"

const Model = ({ ids, label, imgPath }) => (
    <div className="portfolio-modal modal fade" id={ids} tabIndex="-1" role="dialog" aria-labelledby={label} aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i className="fas fa-times"></i></span>
                </button>
                <div className="modal-body text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <PortfolioDivider />

                                <img className="img-fluid rounded mb-5" src={"assets/img/portfolio/" + imgPath} alt="" />
                                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                <button className="btn btn-primary" href="/#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Model