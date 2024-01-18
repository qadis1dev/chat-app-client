import { NavigateFunction } from "react-router-dom";

export const checkAuthState = async() => {};

//TODO: to be deleted at the end
export const routeToChats = (navigate: NavigateFunction) => {
    navigate("/chats");
};

//TODO: to be deleted at the end
export const routeToLogin = (navigate: NavigateFunction) => {
    navigate("/login");
};