import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Heart } from "lucide-react"

export default function PesantrenPartnershipSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Jangkauan Pasar yang Luas",
      description:
        "Sebagai penyedia layanan perjalanan umrah dan wisata halal, Rehlatours.id memiliki pasar yang terus berkembang dan stabil, membuka peluang kolaborasi bagi para mitra dalam memperluas cakupan bisnis.",
    },
    {
      icon: TrendingUp,
      title: "Brand Terpercaya",
      description:
        "Rehlatours.id memiliki rekam jejak pelayanan yang amanah, profesional, dan transparan sehingga memudahkan mitra dalam merekomendasikan paket perjalanan kepada calon jamaah.",
    },
    {
      icon: Heart,
      title: "Dukungan & Materi Promosi",
      description:
        "Mitra mendapatkan dukungan penuh berupa materi pemasaran, konsultasi produk, hingga pendampingan strategi promosi agar lebih mudah dalam mendapatkan jamaah.",
    },
  ]

  return (
    <section id="pesantren" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Kerjasama <span className="text-primary">Kemitraan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bersama Mitra, Mewujudkan Perjalanan Suci yang Nyaman & Terpercaya
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
          <h3 className="text-2xl font-bold text-foreground mb-6">Skema Komisi untuk Mitra</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Kami percaya bahwa kolaborasi bisnis harus dibangun atas dasar transparansi dan saling menguntungkan. 
            Oleh karena itu, Rehlatours.id menyediakan skema komisi yang sederhana, jelas, dan mudah diterapkan oleh semua mitra.
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
          <h3 className="text-2xl font-bold text-foreground mb-4">Dukungan Kami untuk Mitra Rehlatours.id</h3>
          <p className="text-muted-foreground mb-6">
            Mitra tidak berjalan sendiri. Rehlatours.id akan mendampingi setiap langkah perjalanan bisnis Anda dengan dukungan yang praktis dan profesional:

          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">
                Materi promosi siap pakai (poster, brosur digital, video, caption)</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">Training singkat mengenai produk & strategi pemasaran</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">Grup WhatsApp khusus mitra untuk komunikasi langsung dan update program</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0 mt-2" />
              <span className="text-foreground">Admin support untuk membantu follow-up calon jamaah hingga closing</span>
            </li>
          </ul>

          <p className="text-muted-foreground mb-6">
            Dengan dukungan ini, mitra dapat tetap fokus pada pengembangan bisnis, 
            sementara seluruh kebutuhan teknis dan operasional perjalanan ditangani oleh tim Rehlatours.id
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto">
            <a href="https://wa.me/+6283197321658" target="_blank" rel="noopener noreferrer">
              Jadilah Mitra Bisnis Kami
            </a>
          </Button>
        </Card>
      </div>
    </section>
  )
}
