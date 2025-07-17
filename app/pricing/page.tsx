"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Digital",
      description: "Perfecto para emprendedores que inician su transformación digital",
      price: "$2,500",
      originalPrice: "$3,500",
      duration: "Proyecto único",
      timeline: "2-3 semanas",
      features: [
        "Branding básico (logo + colores)",
        "Sitio web responsive 5 páginas",
        "Optimización SEO básica",
        "Formularios de contacto",
        "1 automatización simple",
        "Capacitación básica",
        "Soporte 30 días",
      ],
      cta: "Empezar Transformación",
      popular: false,
      savings: "Ahorra $1,000",
    },
    {
      name: "Growth Business",
      description: "La solución completa para negocios que quieren crecer rápido",
      price: "$5,500",
      originalPrice: "$8,000",
      duration: "Proyecto + 3 meses soporte",
      timeline: "4-6 semanas",
      features: [
        "Branding completo + manual de marca",
        "Tienda online o web avanzada",
        "3 automatizaciones clave",
        "Chatbot inteligente",
        "Integración WhatsApp Business",
        "Analytics y reportes avanzados",
        "Capacitación completa del equipo",
        "Soporte prioritario 90 días",
        "1 consultoría mensual",
      ],
      cta: "Acelerar Crecimiento",
      popular: true,
      savings: "Ahorra $2,500",
    },
    {
      name: "Scale Enterprise",
      description: "Para empresas que necesitan una solución omnicanal completa",
      price: "$12,000",
      originalPrice: "$18,000",
      duration: "Proyecto + 6 meses soporte",
      timeline: "8-12 semanas",
      features: [
        "Todo lo anterior +",
        "App móvil iOS y Android",
        "Sistema de gestión completo",
        "Automatización avanzada con IA",
        "Integraciones múltiples (CRM, ERP)",
        "Dashboard ejecutivo personalizado",
        "Soporte dedicado 6 meses",
        "Consultoría estratégica mensual",
        "Optimización continua",
      ],
      cta: "Escalar Negocio",
      popular: false,
      savings: "Ahorra $6,000",
    },
  ]

  const addOns = [
    {
      name: "Consultoría Estratégica Mensual",
      description: "Sesiones mensuales para optimizar tu estrategia digital",
      price: "$500/mes",
    },
    {
      name: "Automatización Adicional",
      description: "Workflow personalizado para procesos específicos",
      price: "$300",
    },
    {
      name: "Diseño de Campaña Publicitaria",
      description: "Creativos y copy para tus campañas de marketing",
      price: "$800",
    },
    {
      name: "Mantenimiento Web Premium",
      description: "Actualizaciones, backups y monitoreo 24/7",
      price: "$200/mes",
    },
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
              <Link href="/pricing" className="text-blue-600 font-medium">
                Planes
              </Link>
              <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
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
          <motion.div className="text-center max-w-4xl mx-auto" initial="initial" animate="animate" variants={fadeInUp}>
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium border border-blue-200">
              💰 Planes con Descuento Limitado
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Planes diseñados para tu
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                crecimiento
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Desde emprendedores hasta empresas establecidas. Tenemos la solución perfecta para impulsar tu negocio al
              siguiente nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg">
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className={`h-full relative ${
                    plan.popular
                      ? "border-2 border-blue-500 shadow-2xl scale-105 lg:scale-110"
                      : "border-2 hover:border-blue-200 shadow-lg"
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-medium shadow-lg">
                        🔥 Más Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>

                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-lg text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                      </div>

                      <Badge className="bg-green-100 text-green-800 mb-2">{plan.savings}</Badge>

                      <div className="text-sm text-gray-500 space-y-1">
                        <p>{plan.duration}</p>
                        <p>⏱️ Entrega: {plan.timeline}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full py-4 text-lg font-semibold ${
                        plan.popular ? "bg-blue-600 hover:bg-blue-700 shadow-lg" : "bg-gray-900 hover:bg-gray-800"
                      } transition-all duration-300`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Servicios Adicionales</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Potencia aún más tu plan con estos servicios complementarios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                      <span className="text-xl font-bold text-blue-600">{addon.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{addon.description}</p>
                    <Button variant="outline" className="w-full border-2 bg-white hover:bg-gray-50">
                      Agregar al Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "¿Qué incluye exactamente cada plan?",
                a: "Cada plan incluye todo lo listado en sus características. No hay costos ocultos y todos los entregables están claramente definidos.",
              },
              {
                q: "¿Cuánto tiempo toma completar un proyecto?",
                a: "Los tiempos varían según el plan: Starter (2-3 semanas), Growth (4-6 semanas), Scale (8-12 semanas). Siempre cumplimos los plazos acordados.",
              },
              {
                q: "¿Ofrecen garantía en su trabajo?",
                a: "Sí, ofrecemos garantía de satisfacción. Si no estás completamente satisfecho, trabajamos hasta que lo estés o te devolvemos tu dinero.",
              },
              {
                q: "¿Puedo cambiar de plan durante el proyecto?",
                a: "Absolutamente. Puedes hacer upgrade a un plan superior en cualquier momento pagando solo la diferencia.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">¿Tienes dudas sobre qué plan elegir?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Agenda una consulta gratuita y te ayudamos a encontrar la solución perfecta para tu negocio
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg shadow-lg">
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">GrowthFlow</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Transformamos negocios con branding profesional, desarrollo web/móvil y automatización inteligente.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+57 (1) 234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>hola@growthflow.co</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white transition-colors cursor-pointer">Branding & Identidad</div>
                <div className="hover:text-white transition-colors cursor-pointer">Desarrollo Web</div>
                <div className="hover:text-white transition-colors cursor-pointer">Apps Móviles</div>
                <div className="hover:text-white transition-colors cursor-pointer">Automatización</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/case-studies" className="block hover:text-white transition-colors">
                  Casos de Éxito
                </Link>
                <Link href="/pricing" className="block hover:text-white transition-colors">
                  Planes y Precios
                </Link>
                <div className="hover:text-white transition-colors cursor-pointer">Blog</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contacto</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 GrowthFlow. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl h-14 w-14 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
