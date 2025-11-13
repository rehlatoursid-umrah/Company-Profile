export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Rehlatours.id</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Travel halal yang berkomitmen menghadirkan perjalanan ibadah umroh yang amanah, mudah, dan terpercaya bagi
              seluruh umat Islam Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#packages" className="text-background/80 hover:text-background transition">
                  Paket Umrah
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-background transition">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#pesantren" className="text-background/80 hover:text-background transition">
                  Kemitraan Pesantren
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">
                <strong>WhatsApp:</strong> +62 831-9732-1658
              </li>
              <li className="text-background/80">
                <strong>Email:</strong> admin@rehlatours.id
              </li>
              <li className="text-background/80">
                <strong>Lokasi:</strong> Permata Biru, Bandung, Jawa Barat
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>
            &copy; 2025 Rehlatours.id. Semua hak cipta dilindungi. Bersama Pesantren, Mewujudkan Perjalanan Suci yang
            Mudah & Aman.
          </p>
        </div>
      </div>
    </footer>
  )
}
