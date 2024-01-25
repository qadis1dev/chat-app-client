import React, { useState } from "react";
import style from "./style";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Oval } from "react-loader-spinner";
import { useToast } from "@/components/ui/use-toast";

import {
    formSchema
} from "./helper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import colors from "@/config/colors";

const Login:React.FC = () => {

    document.title = "Chat App - Login";

    //? hooks
    const [initialLoading, setInitialLoading] = useState(true);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    //? Submit function
    const onSubmit = async(value: z.infer<typeof formSchema>) => {
        console.log("Submit");
    };

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
                <div className={style.page}>
                    <div className={style.box}>
                        <h1 className={style.box_title}>Login to your account</h1>
                        <div className={style.fields_container}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className={style.field_input}
                                                type="email"
                                                placeholder="Email"
                                                {...field}
                                                disabled={loading}
                                            />
                                        </FormControl>
                                        <FormMessage className={style.field_message} />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                className={style.field_input}
                                                type="password"
                                                placeholder="Password"
                                                {...field}
                                                disabled={loading}
                                            />
                                        </FormControl>
                                        <FormMessage className={style.field_message} />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            className={style.login_button}
                            type="submit"
                            disabled={loading}
                        >
                            {
                                loading
                                ? <>
                                    <Oval
                                        color="#FFFFFF"
                                        secondaryColor={colors.secondary}
                                        width={20}
                                        strokeWidth={4}
                                        wrapperClass={style.loading_spinner}
                                    />
                                    Loading
                                </>
                                : <>Login</>
                            }
                        </Button>
                        <Button
                            className={style.google_login_button}
                            type="button"
                            variant="outline"
                        >
                            Login with Google
                        </Button>
                        <Button
                            className={style.links_button}
                            type="button"
                            variant="link"
                        >
                            Create new account
                        </Button>
                        <Button
                            className={style.links_button}
                            type="button"
                            variant="link"
                        >
                            Forgot password? Click here
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default Login;