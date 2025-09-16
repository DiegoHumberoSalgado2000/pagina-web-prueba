import {ReactNode} from "react";
type ButtonProps={
    children: ReactNode;
    variant?: "primary" | "secondary" | "gray";
    className?: string;
};

export const  Button  =({ children, variant = "primary", className = ""}: ButtonProps) =>{
    const base = "rounded-full fond-madium transition";
    const variants ={
        primary: "bg-white text-black hover:bg-gray-200 font-bold",
        secondary: "bg-blue-600 text-white hover:bg-blue-700 font-bold",
        gray: "bg-gray-200 text-blue-500 hover:bg-gray-300 font-bold",
    };
    
    return <button className={`${base} ${variants[variant]} ${className}`}>{children}</button>
};
