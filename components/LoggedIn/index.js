import { useContext } from "react";
import Context from "../UserContext";

const LoggedIn = () => {
    const {login} = useContext(Context);
   
    const onClickLogin = async (e) => {
        const response = await fetch('/api/profile');
        const user = await response.json();
        login(user);
    }
    return (
 
           
                    <button  onClick = {onClickLogin}>
                        log in
                    </button>

    )
}
export default LoggedIn;