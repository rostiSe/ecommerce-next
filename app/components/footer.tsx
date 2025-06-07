export default function Footer() {
  return (
    <div>
        <footer className="bg-neutral-800 text-gray-300 py-4 mt-auto">
            <div className="container mx-auto text-center">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My Store. All rights reserved.
            </p>
            <p className="text-xs mt-2">
                Made with ❤️ using Next.js and Tailwind CSS
            </p>
            </div>
        </footer>
    </div>
  )
}
