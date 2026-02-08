export default function Footer() {
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

    return (
        <footer className="border-t border-gray-800 py-12 px-6 bg-gray-950">
            <div className="max-w-7xl mx-auto text-center text-gray-500">
                <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
            </div>
            
            <div className="mt-2 text-sm text-center text-gray-400 hover:text-gray-300 transition-colors">
                Contact us at: <span className="hover:text-indigo-400 transition-colors cursor-pointer">{contactEmail}</span> 
            </div>

        </footer>
    );
}