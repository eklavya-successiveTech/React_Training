import Usercard from "../components/userCard";

const UserCardPage = () =>{
    return(
        <div>
            <Usercard
            name="Alice" 
            email="abc@gmail.com" 
            avatarUrl="https://randomuser.me/api/portraits/women/68.jpg" 
            />
            <Usercard
            name="Emily" 
            email="emily@gmail.com" 
            avatarUrl="https://randomuser.me/api/portraits/women/44.jpg" 
            />
            <Usercard
            name="Jhon" 
            email="jhon@gmail.com" 
            avatarUrl="https://randomuser.me/api/portraits/men/36.jpg" 
            />
        </div>
        
    );
}
export default UserCardPage;