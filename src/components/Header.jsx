export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-gray-950/70 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo with a slight glow */}
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Logo
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-10">
                    <a href="#features" className="text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors">Features</a>
                    <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors">Pricing</a>
                    <a href="#contact" className="text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
                </nav>

                {/* Button with hover lift */}
                <button className="bg-indigo-600 hover:bg-indigo-500 hover:-translate-y-0.5 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20">
                    Get Started
                </button>
            </div>
        </header>
    );
}