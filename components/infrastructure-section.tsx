"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function InfrastructureSection() {
  const vehicles = [
    { type: "Sedan Camry/Setaraf", count: 2, image: "/camrypng" },
    { type: "Hyundai H1/Hiace", count: 4, image: "/h1.png" },
    { type: "Hyundai Staria", count: 2, image: "/staria.png" },
    { type: "SUV GMC", count: 4, image: "/gmc.png" },
    { type: "Toyota Coaster", count: 16, image: "/Coaster.png" },
    { type: "Big Bus Mercy", count: 45, image: "/bis_.npg" },
  ]

  const hotels = {
    makkah: [
      { name: "Mahd Alresala Hotel", image: "/luxury-hotel-makkah.png" },
      { name: "Grand Zowar Hotel", image: "/islamic-hotel-makkah.jpg" },
      { name: "Emaar Elite Hotel", image: "/elegant-hotel-room.png" },
    ],
    madinah: [
      { name: "Hilltown Airport Hotel", image: "/luxury-hotel-madinah.jpg" },
      { name: "Al-Eiman Hotel", image: "/premium-hotel-madinah.jpg" },
      { name: "Riyadh Palace Hotel", image: "/modern-hotel-madinah.jpg" },
    ],
    turkey: [
      { name: "Paradise Boutique Hotel", image: "/boutique-hotel-istanbul.jpg" },
      { name: "Intercity Airport Hotel", image: "/modern-hotel-istanbul.jpg" },
      { name: "Grand Istanbul Hotel", image: "/luxury-istanbul-hotel.jpg" },
    ],
    egypt: [
      { name: "Indiana Hotel Cairo", image: "/elegant-hotel-cairo.jpg" },
      { name: "Meshk Airport Hotel", image: "/luxury-hotel-cairo.jpg" },
      { name: "Hotel New One Cairo", image: "/modern-hotel-cairo.jpg" },
    ],
  }

  const [activeIndex, setActiveIndex] = useState({
    makkah: 0,
    madinah: 0,
    turkey: 0,
    egypt: 0,
  })

  const goToPrevious = (region) => {
    setActiveIndex({
      ...activeIndex,
      [region]: activeIndex[region] === 0 ? hotels[region].length - 1 : activeIndex[region] - 1,
    })
  }

  const goToNext = (region) => {
    setActiveIndex({
      ...activeIndex,
      [region]: activeIndex[region] === hotels[region].length - 1 ? 0 : activeIndex[region] + 1,
    })
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Armada & <span className="text-primary">Akomodasi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fasilitas transportasi dan akomodasi terbaik untuk perjalanan ibadah Anda
          </p>
        </div>

        {/* Vehicles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-4">Armada Kendaraan</h3>
          <p className="text-muted-foreground mb-8">
            Bus AC premium dengan kapasitas 30-40 seat dilengkapi fasilitas standar keamanan internasional dan
            dikemudikan oleh pengemudi berpengalaman yang memahami rute perjalanan ibadah.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-foreground text-lg">{vehicle.type}</p>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {vehicle.count} unit
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hotels */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Hotel Partner</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Makkah Hotels */}
            <div>
              <h4 className="font-bold text-lg text-primary mb-4">Hotel Makkah</h4>
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={hotels.makkah[activeIndex.makkah].image || "/placeholder.svg"}
                    alt={hotels.makkah[activeIndex.makkah].name}
                    className="w-full h-64 object-cover"
                  />
                  {hotels.makkah.length > 1 && (
                    <>
                      <button
                        onClick={() => goToPrevious("makkah")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => goToNext("makkah")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {hotels.makkah.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex({ ...activeIndex, makkah: idx })}
                            className={`w-2 h-2 rounded-full transition ${
                              idx === activeIndex.makkah ? "bg-secondary" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">{hotels.makkah[activeIndex.makkah].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {activeIndex.makkah + 1} dari {hotels.makkah.length}
                  </p>
                </div>
              </Card>
            </div>

            {/* Madinah Hotels */}
            <div>
              <h4 className="font-bold text-lg text-primary mb-4">Hotel Madinah</h4>
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={hotels.madinah[activeIndex.madinah].image || "/placeholder.svg"}
                    alt={hotels.madinah[activeIndex.madinah].name}
                    className="w-full h-64 object-cover"
                  />
                  {hotels.madinah.length > 1 && (
                    <>
                      <button
                        onClick={() => goToPrevious("madinah")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => goToNext("madinah")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {hotels.madinah.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex({ ...activeIndex, madinah: idx })}
                            className={`w-2 h-2 rounded-full transition ${
                              idx === activeIndex.madinah ? "bg-secondary" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">{hotels.madinah[activeIndex.madinah].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {activeIndex.madinah + 1} dari {hotels.madinah.length}
                  </p>
                </div>
              </Card>
            </div>

            {/* Turkey Hotels */}
            <div>
              <h4 className="font-bold text-lg text-secondary mb-4">Hotel Turki</h4>
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={hotels.turkey[activeIndex.turkey].image || "/placeholder.svg"}
                    alt={hotels.turkey[activeIndex.turkey].name}
                    className="w-full h-64 object-cover"
                  />
                  {hotels.turkey.length > 1 && (
                    <>
                      <button
                        onClick={() => goToPrevious("turkey")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => goToNext("turkey")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {hotels.turkey.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex({ ...activeIndex, turkey: idx })}
                            className={`w-2 h-2 rounded-full transition ${
                              idx === activeIndex.turkey ? "bg-secondary" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">{hotels.turkey[activeIndex.turkey].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {activeIndex.turkey + 1} dari {hotels.turkey.length}
                  </p>
                </div>
              </Card>
            </div>

            {/* Egypt Hotels */}
            <div>
              <h4 className="font-bold text-lg text-secondary mb-4">Hotel Mesir</h4>
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={hotels.egypt[activeIndex.egypt].image || "/placeholder.svg"}
                    alt={hotels.egypt[activeIndex.egypt].name}
                    className="w-full h-64 object-cover"
                  />
                  {hotels.egypt.length > 1 && (
                    <>
                      <button
                        onClick={() => goToPrevious("egypt")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => goToNext("egypt")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {hotels.egypt.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveIndex({ ...activeIndex, egypt: idx })}
                            className={`w-2 h-2 rounded-full transition ${
                              idx === activeIndex.egypt ? "bg-secondary" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-foreground">{hotels.egypt[activeIndex.egypt].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {activeIndex.egypt + 1} dari {hotels.egypt.length}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
