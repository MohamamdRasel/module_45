import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import'./Users.css'

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Nice users</p>
            <div className="UsersArea">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;