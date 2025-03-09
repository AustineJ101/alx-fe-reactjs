import { useParams } from "react-router-dom";

function ProfileDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Profile Details {id ? `for User ${id}`: ""}</h2>
            <p>Details about the user will be shown here.</p>
        </div>
    );
}

export default ProfileDetails;
