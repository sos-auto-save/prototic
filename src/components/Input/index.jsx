export const Input = ({ span, label, placeholder }) => {
    return (
        <>
            <label htmlFor={label} className="flex flex-col w-full ">
                <span className="mb-4 text-base text-label-color font-semibold">{span}</span>
                <input className="text-base px-[1rem] py-[22px] rounded-[10px] border-2 border-degrade-orange max-h-[60px]" type="text" name={label} id={label} placeholder={placeholder} />
            </label>
        </>
    )
}