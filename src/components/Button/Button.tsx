import { ComponentProps } from "react";
import css from "./Button.module.scss";

export function Button({ children, ...props }: ComponentProps<"button">) {
  return <button {...props}>{children}</button>
}
