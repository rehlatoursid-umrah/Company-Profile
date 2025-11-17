import { Card } from "@/components/ui/card"

export default function TeamSection() {
  const team = [
    {
      name: "Habib Arifin Makhtum",
      role: "Founder & Director",
      image: "/hbb tanpa bg.png",
    },
    {
      name: "Hannan Nur Muhammad, S.T.",
      role: "Co-Founder & Owner",
      image: "/hnn tanpa bg.png",
    },
    {
      name: "Ridwan Fauzi, Lc.",
      role: "Tour Leader",
      image: "/rf.png",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Tim <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesional berpengalaman yang berdedikasi untuk kesuksesan perjalanan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
