import type { MouseEventHandler } from "react"

interface btnProps {
    onClick?: MouseEventHandler,
    text: string
}

export function Button(props: btnProps) {
    return (
        <button className='cursor-pointer hover:bg-myRed hover:text-bg py-2 px-4 rounded-xl' onClick={props.onClick}>{props.text}</button>
    )
}