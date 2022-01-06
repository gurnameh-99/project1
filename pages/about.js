import Link from "next/link";
const Navbar = () =>{
    return (
        <nav>
            <div className="logo">
                <h1>Akshat Mohindra</h1>
            </div>
            <Link href = "/"><a  href = "/">Home</a></Link>
            <Link href = ""><a>About</a></Link>
            <Link href = "/blogs"><a>#talesbyAkshat</a></Link>
            <Link href = ""><a>Contact</a></Link>
        </nav>
    )
}
export default Navbar;