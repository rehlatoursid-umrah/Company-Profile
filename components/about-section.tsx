import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      title: "Amanah",
      description: "Menjaga kepercayaan jamaah dan mitra dengan pelayanan yang jujur dan transparan.",
    },
    {
      title: "Legal",
      description: "Memastikan seluruh keberangkatan sesuai dengan regulasi pemerintah melalui PIHK resmi.",
    },
    {
      title: "Nyaman",
      description: "Menciptakan pengalaman ibadah yang tenang, tertib, dan berkesan.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tentang <span className="text-primary">Rehlatours</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brand travel halal berpusat di Bandung, Jawa Barat, Didirikan oleh Lulusan Universitas Al-Azhar Mesir, seorang muthowwif berpengalaman, Rehlatours.id hadir bukan hanya sebagai travel umrah, tapi sebagai mitra spiritual yang memahami perjalanan batin Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, idx) => (
            <Card key={idx} className="p-8 flex flex-col items-center text-center hover:shadow-lg transition">
              <CheckCircle className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Komitmen Kami</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Kami didukung oleh tim yang berpengalaman dalam pengelolaan umroh dan haji khusus, sehingga setiap proses
            keberangkatan jamaah dapat berjalan dengan terencana dan profesional. Mulai dari bimbingan manasik,
            pendampingan dokumen, hingga layanan selama di tanah suci, semua kami lakukan dengan penuh tanggung jawab
            agar jamaah dapat fokus beribadah tanpa khawatir pada urusan teknis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Dalam menjalankan operasionalnya, Rehlatours.id bermitra langsung dengan PIHK (Penyelenggara Ibadah Haji &
            Umroh) resmi berizin Kementerian Agama RI. Hal ini menjadi jaminan bahwa seluruh perjalanan jamaah yang kami
            fasilitasi berjalan sesuai aturan pemerintah dan terjamin legalitasnya.
          </p>
        </div>
      </div>
    </section>
  )
}
