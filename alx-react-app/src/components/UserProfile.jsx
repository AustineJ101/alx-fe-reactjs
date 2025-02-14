export default function UserProfile(props){
    const {name, age, bio} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{bio}</p>
        </div>
    )
}