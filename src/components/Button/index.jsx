export const Button = ({ bgcolor, bghover, type, placeholder }) => {
    return (
        <>
            <button type={type} className={`flex items-center justify-center w-full px-[1rem] py-[22px] font-bold rounded-[10px] max-h-[60px] text-zinc-50 ${bgcolor} ${bghover && `hover:${bghover}`} `}>{placeholder}</button>
        </>
    )
}