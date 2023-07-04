import { css } from "@emotion/css"
import React, { ChangeEvent, FormEvent } from "react"
import { ReactComponent as SearchIcon } from "../../common/assets/icons/icon-search.svg"

const searchStyles = (toggle: boolean) => css({
    width: "100%",
    height: "64px",
    borderRadius: "16px",
    backgroundColor: toggle ? "#1F1F1F" : "#F4F4F4",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 24px",
    marginTop: "51px",

    "& input": {
        color: toggle ? "#fff" : "#2D2D2D",
        fontSize: "20px",
        fontFamily: "Lora",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
    },

    "& input::placeholder": {
        color: "lightgray"
    },

    "& button": {
        cursor: "pointer"
    }
})

interface SearchProps {
    toggle: boolean;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export const Search = ({ toggle, handleSubmit, value, handleChange }: SearchProps) => {
    return (
        <form onSubmit={(event) => handleSubmit(event)} className={searchStyles(toggle)}>
            <input value={value} onChange={(event) => handleChange(event)} type="text" placeholder="Search anything here..." />
            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}