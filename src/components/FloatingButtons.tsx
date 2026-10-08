export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <a
        href="tel:9838770115"
        className="floating-btn bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl transition"
        aria-label="Call"
      >
        📞
      </a>
      <a
        href="https://wa.me/919838770115"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn bg-[#25D366] hover:bg-[#1ebe57] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl transition"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
