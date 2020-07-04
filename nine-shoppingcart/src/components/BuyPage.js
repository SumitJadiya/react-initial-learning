import React, { useState, useEffect } from "react"
// import Axios from "axios"
import CartItem from "./CartItem"
import { random, commerce } from "faker"
import { Container, Col, Row } from "reactstrap"
import data from "./PEXALS.json"

// const apiKey = "INSERT_YOUR_KEY_HERE"
// const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([])

    const fetchPhotos = /* async */ () => {

        /*
        We are using local JSON

        const { data } = await Axios.get(url, {
            header: {
                Authorization: apiKey
            }
        })
        */

        const { photos } = data

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: commerce.productName(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))
        setProduct(allProduct)
    }

    useEffect(() => {
        fetchPhotos()
    }, [])

    return (
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage