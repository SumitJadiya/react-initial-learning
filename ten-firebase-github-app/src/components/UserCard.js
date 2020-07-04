import React from 'react';
import {
    Card,
    CardBody
} from "reactstrap"


const UserCard = ({ user }) => {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} alt={user.login} className="img-thumbnail" />
            <CardBody>
                <div class="text-primary">{user.name}</div>
                <div class="text-primary">{user.location}</div>
                <div class="text-primary">{user.bio}</div>
                <div class="text-info">Available for hire: {user.hireable ? "YES" : "NOPE"}</div>
                <div class="text-info">Followers {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard