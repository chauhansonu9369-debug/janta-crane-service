import Header from "@/components/Header";
import FloatingButtons from "@/components/FloatingButtons";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const services = [
    { icon: "🏗️", title: "Crane Rental", desc: "जरूरत के अनुसार क्रेन सेवा उपलब्ध।" },
    { icon: "🏋️", title: "Heavy Lifting", desc: "भारी सामान और उपकरण उठाने के लिए क्रेन सहायता।" },
    { icon: "🏢", title: "Construction Support", desc: "निर्माण कार्यों के लिए क्रेन सेवा।" },
    { icon: "⚙️", title: "Industrial Crane Service", desc: "औद्योगिक और भारी कार्यों के लिए क्रेन सहायता।" },
    { icon: "🚨", title: "Emergency Crane Service", desc: "जरूरत के समय 24 घंटे सेवा उपलब्ध।" },
    { icon: "📍", title: "Local Crane Service", desc: "स्थानीय क्षेत्र में सुविधाजनक क्रेन सेवा।" },
  ];

  const whyUs = [
    { icon: "🕐", text: "24 घंटे सेवा उपलब्ध" },
    { icon: "📞", text: "आसान Call & WhatsApp संपर्क" },
    { icon: "📍", text: "स्थानीय क्षेत्र में सेवा" },
    { icon: "💪", text: "भारी कार्यों के लिए क्रेन सहायता" },
    { icon: "⚡", text: "तेज संपर्क" },
    { icon: "🤝", text: "ग्राहक-केंद्रित सेवा" },
  ];

  return (
    <>
      <Header />
      <FloatingButtons />

      <main className="bg-[#0b1120]">
        {/* ================= HERO - Full Background Image ================= */}
        <section
          id="home"
          className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
        >
          {/* Full Crane Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: `url('/crane.png')`,
            }}
          ></div>
          
          {/* Light Overlay (taaki image clearly dikhe + text readable rahe) */}
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-transparent to-[#0b1120]/40"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10">
            <div className="text-center text-white max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-500/30 text-amber-200 px-5 py-2 rounded-full text-sm font-semibold mb-7 border border-amber-400/60 backdrop-blur-sm">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                24 घंटे उपलब्ध
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                जनता क्रेन सर्विस
              </h1>

              <p className="text-xl sm:text-2xl text-sky-200 font-semibold mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                24 घंटे क्रेन सेवा उपलब्ध है
              </p>

              <p className="text-base sm:text-lg text-white/95 mb-10 max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                भरोसेमंद क्रेन सेवा और भारी सामान उठाने के लिए प्रोफेशनल सहायता।
              </p>

              {/* Call + WhatsApp Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9838770115"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-9 py-4 rounded-full font-bold text-lg shadow-xl shadow-black/40 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919838770115"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-9 py-4 rounded-full font-bold text-lg shadow-xl shadow-black/40 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  💬 WhatsApp
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-5 text-sm text-white/90 drop-shadow">
                <a href="tel:9838770115" className="hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-400">📞</span> 9838770115
                </a>
                <a href="tel:8971953802" className="hover:text-amber-300 transition flex items-center gap-1.5">
                  <span className="text-amber-400">📞</span> 8971953802
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2744] to-[#0b1120]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">हमारी सेवाएं</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group bg-[#132337]/80 backdrop-blur-sm rounded-2xl p-6 border border-sky-900/50 hover:border-amber-500/40 hover:bg-[#1a2d45] transition-all duration-300"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a2e] via-[#0f2744] to-[#163a5f]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-3xl rounded-full"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">हमें क्यों चुनें?</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-amber-500/30 hover:bg-white/10 transition-all"
                >
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <span className="font-medium text-white/90">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 24 HOUR BANNER ================= */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600"></div>
          
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">24 घंटे सेवा उपलब्ध है</h2>
            <p className="text-lg mb-8 text-white/90">क्रेन सेवा की आवश्यकता होने पर हमसे संपर्क करें।</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9838770115"
                className="bg-white text-orange-600 hover:bg-slate-100 px-8 py-3.5 rounded-full font-bold transition shadow-lg active:scale-95"
              >
                📞 अभी कॉल करें
              </a>
              <a
                href="https://wa.me/919838770115"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0b1120] hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition shadow-lg active:scale-95"
              >
                💬 WhatsApp करें
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] to-[#0f1c2e]"></div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">जनता क्रेन सर्विस के बारे में</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8"></div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              जनता क्रेन सर्विस भारी सामान उठाने, निर्माण कार्यों और औद्योगिक जरूरतों के लिए भरोसेमंद क्रेन सेवा प्रदान करता है। हम स्थानीय क्षेत्र में 24 घंटे उपलब्ध हैं।
            </p>

            <div className="inline-block bg-[#132337] rounded-2xl px-8 py-5 border border-sky-900/50">
              <p className="text-slate-400 text-sm mb-1">संपर्क व्यक्ति</p>
              <p className="text-xl font-bold text-amber-400">प्रो. पन्ने लाल</p>
            </div>
          </div>
        </section>

        {/* ================= SERVICE AREA ================= */}
        <section id="area" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c2e] to-[#0b1120]"></div>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">हमारी सेवा का क्षेत्र</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="bg-[#132337]/80 backdrop-blur rounded-2xl p-7 border border-sky-900/40 space-y-4">
              {[
                "नानपारा बाईपास",
                "लक्ष्मीपुर रोड",
                "मिहींपुरवा (कड़ुवा मोड़)",
                "समसा तहरहर चौराहा",
                "बहराइच",
              ].map((place, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200">
                  <span className="text-amber-400 text-lg">📍</span>
                  <span className={i === 4 ? "font-semibold text-white" : ""}>{place}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section id="gallery" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] to-[#0f1c2e]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">गैलरी</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
              <p className="text-slate-400 mt-4 text-sm">हमारे क्रेन और भारी उपकरण</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: "🏗️", label: "Mobile Crane" },
                { emoji: "🏭", label: "Industrial Lift" },
                { emoji: "🚧", label: "Construction" },
                { emoji: "⚙️", label: "Heavy Equipment" },
                { emoji: "🚛", label: "Transport" },
                { emoji: "🔨", label: "Lifting Work" },
                { emoji: "🏢", label: "Building Work" },
                { emoji: "💪", label: "Heavy Duty" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square bg-[#132337] rounded-2xl flex flex-col items-center justify-center border border-sky-900/40 hover:border-amber-500/40 hover:bg-[#1a2d45] transition-all duration-300"
                >
                  <span className="text-4xl sm:text-5xl mb-2">{item.emoji}</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-400">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-20 md:py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c2e] to-[#0b1120]"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">संपर्क करें</h2>
              <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-md mx-auto">
              <a
                href="tel:9838770115"
                className="bg-[#132337] hover:bg-[#1a2d45] rounded-2xl p-5 text-center transition border border-sky-900/50 hover:border-amber-500/40"
              >
                <div className="text-2xl mb-2">📞</div>
                <div className="font-bold text-white">9838770115</div>
              </a>
              <a
                href="tel:8971953802"
                className="bg-[#132337] hover:bg-[#1a2d45] rounded-2xl p-5 text-center transition border border-sky-900/50 hover:border-amber-500/40"
              >
                <div className="text-2xl mb-2">📞</div>
                <div className="font-bold text-white">8971953802</div>
              </a>
            </div>

            <div className="text-center mb-12">
              <a
                href="https://wa.me/919838770115"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-green-500/20 active:scale-95"
              >
                💬 WhatsApp पर मैसेज करें
              </a>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="pt-12 pb-8 bg-[#060d18] border-t border-sky-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">जनता क्रेन सर्विस</h3>
              <p className="text-sky-400 text-sm mb-3">24 घंटे क्रेन सेवा उपलब्ध है</p>
              <p className="text-slate-500 text-sm">प्रो. पन्ने लाल</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-amber-400">संपर्क</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="tel:9838770115" className="block hover:text-amber-300">📞 9838770115</a>
                <a href="tel:8971953802" className="block hover:text-amber-300">📞 8971953802</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-amber-400">पता</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                नानपारा बाईपास,<br />
                लक्ष्मीपुर रोड,<br />
                मिहींपुरवा (कड़ुवा मोड़),<br />
                समसा तहरहर चौराहा, बहराइच
              </p>
            </div>
          </div>

          <div className="border-t border-sky-950 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>© 2026 जनता क्रेन सर्विस. All Rights Reserved.</p>
            <div className="flex gap-5">
              <a href="#home" className="hover:text-slate-300">होम</a>
              <a href="#services" className="hover:text-slate-300">सेवाएं</a>
              <a href="#contact" className="hover:text-slate-300">संपर्क</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
