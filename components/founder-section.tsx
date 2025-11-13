export default function FounderSection() {
  return (
    <section id="founder" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/habib-arifin-makhtum-spiritual-leader.jpg"
              alt="Habib Arifin Makhtum"
              className="w-80 h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Tentang <span className="text-secondary">Founder</span>
            </h2>

            <p className="text-lg leading-relaxed mb-6 opacity-95">
              Rehlatours.id dipimpin oleh tim berpengalaman yang berdedikasi untuk membimbing umat Islam dalam
              melaksanakan ibadah Umrah dengan khusyu dan berkesan. Dengan pengalaman bertahun-tahun di industri
              perjalanan ibadah, kami telah memimpin ribuan jamaah untuk mencapai impian spiritual mereka.
            </p>

            <p className="text-lg leading-relaxed mb-6 opacity-95">
              Visi kami adalah membuat setiap jamaah dapat merasakan kedekatan dengan Allah di tanah suci dengan nyaman,
              aman, dan dalam suasana yang penuh berkah. Dedikasi terhadap pelayanan terbaik menjadi fondasi berdirinya
              Rehlatours, dan komitmen ini tercermin dalam setiap aspek layanan kami.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm opacity-90">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-sm opacity-90">Jamaah Terpuaskan</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-90">Rekomendasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
