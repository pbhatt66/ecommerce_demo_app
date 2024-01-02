"use client";

import { useState, ComponentProps } from "react";

type FormSubmitButtonProps = {
    children: React.ReactNode,
    className?: string,
    // nSubmit: () => Promise<any>
} & ComponentProps<"button">

export default function FormSubmitButton({
    // onSubmit,
    children,
    className,
    ...props
} : FormSubmitButtonProps) {
    const [pending, setPending] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        // event.preventDefault();
        setPending(true);
        try {
            await onSubmit();
        } catch (error) {
            console.error(error);
        } finally {
            setPending(false);
        }
    }

    return (
        <button
        {...props}
        className={`btn btn-primary ${className}`}
        type = "submit"
        disabled = {pending}
        // onClick = {handleSubmit}
        >
            {pending && <span className="loading loading-spinner" />}
            {children}
        </button>
    )
}