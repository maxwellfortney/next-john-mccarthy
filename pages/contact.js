export default function Contact() {
    return (
        <div className="z-10 flex flex-col items-center justify-center w-11/12 text-white" style={{ minHeight: "calc(100vh - 131px)" }}>
            <h1 className="text-4xl font-extrabold">Contact Info</h1>
            <div className="flex mt-6 text-2xl text-white">
                <p className="mr-4 font-bold">Email: </p>
                <a className="underline" href="mailto:john.mccarthy@johnmccarthy.us">john.mccarthy@johnmccarthy.us</a>
            </div>
        </div>
    )
}
