import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps } from "class-variance-authority";
declare const toggleVariants: (props?: {
    variant?: "outline" | "default";
    size?: "lg" | "sm" | "default";
} & import("class-variance-authority/dist/types").ClassProp) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "outline" | "default";
    size?: "lg" | "sm" | "default";
} & import("class-variance-authority/dist/types").ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Toggle, toggleVariants };
