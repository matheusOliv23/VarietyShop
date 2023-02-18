import React, { ButtonHTMLAttributes } from "react"
import { buttonStyles, buttonVariant } from "./styles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: "PRIMARY" | "SECONDARY" | "BLACK"
  className?: string
}

const Button = ({
  children,
  variant = "PRIMARY",
  className = "",
  onClick,
  ...rest
}: ButtonProps) => {
  const classNames = `${buttonStyles} ${buttonVariant[variant]} ${className}`
  return (
    <button onClick={onClick} className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default Button
