import * as z from "zod";

export const formSchema = z.object({
    email: z.string().min(
        1,
        "Email is required"
    ).email(
        "Wrong email format"
    ),
    password: z.string().min(
        6,
        "Passowrd must be at least 6 characters"
    ).max(
        64,
        "Password can not excced 64 characters"
    )
});

export const login = async (email: string, password: string) => {
    
};

export const pageStatusCheck = async () => {

};

export const googleLogin = async() => {
    
};