"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import { Crown, Palette } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Edinsson Melo",
      role: "CEO & CTO",
      subtitle: "Founder",
      image: "/assets/edinsson.jpeg",
      description: "Visionario tecnológico con +8 años liderando transformaciones digitales",
      icon: Crown,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      featured: true,
    },
    {
      name: "Yannimar Borja",
      role: "CMO & Design Specialist",
      subtitle: "Co-Founder",
      image: "/assets/yanni.jpg",
      description: "Experta en branding y estrategia digital que convierte marcas en experiencias",
      icon: Palette,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      featured: true,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            El equipo detrás de tu éxito
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Profesionales especializados trabajando juntos para transformar tu negocio
          </p>
        </motion.div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="relative mb-4 sm:mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto object-cover border-4 border-border sm:w-[120px] sm:h-[120px]"
                    />
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 ${member.iconBg} rounded-full border-4 border-background flex items-center justify-center`}
                    >
                      <member.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${member.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {member.role}
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground text-xs">{member.subtitle}</Badge>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Un equipo multidisciplinario con +50 proyectos exitosos</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% Remoto</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Metodología Ágil</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Comunicación 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
