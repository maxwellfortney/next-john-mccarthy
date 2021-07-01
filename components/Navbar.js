import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-11/12 mt-4" style={{ height: "115px" }}>
            <div className="flex"></div>
            <div className="z-10 flex items-center text-xl font-extrabold text-white lg:text-2xl">
                <Link href="/#About" passHref>
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>About</a>
                </Link>
                <Link href="/#News" passHref>
                    <a className="mr-2 transition-opacity hover:opacity-70" style={{ textShadow: "rgb(0 0 0 / 35%) 0px 5px 15px" }}>News</a>
                </Link>
                <Link href="/#Innovation" passHref>
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

export default Navbar;