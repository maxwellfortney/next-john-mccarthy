/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center w-11/12 mt-10 text-white">
            <p className="font-semibold">
                By authority of John Patrick Kudel, PA, Treasurer, Friends of John McCarthy Campaign for the Office of Montgomery County, Maryland, State's Attorney
            </p>
            <p>Questions, email John Patrick Kudel, PA, Treasurer, at jpkudel@karplawfirm.net</p>
            <p>Friends of John McCarthy Campaign Address: 2273 Research Blvd. Suite 200 Rockville MD 20850</p>

            <div className="flex justify-between mt-4 mb-2 text-xl font-extrabold">
                <Link href="#About">
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>About</a>
                </Link>
                <Link href="#News">
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>News</a>
                </Link>
                <Link href="#Innovation">
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>Innovation</a>
                </Link>
                <Link href="/maillist">
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>Mail List</a>
                </Link>
                <Link href="/volunteer">
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>Volunteer</a>
                </Link>
                <Link href="/donate">
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>Donate</a>
                </Link>
                <Link href="/contact">
                    <a className="transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>Contact</a>
                </Link>
            </div>
        </div>
    )
}

export default Footer;