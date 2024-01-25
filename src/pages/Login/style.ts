import clsx from "clsx";

export default {
    page: clsx("flex flex-col w-full h-screen items-center justify-center space-y-10 bg-gradient-to-r from-primary to-secondary"),
    box: clsx("flex flex-col bg-white border border-primary px-4 py-4 shadow-lg rounded-lg w-72 items-center"),
    box_title: clsx("text-xl font-medium mb-4 mt-2"),
    fields_container: clsx("w-auto flex flex-col space-y-2 mb-4"),
    field_input: clsx("border-x-0 border-t-0 border-solid border-primary rounded-none focus-visible:ring-0 w-56 ps-0"),
    field_message: clsx("w-56 text-xs"),
    login_button: clsx("w-56 bg-primary hover:bg-accent text-base mb-4 disabled:opacity-70"),
    loading_spinner: clsx("me-3"),
    google_login_button: clsx("w-56 border-primary hover:border-accent hover:bg-accent hover:text-white mb-2"),
    google_icon: clsx("size-4 me-2"),
    links_button: clsx("text-primary")
};