import {ReactNode} from "react";
type ButtonProps={
    children: ReactNode;
    variant?: "primary" | "secondary";
};

export const  Button  =({ children, variant = "primary"}: ButtonProps) =>{
    const base = "px-5  py-2 rounded-full fond-madium transition";
    const variants ={
        primary: "bg-white text-black hover:bg-gray-200 font-bold",
        secondary: "bg-blue-600 text-white hover:bg-blue-700 font-bold",
    }
    return <button className={`${base} ${variants[variant]}`}>{children}</button>
};