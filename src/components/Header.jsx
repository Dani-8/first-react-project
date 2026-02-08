export default function Header() {
    return (
        <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold text-white">Logo</div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
                </nav>

                <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg font-medium transition">
                    Get Started
                </button>
            </div>
        </header>
    );
}