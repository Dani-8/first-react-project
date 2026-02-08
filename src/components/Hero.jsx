export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 text-center">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                    The fastest way to ship <span className="text-indigo-500">beautiful</span> products
                </h1>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Create stunning landing pages, dashboards, and apps in minutes — not weeks.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl font-semibold text-lg transition">
                        Start for free
                    </button>
                    <button className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold text-lg transition">
                        Watch demo
                    </button>
                </div>
            </div>
        </section>
    );
}