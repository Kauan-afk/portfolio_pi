export function Tag({text}: {text: string}) {
    return (
        <div className='border border-myRed rounded-sm px-2 py-1'>
            <p>{text}</p>
        </div>
    )
}