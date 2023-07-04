import { css } from '@emotion/css'
import React from 'react'

const toggleButtonStyles = (toggle: boolean) => css({
    width: "40px",
    height: "20px",
    backgroundColor: toggle ? "#A445ED" : "#757575",
    display: "flex",
    justifyContent: toggle ? "flex-end" : "flex-start",
    alignItems: "center",
    transition: "all 0.5s ease-in-out",
    padding: "0px 4px",
    borderRadius: "10px"

})

const toggleButtonInnerStyles = css({
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    backgroundColor: "#fff"

})

interface ToggleButtonProps {
    handleToggle: () => void;
    toggle: boolean;
}


export const ToggleButton = ({ handleToggle, toggle }: ToggleButtonProps) => {


    return (
        <button type='button' onClick={handleToggle} className={toggleButtonStyles(toggle)}>
            <div className={toggleButtonInnerStyles}></div>
        </button>
    )
}