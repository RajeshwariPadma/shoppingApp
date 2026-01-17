import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../../authentication";
import Button from "@mui/material/Button";

export const Logout = () => {

   

    return (
        <Button onClick={() => handleLogoutButton()}>
            Logout
        </Button>
    )
}