"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("धन्यवाद! हम जल्द आपसे संपर्क करेंगे।\n(Form backend ready hai)");
  };

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 text-slate-800 max-w-xl mx-auto shadow-xl">
      <h3 className="text-xl font-bold text-[#0a2540] mb-6 text-center">
        सेवा के लिए संपर्क करें
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            नाम *
          </label>
          <input
            type="text"
            required
            placeholder="आपका नाम"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            मोबाइल नंबर *
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            placeholder="10 अंकों का नंबर"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            आवश्यक सेवा
          </label>
          <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option value="">सेवा चुनें</option>
            <option>Crane Rental</option>
            <option>Heavy Lifting</option>
            <option>Construction Support</option>
            <option>Emergency Service</option>
            <option>अन्य</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1">
            मैसेज
          </label>
          <textarea
            rows={3}
            placeholder="अपनी जरूरत बताएं..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition"
        >
          सेवा के लिए संपर्क करें
        </button>
      </form>
    </div>
  );
}
