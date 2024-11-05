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
            <form className="flex flex-col items-center justify-center h-screen">
                <h1>Agende seu serviço</h1>
            </form>

        </>
    )
}