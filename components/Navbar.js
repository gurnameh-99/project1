import Link from "next/link";
const Navbar = () =>{
    return (
        <nav>
            <div className="logo">
                <h1>Akshat Mohindra</h1>
            </div>
            <div className = 'link1'>
            <Link  href = "/"><a>Home</a></Link>
            <Link href = "/about"><a>About</a></Link>
            <Link href = "/blogs"><a>#talesbyAkshat</a></Link>
            <Link href = ""><a>Contact</a></Link>
            <style jsx>{`
                .link1 a{
                color: #000;
                text-decoration: none;
                font-size: 18px;
                font-weight: 500;
                }
           `}</style>
            </div>
        </nav>
    )
}
export default Navbar;