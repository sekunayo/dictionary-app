import { css } from "@emotion/css";
import React from "react";

const meaningViewHeadingStyles = (toggle: boolean) => css({
    display: "flex",
    alignItems: "center",
    gap: "20px",

    "& h4": {
        color: toggle ? "#fff" : "#2D2D2D",
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: "normal",
        fontFamily: "Inter"
    },
    "& span": {
        backgroundColor: "#E9E9E9",
        height: "1px",
        width: "100%"
    }
})

const meaningViewListStyles = css({
    marginLeft: "44px",

    "& li": {
        textAlign: "left",
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "24px",
        paddingLeft: "20px",
        marginBottom: "16px",
        listStyleType: "disc",
    },
    "& li::marker": {
        color: "#8F19E8",
        fontWeight: "bold"
    }
})

const meaningViewListTitleStyles = css({
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Lora",
    lineHeight: "normal",
    color: "#757575",
    margin: "40px 0px 34px 0px"
})

interface MeaningViewProps {
    partOfSpeech: string;
    definitions: any;
    toggle: boolean;
}
export const MeaningView = ({ partOfSpeech, definitions, toggle }: MeaningViewProps) => {
    return (
        <div>
            <div className={meaningViewHeadingStyles(toggle)}><h4>{partOfSpeech}</h4> <span></span></div>
            <p className={meaningViewListTitleStyles}>Meaning</p>
            <ul className={meaningViewListStyles}>
                <>
                    {
                        definitions.map((element: any, index: number) => {
                            return <li key={index + 1}>{element?.definition}</li>
                        })
                    }
                </>
            </ul>
        </div>
    )
}