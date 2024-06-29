import React from "react"

export const DefaultBtn = ({ btnText, btnType, extras }) => {
    return (
        <button
            type={btnType}
            className={`${extras} shadow-outer text-base font-bold tracking-space90 text-black border border-black bg-green uppercase py-4 px-12`}>
            {btnText}
        </button>
    )
} 