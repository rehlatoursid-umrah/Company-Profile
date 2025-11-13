import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Siap Memulai Perjalanan <span className="text-secondary">Spiritual</span> Anda?
        </h2>

        <p className="text-lg opacity-95 mb-12 max-w-2xl mx-auto">
          Hubungi kami hari ini untuk mendapatkan konsultasi gratis dan informasi lebih lengkap tentang semua paket
          Umrah kami.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            <a href="https://wa.me/6281397321658" target="_blank" rel="noopener noreferrer">
              Hubungi via WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <a href="mailto:admin@rehlatours.id">Kirim Email</a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-3" />
            <p className="font-semibold mb-1">Telepon</p>
            <p className="text-sm opacity-90">+62 831-9732-1658</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-3" />
            <p className="font-semibold mb-1">Email</p>
            <p className="text-sm opacity-90">admin@rehlatours.id</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-3" />
            <p className="font-semibold mb-1">Alamat</p>
            <p className="text-sm opacity-90">
              Permata Biru RW 001 RT 027 Desa Cinunuk Kec. Cileunyi Kab. Bandung Jawa Barat
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
