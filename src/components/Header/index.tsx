import React from "react";
import { css } from '@emotion/css'

import { ReactComponent as Moon } from "../../common/assets/icons/icon-moon.svg"
import { ReactComponent as Logo } from "../../common/assets/icons/logo.svg"
import { ToggleButton } from "../ToggleButton";

const headerStyles = (toggle: boolean) => css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "58px",

    "& svg path": {
        stroke: toggle ? "#A445ED" : "#838383",
    }
})

const headerToggleStyles = css({
    display: "flex",
    alignItems: "center",
    gap: "20px"
})

interface ToggleButtonProps {
    handleToggle: () => void;
    toggle: boolean;
}

export const Header = ({ toggle, handleToggle }: ToggleButtonProps) => {
    return (
        <div className={headerStyles(toggle)}>
            <Logo />
            <div className={headerToggleStyles}>
                <ToggleButton toggle={toggle} handleToggle={handleToggle} />
                <Moon />
            </div>
        </div>
    )
}