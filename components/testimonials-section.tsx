import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Hana Fatimah, S.Gz., M.Gz",
      text: "Pengalaman umroh backpacker yang bikin ketagihan mau lagi dan lagi. Kalau yang kita tau backpacker itu serba ngurus sendiri, tapi di Rehlatours kita gaperlu ribet ngurus ini itu. Sebelum berangkat ada tim dari Rehla yang bantu kolektifin dari mulai tiket pesawat, hotel, visa, dll. Jadi kita tinggal terima beres tapi tetep ngerasain nuansa umroh backpacker yang serba fleksibel dan murah. Muthowwif dan tourguide nya juga sangat mengayomi dan berpengalaman.",
      rating: 5,
    },
    {
      id: 2,
      name: "Reviani Lestari, S.P.",
      text: "Alhamdulillah Alhamdulillah, Allah pertemukan saya dengan travel umroh Rehlatour. Di awal saya sudah tertarik karena Rehlatour pakai metode backpacker. Yang saya tahu umroh backpackeran itu fasilitasnya sederhana karena low budget. Tapi ternyata Rehlatour beda banget, mulai dari persiapan sampai pulang lagi ke tanah air, saya mendapatkan layanan yang memuaskan. Fasilitas yang diberikan juga worth it untuk anak-anak muda.",
      rating: 5,
    },
    {
      id: 3,
      name: "Bapak Mulyadi",
      text: "Alhamdulillah, Allah kasih saya kesempatan umroh bareng Rehlatour. Jujur, awalnya saya sempat mikir: 'Umroh? Bukannya itu biasanya buat orang tua?' Tapi ternyata, dengan konsep Umroh Backpacker, pengalaman ini jadi ibadah paling seru dan bermakna dalam hidup saya. Umroh kali ini bukan hanya soal ibadah, tapi juga perjalanan spiritual yang nyatu dengan gaya hidup anak muda.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Apa Kata <span className="text-primary">Mereka?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kepuasan para jamaah adalah kebanggaan kami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 flex flex-col">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 flex-grow text-sm leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
