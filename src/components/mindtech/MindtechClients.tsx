"use client";

const clientLogos = [
  { name: "Kinko", src: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/kink.png" },
  { name: "Garreth", src: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/Garret.png" },
  { name: "Square", src: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/square-pixel.png" },
  { name: "Domo", src: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/Domoo.png" },
  { name: "Parka", src: "https://kit.baliniz.com/mindtech/wp-content/uploads/sites/8/2021/04/Parka.png" },
];

export default function MindtechClients() {
  // Duplicate for seamless infinite marquee
  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-white border-b border-[#E6E6E6]/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#272B36]">
          Trusted By The World’s Best Organizations
        </h3>
      </div>

      {/* Infinite Scrolling Logo Ticker */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="animate-infinite-scroll flex items-center gap-16 py-4">
          {repeatedLogos.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-12 w-auto max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
