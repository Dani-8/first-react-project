export default function Footer() {
    return (
        <footer className="border-t border-gray-800 py-12 px-6 bg-gray-950">
            <div className="max-w-7xl mx-auto text-center text-gray-500">
                <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
            </div>
        </footer>
    );
}