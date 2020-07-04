import React, { useState, useEffect } from 'react';
import Axios from "axios"
import {
    ListGroup,
    ListGroupItem
} from "reactstrap"

const Repos = ({ url }) => {
    const [repos, setRepos] = useState([])
    const fetchRepos = async () => {
        const { data } = await Axios.get(url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, [url])

    return (

        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div class="text-primary">{repo.name}</div>
                    <div class="text-secondary">{repo.language}</div>
                    <div class="text-info">{repo.description}</div>
                    <div class="text-info">{repo.private}</div>
                    <div class="text-info">{repo.updated_at}</div>
                </ListGroupItem>
            ))}
        </ListGroup>

    )

}

export default Repos