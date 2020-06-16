import React from 'react';
import { Container, Row, Col } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import MyCard from "./components/MyCard"

function App() {
  const [details, setDetails] = useState({})
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/")
    const details = data.results[0]
    setDetails(details)
    console.table(details)
  }

  useEffect(() => {
    fetchDetails()
  }, [])
  return (
    <Container Container fluid className="p-4 bg-primary App" >
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;