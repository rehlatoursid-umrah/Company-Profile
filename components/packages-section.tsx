import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PackagesSection() {
  const packages = [
    {
      id: 1,
      name: "Umrah Reguler",
      price: "23.500.000",
      duration: "7 Malam 8 Hari (7N8D)",
      description: "Paket umrah dengan fasilitas standar dan harga terjangkau",
      features: [
        "Tiket pesawat PP & visa Saudi",
        "Mutawwif / mutawwifah, panduan & manasik online",
        "Hotel ★★★★ /Setaraf + Meals",
        "Transfer bandara & city tour Makkah & Madinah",
        "Kain ihram, abaya, tanda pengenal",
        "Asuransi perjalanan",
        "Ziarah lengkap ke tempat-tempat bersejarah",
      ],
    },
    {
      id: 2,
      name: "Umrah Plus Mesir",
      price: "IDR 34.500.000",
      duration: "11 Malam 12 Hari (11N12D)",
      description: "Umrah dengan perjalanan ke tanah sejarah Islam - Mesir",
      features: [
        "Tiket pesawat PP (Jakarta – Cairo – Medinah – Jeddah – Jakarta)",
        "Visa Umrah & Visa Mesir",
        "Mutawwif profesional + pemandu wisata",
        "Transfer & city tour Makkah, Madinah & Mesir",
        "Hotel ★★★★ /Setaraf + Meals",
        "Kunjungan Piramida Giza, Sphinx,, Khan Khalili Museum Mesir",
        "Souvenir Travel & tanda pengenal",
        "Air zamzam 5L per jamaah",
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: "Umrah Plus Turki",
      price: "33.500.000",
      duration: "11 Malam 12 Hari (11N12D)",
      description: "Perpaduan sempurna antara ibadah suci dan wisata sejarah Islam Ottoman",
      features: [
        "Tiket pesawat PP (Jakarta – Istanbul – Medinah – Jeddah – Jakarta)",
        "Visa Umrah",
        "Mutawwif profesional + pemandu wisata",
        "Transfer & city tour Makkah, Madinah & Turki",
        "Hotel ★★★★ /Setaraf + Meals",
        "City tour Istanbul lengkap",
        "Souvenir Travel & tanda pengenal",
        "Air Zamzam 5L per jamaah",
      ],
    },
  ]

  return (
    <section id="packages" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Paket <span className="text-primary">Umrah</span> Kami B2B min. 12 Pax
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan impian spiritual Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`flex flex-col p-8 transition-all hover:shadow-xl ${
                pkg.isPopular ? "md:scale-105 border-secondary border-2" : ""
              }`}
            >
              {pkg.isPopular && (
                <div className="mb-4">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Paket Populer
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
              <p className="text-secondary font-bold text-2xl mb-1">{pkg.price}</p>
              <p className="text-muted-foreground mb-4 text-sm">{pkg.duration}</p>
              <p className="text-foreground/80 mb-6">{pkg.description}</p>

              <ul className="space-y-2 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://wa.me/+6283197321658" target="_blank" rel="noopener noreferrer">
                  Pesan Sekarang
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
