import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Heart } from "lucide-react"

export default function PesantrenPartnershipSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Pusat Pendidikan & Dakwah",
      description:
        "Pesantren menjadi tempat lahirnya ilmu, akhlak, dan dakwah yang membawa manfaat luas bagi masyarakat.",
    },
    {
      icon: TrendingUp,
      title: "Basis Jamaah yang Kuat",
      description:
        "Dengan santri, wali santri, alumni, serta simpatisan, pesantren memiliki jaringan yang potensial untuk keberangkatan ibadah umroh.",
    },
    {
      icon: Heart,
      title: "Tingkat Kepercayaan Tinggi",
      description:
        "Pesantren dipandang sebagai lembaga yang amanah, sehingga jamaah merasa lebih tenang dengan rekomendasi pesantren.",
    },
  ]

  return (
    <section id="pesantren" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Kerjasama <span className="text-primary">Pesantren</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bersama Pesantren, Mewujudkan Perjalanan Suci yang Mudah & Aman
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <Card key={idx} className="p-8 hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Commission Schema */}
        <Card className="p-8 mb-12 bg-background border-secondary/50">
          <h3 className="text-2xl font-bold text-foreground mb-6">Skema Komisi untuk Pesantren</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Kami percaya, pesantren tidak hanya berperan sebagai pusat ilmu dan dakwah, tetapi juga sebagai penggerak
            keberkahan bagi umat. Oleh karena itu, Rehlatours.id menyiapkan skema insentif yang sederhana, transparan,
            dan saling menguntungkan.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-primary font-bold mb-2">Umrah Reguler</p>
              <p className="text-3xl font-bold text-foreground">Rp 1.000.000</p>
              <p className="text-sm text-muted-foreground">per jamaah</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-secondary font-bold mb-2">Umrah Plus (Turki, Mesir, Jordan)</p>
              <p className="text-3xl font-bold text-foreground">Rp 1.500.000</p>
              <p className="text-sm text-muted-foreground">per jamaah</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="font-semibold text-foreground mb-2">Contoh Simulasi:</p>
            <p className="text-muted-foreground">
              Apabila sebuah pesantren berhasil memberangkatkan 10 jamaah Umrah Reguler, maka pesantren akan menerima
              komisi sebesar <span className="font-bold text-primary">Rp 10 Juta</span>. Semakin banyak jamaah yang
              berangkat melalui program ini, semakin besar pula manfaat yang kembali untuk mendukung kegiatan dakwah,
              pendidikan, dan pembangunan pesantren.
            </p>
          </div>
        </Card>

        {/* Partnership Support */}
        <Card className="p-8 bg-background">
          <h3 className="text-2xl font-bold text-foreground mb-4">Dukungan Kami untuk Mitra Pesantren</h3>
          <p className="text-muted-foreground mb-6">
            Pesantren tidak berjalan sendiri. Rehlatours.id akan mendampingi setiap langkah dengan dukungan yang praktis
            dan profesional:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">
                Materi promosi siap pakai (poster, brosur digital, video, caption)
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">Training singkat bagi ustadz/ustadzah</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">Grup WhatsApp khusus mitra untuk komunikasi langsung</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">Admin support untuk membantu follow-up jamaah</span>
            </li>
          </ul>

          <p className="text-muted-foreground mb-6">
            Dengan dukungan ini, pesantren dapat tetap fokus pada dakwah dan pendidikan, sementara teknis perjalanan
            ditangani oleh tim Rehlatours.id.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto">
            <a href="https://wa.me/6281397321658" target="_blank" rel="noopener noreferrer">
              Jadilah Mitra Pesantren Kami
            </a>
          </Button>
        </Card>
      </div>
    </section>
  )
}
