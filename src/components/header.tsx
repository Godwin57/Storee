import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"

function Header() {
    return (
        <header className="text-dark text-xl font-bold flex items-center justify-between py-4 px-10 
            border-b-4 border-b-gray-200">
            <Link href={'/'}>
                <h1 className="text-2xl">Shoppeet</h1>
            </Link>
            
            <ul className="flex space-x-10">
                <Link href={'#'} className="hover:border-b-4 hover:border-b-black hover:duration-200">
                    Home
                </Link>
                <Link href={'#'} className="hover:border-b-4 hover:border-b-black hover:duration-200">
                    Products
                </Link>
                <Link href={'#'} className="hover:border-b-4 hover:border-b-black hover:duration-200">
                    Categories
                </Link>
            </ul>

            <div className="flex items-center space-x-1 hover:border-4 hover:border-black cursor-pointer 
                p-2 hover:rounded-lg">
                <FaShoppingCart />
                <span>0</span>
                </div>
        </header>
    );
}

export default Header;