import { useContext } from "react"
import Context from "../UserContext"

const LoggedOut = () => {
    const {logout} = useContext(Context);
    const onClickLogout = async () => {
        logout();
    }
    return (
        <button onClick ={onClickLogout}>Sign Out</button>
    )
}
export default LoggedOut;