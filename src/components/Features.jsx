export default function Features() {
    const features = [
        { title: "Lightning Fast", desc: "Built for speed and performance" },
        { title: "Modern Design", desc: "Clean, beautiful components" },
        { title: "Fully Responsive", desc: "Looks perfect on every device" },
        { title: "Easy to Customize", desc: "Change colors & fonts in seconds" },
    ];

    return (
        <section id="features" className="py-20 px-6 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Why choose us?</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-indigo-500/50 transition"
                        >
                            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
                            <p className="text-gray-400">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}