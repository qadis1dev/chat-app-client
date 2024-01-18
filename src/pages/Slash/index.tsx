import React from "react";
import { Oval } from "react-loader-spinner";
import style from "./style";
import colors from "@/config/colors";
import { Button } from "@/components/ui/button";
import { routeToChats, routeToLogin } from "./helper";
import { useNavigate } from "react-router-dom";

//TODO: deleted the buttons and replace them with the api function later
const Slash:React.FC = () => {

    document.title = "Chat App - Loading...";
    const navigate = useNavigate();
    
    return(
        <div className={style.page}>
            <img
                src="/logo.png"
                className={style.image}
            />
            <Oval
                color={colors.primary}
                secondaryColor={colors.secondary}
                width={80}
            />
            <Button
                className={style.button}
                onClick={() => routeToLogin(navigate)}
            >
                Route to Login
            </Button>
            <Button
                className={style.button}
                onClick={() => routeToChats(navigate)}
            >
                Route to Chats
            </Button>
        </div>
    );
};

export default Slash;