import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();

    const {name, email, phone, website} = user;
    return (
        <div>
            <h2>Details About User : {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website} </p>
        </div>
    );
};

export default UserDetails;