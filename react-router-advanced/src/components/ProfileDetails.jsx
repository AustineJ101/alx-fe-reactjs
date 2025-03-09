import { useParams } from "react-router-dom";

function ProfileDetails(){
    const {id} = useParams();
    
    return(
        <>
            <h3>Profile Details</h3>
            <p>Details for userId: {id}</p>

        </>

    )
}

export default ProfileDetails;