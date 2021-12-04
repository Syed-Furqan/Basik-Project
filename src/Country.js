import { useEffect, useState } from "react";
import { useParams } from "react-router"
import "./Country.css"

const Country = () => {
    const {country} = useParams();
    const [users, setUsers] = useState([]);

    const URL = `https://randomuser.me/api/?nat=${country}&results=32`;

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.log(err))
    }, [URL]);

    return (
        <div className="country">
            <h1>{users[0]?.location.country}</h1>
            <div className="country__body">
                {users.map(user => (
                    <div className="user" key={user.cell}>
                        <div className="user__header">
                            <img alt="" src={user.picture.medium}/>
                            <p>{`${user.name.first} ${user.name.last}`}</p>
                            <small>{`${user.dob.age} years old.`}</small>
                        </div>
                        <div className="user__middle">
                            <p><i className="fas fa-phone"></i>{user.cell}</p>
                            <p><i className="fas fa-envelope"></i>{user.email}</p>
                        </div>
                        <div className="user__footer">
                            <p>
                                <i className="fas fa-map-marker-alt"></i>{`${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Country;