import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-5 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Ka'bah Image Placeholder */}
        <div className="mb-8">
          <img
            src="/kaaba-holy-mosque-spiritual.jpg"
            alt="Ka'bah Holy Mosque"
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-secondary"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Company Profile <span className="text-Rehlatours.id">Umrah</span> 
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Rehlatours.id adalah brand travel halal yang berkomitmen menghadirkan perjalanan ibadah umroh yang amanah,
          mudah, dan terpercaya. Bersama tim berpengalaman, kami siap memandu perjalanan suci Anda dengan penuh tanggung
          jawab.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://wa.me/6281397321658" target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis via WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary/5 bg-transparent"
          >
            <a href="#packages">Lihat Paket</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
