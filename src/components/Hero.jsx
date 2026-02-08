export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />

            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    The fastest way to ship <span className="text-indigo-500">beautiful</span> products
                </h1>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Create stunning landing pages, dashboards, and apps in minutes — not weeks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-indigo-600 hover:bg-indigo-500 hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)] px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                        Start for free
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                        Watch demo
                    </button>
                </div>
            </div>
        </section>
    );
}