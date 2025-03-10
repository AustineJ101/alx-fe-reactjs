import { useParams } from "react-router-dom";
function ProfileDetails(){

    const { user } = useParams();

    return(
        <>
            <h4>Profile Details</h4>
            <p>You are viewing {user}'s details</p>
      
        </>
    )
}
export default ProfileDetails;