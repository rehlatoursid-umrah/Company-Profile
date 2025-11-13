import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export default function PackageDetailsSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Umrah Reguler */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Umrah Reguler</h3>
            <p className="text-muted-foreground mb-4">
              Paket ini dirancang khusus untuk jamaah yang ingin melaksanakan ibadah umrah dengan biaya terjangkau namun
              tetap nyaman dan sesuai standar resmi PIHK berizin Kemenag. Dengan durasi 7 malam 8 hari, jamaah akan
              menjalani ibadah utama dengan bimbingan mutawwif berpengalaman serta berkesempatan berziarah ke berbagai
              tempat bersejarah di Makkah dan Madinah.
            </p>
            <div className="bg-muted/50 rounded p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Exclude:</p>
                <p>Passport, vaksin meningitis, vaksin Polio, dan kebutuhan pribadi</p>
              </div>
            </div>
          </Card>

          {/* Umrah Plus Mesir */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Umrah Plus Mesir</h3>
            <p className="text-muted-foreground mb-4">
              Paket eksklusif untuk jamaah yang ingin melaksanakan ibadah umrah dengan pengalaman spiritual lebih kaya,
              ditambah kunjungan ke tanah sejarah Islam & Firaun — Mesir. Nikmati perjalanan berkah dengan pelayanan
              premium dan itinerary terencana.
            </p>
            <div className="bg-muted/50 rounded p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Exclude:</p>
                <p>Passport, vaksin meningitis, vaksin Polio, dan kebutuhan pribadi</p>
              </div>
            </div>
          </Card>

          {/* Umrah Plus Turki */}
          <Card className="p-8 md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">Umrah Plus Turki</h3>
            <p className="text-muted-foreground mb-4">
              Perpaduan sempurna antara ibadah suci dan wisata sejarah peradaban Islam. Jalani umrah dengan khusyuk di
              Makkah & Madinah, lalu jelajahi keindahan Istanbul — kota dua benua yang menyimpan warisan Kesultanan
              Utsmaniyah dan jejak peradaban Islam dunia.
            </p>
            <div className="bg-muted/50 rounded p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold mb-2">Exclude:</p>
                <p>Passport, vaksin meningitis, vaksin Polio, dan kebutuhan pribadi</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
