"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp, Clock, Target, Star, Phone } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Boutique Luna: De $15K a $45K mensuales",
      client: "Ana Martínez - CEO, Boutique Luna",
      industry: "E-commerce de Moda",
      image: "/placeholder.svg?height=400&width=600",
      clientImage: "/placeholder.svg?height=80&width=80",
      challenge: "Boutique Luna tenía una tienda física exitosa pero su presencia online era prácticamente inexistente. Su sitio web era básico, no tenían automatizaciones y dependían completamente de las ventas presenciales.",
      solution: "Implementamos una estrategia integral que incluyó rediseño completo de la tienda online, automatización de marketing por email, chatbot para atención al cliente y optimización de conversión.",
      results: [
        { metric: "Ventas mensuales", before: "$15,000", after: "$45,000", improvement: "+200%" },
        { metric: "Tasa de conversión", before: "1.2%", after: "4.8%", improvement: "+300%" },
        { metric: "Tiempo de respuesta", before: "24 horas", after: "Inmediato", improvement: "100%" },
        { metric: "Leads mensuales", before: "50", after: "300", improvement: "+500%" }
      ],
      testimonial: "En 4 meses pasamos de $15K a $45K mensuales. La nueva tienda online y las automatizaciones cambiaron completamente nuestro negocio. Ahora vendemos 24/7 sin estar presentes.",
      timeline: "6 semanas",
      services: ["Branding", "E-commerce", "Automatización", "Marketing Digital"],
      featured: true
    },
    {
      id: 2,
      title: "TechConsulting: Automatización que libera 25h semanales",
      client: "Carlos Ruiz - Fundador, TechConsulting",
      industry: "Consultoría Tecnológica",
      image: "/placeholder.svg?height=400&width=600",
      clientImage: "/placeholder.svg?height=80&width=80",
      challenge: "TechConsulting gastaba demasiado tiempo en tareas administrativas repetitivas: seguimiento de leads, envío de propuestas, programación de reuniones y reportes. Esto limitaba su capacidad de atender más clientes.",
      solution: "Desarrollamos un sistema completo de automatización con n8n que incluye chatbot inteligente, automatización de WhatsApp, CRM integrado y generación automática de reportes.",
      results: [
        { metric: "Tiempo ahorrado", before: "0 horas", after: "25h/semana", improvement: "25h liberadas" },
        { metric: "Capacidad de clientes", before: "15 clientes", after: "45 clientes", improvement: "+200%" },
        { metric: "Respuesta a leads", before: "4 horas", after: "5 minutos", improvement: "95% más rápido" },
        { metric: "Errores manuales", before: "15%", after: "0%", improvement: "100% reducción" }
      ],
      testimonial: "El chatbot y las automatizaciones nos ahorran 25 horas semanales. Ahora podemos atender 3x más clientes con el mismo equipo. La inversión se pagó sola en 2 meses.",
      timeline: "4 semanas",
      services: ["Automatización", "Chatbot", "CRM", "Integración WhatsApp"],
      featured: false
    },
    {
      id: 3,
      title: "EduOnline: De 100 a 1,500 estudiantes en 6 meses",
      client: "María González - Directora, EduOnline",
      industry: "Educación Online",
      image: "/placeholder.svg?height=400&width=600",
      clientImage: "/placeholder.svg?height=80&width=80",
      challenge: "EduOnline ofrecía cursos de calidad pero su plataforma era limitada y no escalable. Necesitaban una solución robusta para manejar más estudiantes y automatizar procesos educativos.",
      solution: "Desarrollamos una plataforma LMS completa con app móvil, sistema de pagos integrado, automatización de certificados y dashboard analítico para instructores.",
      results: [
        { metric: "Estudiantes activos", before: "100", after: "1,500", improvement: "+1,400%" },
        { metric: "Retención de estudiantes", before: "60%", after: "85%", improvement: "+42%" },
        { metric: "Ingresos mensuales", before: "$8,000", after: "$45,000", improvement: "+463%" },
        { metric: "Satisfacción NPS", before: "6.2", after: "9.1", improvement: "+47%" }
      ],
      testimonial: "La plataforma LMS que desarrollaron superó nuestras expectativas. Hemos escalado de 100 a 1,500 estudiantes en 6 meses. La app móvil fue un game-changer total.",
      timeline: "10 semanas",
      services: ["Desarrollo LMS", "App Móvil", "Automatización", "Analytics"],
      featured: false
    }
  ]

  const stats = [
    { number: "200+", label: "Proyectos Completados", icon: Target },
    { number: "$5M+", label: "En Ventas Generadas", icon: TrendingUp },
    { number: "98%", label: "Satisfacción Cliente", icon: Star },
    { number: "6 meses", label: "Tiempo Promedio ROI", icon: Clock }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">GrowthFlow</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#servicios" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Servicios
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Planes
              </Link>
              <Link href="/case-studies" className="text-blue-600 font-medium">
                Casos de Éxito
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 shadow-md">
                <Phone className="w-4 h-4 mr-2" />
                Llamada Gratis
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2 text-sm font-medium border border-green-200">
              ✅ Resultados Comprobados
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Casos de éxito que
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                hablan por sí solos
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a más de 200 negocios a transformarse digitalmente y multiplicar sus resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden ${study.featured ? 'border-2 border-blue-500 shadow-2xl' : 'border shadow-lg'}`}>
                  {study.featured && (
                    <div className="bg-blue-500 text-white text-center py-2">
                      <Badge className="bg-white text-blue-500">⭐ Caso Destacado</Badge>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-64 lg:h-full">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            {study.services.map((service, idx) => (
                              <Badge key={idx} className="bg-white/20 text-white backdrop-blur-sm">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 sm:p-8 lg:p-12">
                        <div className="mb-6">
                          <Badge className="mb-4 bg-gray-100 text-gray-800">{study.industry}</Badge>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {study.title}
                          </h2>
                          <div className="flex items-center gap-3 mb-6">
                            <Image
                              src={study.clientImage || "/placeholder.svg"}
                              alt={study.client}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <div className="font-medium text-gray-900">{study.client}</div>
                              <div className="text-sm text-gray-500">Timeline: {study.timeline}</div>
                            </div>
                          </div>
                        </div>

                        {/* Challenge */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Desafío</h3>
                          <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">Solución</h3>
                          <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                        </div>

                        {/* Results */}
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultados</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                <div className="text-sm font-medium text-gray-900 mb-1">{result.metric}</div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <span>{result.before}</span>
                                  <span>→</span>
                                  <span className="font-semibold text-green-600">{result.after}</span>
                                </div>
                                <div className="text-xs text-green-600 font-medium mt-1">{result.improvement}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-blue-50 rounded-lg p-6">
                          <div className="text-blue-600 mb-2">💬 Testimonio</div>
                          <blockquote className="text-gray-900 italic">"{study.testimonial}"</blockquote>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Únete a más de 200 empresas que ya transformaron sus resultados con nosotros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Llamada Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                Ver Más Casos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
