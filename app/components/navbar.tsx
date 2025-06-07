import Link from "next/link";

export default function Navbar() {
  return (
    <div>
        <nav className="bg-neutral-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">My Store</div>
            <ul className="flex space-x-4">
                <li>
                <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                </li>
                <li>
                <Link href="/products" className="text-gray-300 hover:text-white">Products</Link>
                </li>
                <li>
                <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}
