export default function MailList() {
    return (
        <div className="z-10 flex flex-col items-center justify-center w-11/12 text-white" style={{ minHeight: "calc(100vh - 131px)" }}>
            <h1 className="w-11/12 text-3xl font-extrabold xl:w-1/2">Submit Your Email Address to receive mailings on important information pertaining to John McCarthy.</h1>
            <form className="flex flex-col items-center justify-center w-11/12 mt-6 xl:w-1/2">
                <input type="text" name="email_address" size="51" className="text-black px-1 flex-1 py-1.5 rounded-md w-full my-4" />
                <div className="">
                    <input type="submit" value="Submit" name="B1" id="submit" className="text-lg px-3 py-1.5 mx-4 bg-blue-700 rounded-md font-bold" />

                </div>
                {/* <p className="flex flex-col justify-between">
                    <div className="flex items-center flex-1">
                    </div>
                    <div className="flex">
                        <input type="submit" value="Submit" name="B1" id="submit" className="text-lg px-3 py-1.5 mx-4 bg-blue-700 rounded-md font-bold" />
                        <input type="reset" value="Reset" name="B2" id="reset" className="text-lg px-3 py-1.5 bg-blue-700 rounded-md font-bold" />
                    </div>
                </p> */}
            </form>
        </div>
    )
}
