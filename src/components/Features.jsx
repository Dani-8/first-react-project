import { Zap, Layout, Smartphone, Palette } from "lucide-react"; // npm i lucide-react

export default function Features() {
    const features = [
        { title: "Lightning Fast", desc: "Built for speed and performance", icon: <Zap className="text-indigo-400" /> },
        { title: "Modern Design", desc: "Clean, beautiful components", icon: <Layout className="text-indigo-400" /> },
        { title: "Fully Responsive", desc: "Looks perfect on every device", icon: <Smartphone className="text-indigo-400" /> },
        { title: "Easy to Customize", desc: "Change colors & fonts in seconds", icon: <Palette className="text-indigo-400" /> },
    ];

    return (
        <section id="features" className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why choose us?</h2>
                    <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <div key={i} className="group p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-white/5 hover:border-indigo-500/50 transition-all duration-300">
                            <div className="mb-4 p-3 bg-indigo-500/10 w-fit rounded-lg group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}