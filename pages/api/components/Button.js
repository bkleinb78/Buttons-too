import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
  const {
    color,
    className,
    disabled,
    textColor,
    leftIcon,
    rightIcon,
    clear,
    sm,
    md,
    lg,
    xlg,
    xxlg,
    buttonSize,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      disabled={props.disabled}
      className={`
      border 
      border-${color ? color : "blue"}-500  
      bg-${color ? color : "blue-500"}
      text-${textColor ?? "white"}-600 
      rounded-[5px] 
       focus:outline-none 
       focus:ring-4 
       ring-${color ? color : "blue"}-300
       items-center 
       ${
         props.disabled
           ? "opacity-50 cursor-not-allowed pointer-events-none"
           : `hover:bg-${color ? color : "blue"}-700`
       } 
       hover:bg-${color ? color : "blue"}-700
       ${sm ? "py-2 px-3.5 text-sm" : ""}
       ${md ? "py-2.5 px-4 text-sm" : ""}
       ${lg ? "py-2.5 px-[18px] text-base" : ""}
       ${xlg ? "py-3 px-5 texsmt-base" : ""}
       ${xxlg ? "py-4 px-7 text-lg" : ""}
       ${clear ? "border-0 focus::ring-0" : ""}
       ${props.className ?? ""}`}
    >
      {leftIcon ? (
        <FontAwesomeIcon
          className={props.children ? "pr-2" : ""}
          icon={leftIcon}
        />
      ) : null}
      {props.children}
      {rightIcon ? (
        <FontAwesomeIcon
          className={props.children ? "pl-2" : ""}
          icon={rightIcon}
        />
      ) : null}
    </button>
  );
};

export default Button;
