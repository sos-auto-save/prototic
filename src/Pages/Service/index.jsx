import { Header } from "../../components/Header"

export const Service = () => {
    const usuario = {
        name: "Fábio",
        email: 'test@example.com',
        avatar: 'https://s3-alpha-sig.figma.com/img/0f9b/81fa/21460d39cd98ccca0d3fa906d5718aa3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wm8hV-Z8i0Fnh0AmkEpa-KCR8yFYZHdVnQKyhNZ~7dcn6VsscD9dVEyLo2te3Rab29haPlGfCrgQ204XgOJy3wIOnWipfZfedzJyzFinri49eM~8n1sxFSp8sorS-VzGX8KoyIXw2U4cUQOAWzIHmD1io3Hw7dU8X~X21v-q3OlqZzDnYW6t4h5j8YXgihwWZ6eCoK9kuYbhiZ5OHWaWbtVcH~~kG8p5-4q2Ns9LOvB-co1yxmX70YpyXdiYRlwMsDxdERgVp~uv3fPGFnEO6LnptNJckZbGRmi2wA0DfydaasnhsHf3AuFvvSW261LBzX1gPHldTNTOcoQvtWvaCw__'
    }
    return (
        <>
            <Header usuario={usuario} />
            <form className="flex flex-col items-center justify-center h-screen gap-4 bg-background px-[29px]">
                <h1 className="text-3xl font-semibold text-zinc-50">Agende seu serviço</h1>
                <label htmlFor="data" className="flex flex-col w-full ">
                    <span className="mb-4 text-base text-label-color font-semibold">Data:</span>
                    <input className="text-base px-[1rem] py-[22px] rounded-[10px] border-2 border-degrade-orange max-h-[60px]" type="text" name="data" id="data" placeholder="Selecione uma data" />
                </label>
                <label htmlFor="hora" className="flex flex-col w-full">
                    <span className="mb-4 text-base text-label-color font-semibold">Hora:</span>
                    <input className="text-base px-[1rem] py-[22px] rounded-[10px] border-2 border-degrade-orange max-h-[60px]" type="text" name="hora" id="hora" placeholder="Selecione uma horário" />
                </label>
                <label htmlFor="localizacao" className="flex flex-col w-full">
                    <span className="mb-4 text-base text-label-color font-semibold">Localização:</span>
                    <input className="text-base px-[1rem] py-[22px] rounded-[10px] border-2 border-degrade-orange max-h-[60px]" type="text" name="localizacao" id="localizacao" placeholder="Defina a localização" />
                </label>
                <button className="flex items-center justify-center w-full px-[1rem] py-[22px] font-bold rounded-[10px] max-h-[60px] bg-degrade-orange text-zinc-50">Confirmar agendamento</button>

            </form>

        </>
    )
}