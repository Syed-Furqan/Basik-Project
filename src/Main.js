import { useEffect, useState } from "react";
import "./Main.css";

const Main = () => {
    const [users, setUsers] = useState([]);
    const URL = "https://randomuser.me/api/?results=32"

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.log(err))
    }, [URL]);


    return (
        <div className="main">
            <div className="main__header">
                <h1><i className="fas fa-users"></i> Yelp People</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus non totam illum voluptas 
                   libero repudiandae autem qui odit amet! Laboriosam itaque amet natus accusamus praesentium iste animi 
                   nemo optio Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id fugiat quas porro maiores.
                </p>
            </div>
            <div className="main__body">
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

export default Main;