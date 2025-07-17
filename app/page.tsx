"use client"

import type React from "react"

import { useState } from "react"
import { getAssetPath } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  ArrowRight,
  Zap,
  Palette,
  Globe,
  Bot,
  CheckCircle,
  Star,
  MessageCircle,
  Phone,
  Mail,
  Play,
  ExternalLink,
  Menu,
  X,
  AlertTriangle,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Smartphone,
  BarChart3,
  Lightbulb,
  Shield,
  Workflow,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import TeamSection from "@/components/team-section"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function HomePage() {
  const [formStep, setFormStep] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    negocio: "",
    objetivo: "",
  })
  const [openModal, setOpenModal] = useState(null)

  const logos = [
    { name: "AWS", image: getAssetPath("/assets/awsp.png") },
    { name: "n8n", image: getAssetPath("/assets/n8n.png") },
    { name: "Vercel", image: getAssetPath("/assets/vercel.png") },
    { name: "React", image: getAssetPath("/assets/react.png") },
    { name: "WhatsApp", image: getAssetPath("/assets/wsp.png") },
    { name: "Figma", image: getAssetPath("/assets/figma.png") },
    { name: "App Store", image: getAssetPath("/assets/appstore.png") },
  ]

  const serviceDetails = {
    branding: {
      title: "Branding & Identidad Visual",
      subtitle: "Transforma tu imagen en una ventaja competitiva",
      painPoints: [
        {
          title: "Imagen amateur",
          description: "Tu negocio se ve improvisado",
          impact: "Pierdes hasta 60% de clientes potenciales",
          icon: AlertTriangle
        },
        {
          title: "Falta de confianza",
          description: "Los clientes dudan en comprar",
          impact: "Conversiones 40% más bajas",
          icon: Shield
        },
        {
          title: "Confusión con competencia",
          description: "Tu marca se pierde entre la multitud",
          impact: "Dificultad para destacar",
          icon: Target
        }
      ],
      solutions: [
        {
          title: "Identidad visual profesional",
          description: "Logo memorable y colores estratégicos",
          benefit: "Reconocimiento instantáneo",
          icon: Palette
        },
        {
          title: "Consistencia total",
          description: "Manual de marca en todos los puntos",
          benefit: "Mayor confianza y recordación",
          icon: CheckCircle
        },
        {
          title: "Diferenciación clara",
          description: "Posicionamiento único vs competencia",
          benefit: "Ventaja competitiva sostenible",
          icon: TrendingUp
        }
      ],
      metrics: [
        { stat: "85%", label: "Aumento en confianza" },
        { stat: "60%", label: "Mejora en percepción" },
        { stat: "40%", label: "Incremento conversiones" }
      ]
    },
    "desarrollo-web": {
      title: "Desarrollo Web & Aplicaciones",
      subtitle: "Tu presencia digital que convierte visitantes en clientes",
      painPoints: [
        {
          title: "Sitio web lento",
          description: "Carga lenta ahuyenta clientes",
          impact: "53% abandona si demora +3 segundos",
          icon: Clock
        },
        {
          title: "Diseño no responsive",
          description: "Se ve mal en dispositivos móviles",
          impact: "Pierdes 70% de tráfico móvil",
          icon: Smartphone
        },
        {
          title: "Baja conversión",
          description: "Visitantes no se convierten en ventas",
          impact: "ROI negativo en marketing digital",
          icon: DollarSign
        }
      ],
      solutions: [
        {
          title: "Sitio web optimizado",
          description: "Velocidad y performance excepcional",
          benefit: "Carga en menos de 2 segundos",
          icon: Globe
        },
        {
          title: "Diseño responsive",
          description: "Perfecto en todos los dispositivos",
          benefit: "Experiencia óptima móvil y desktop",
          icon: Smartphone
        },
        {
          title: "Optimización conversión",
          description: "CTAs y flujos que convierten",
          benefit: "Hasta 300% más conversiones",
          icon: TrendingUp
        }
      ],
      metrics: [
        { stat: "2x", label: "Velocidad promedio" },
        { stat: "300%", label: "Más conversiones" },
        { stat: "95%", label: "Score performance" }
      ]
    },
    automatizacion: {
      title: "Automatización & Inteligencia",
      subtitle: "Tecnología que trabaja por ti las 24 horas",
      painPoints: [
        {
          title: "Tareas repetitivas",
          description: "Tiempo perdido en procesos manuales",
          impact: "40+ horas semanales desperdiciadas",
          icon: Clock
        },
        {
          title: "Errores humanos",
          description: "Fallos en procesos importantes",
          impact: "Pérdida de clientes y credibilidad",
          icon: AlertTriangle
        },
        {
          title: "Falta de seguimiento",
          description: "Clientes potenciales se pierden",
          impact: "30% de leads sin respuesta",
          icon: Users
        }
      ],
      solutions: [
        {
          title: "Automatización completa",
          description: "Procesos que se ejecutan solos",
          benefit: "Ahorra 40+ horas semanales",
          icon: Bot
        },
        {
          title: "Seguimiento inteligente",
          description: "Nunca pierdes un cliente potencial",
          benefit: "100% de leads con seguimiento",
          icon: Workflow
        },
        {
          title: "Análisis automático",
          description: "Reportes y métricas en tiempo real",
          benefit: "Decisiones basadas en datos",
          icon: BarChart3
        }
      ],
      metrics: [
        { stat: "40h", label: "Ahorro semanal" },
        { stat: "100%", label: "Leads con seguimiento" },
        { stat: "60%", label: "Reducción errores" }
      ]
    }
  }

  const renderServiceModal = (serviceKey: string) => {
    const service = serviceDetails[serviceKey as keyof typeof serviceDetails]
    if (!service) return null

    return (
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{service.title}</h2>
          <p className="text-muted-foreground">{service.subtitle}</p>
        </div>

        {/* Comparativa: Problema vs Solución */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Problemas */}
          <div>
            <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Problemas que resolvemos
            </h3>
                         <div className="space-y-3">
               {service.painPoints.map((pain: any, index: number) => (
                <Card key={index} className="border-red-200 bg-red-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <pain.icon className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{pain.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{pain.description}</p>
                        <div className="bg-red-100 rounded px-2 py-1 text-xs text-red-800">
                          💔 {pain.impact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Nuestras soluciones
            </h3>
                         <div className="space-y-3">
               {service.solutions.map((solution: any, index: number) => (
                <Card key={index} className="border-green-200 bg-green-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <solution.icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{solution.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{solution.description}</p>
                        <div className="bg-green-100 rounded px-2 py-1 text-xs text-green-800">
                          ✨ {solution.benefit}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="bg-primary/5 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-primary mb-3 text-center">Resultados comprobados</h3>
                     <div className="grid grid-cols-3 gap-4">
             {service.metrics.map((metric: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary">{metric.stat}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open("https://wa.me/573001234567", "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Solicitar información personalizada
          </Button>
        </div>
      </div>
    )
  }

  const services = [
    {
      icon: Palette,
      title: "Branding & Identidad",
      subtitle: "Tu marca, memorable y profesional",
      description:
        "Creamos la identidad visual que hace que tu negocio se vea confiable y se destaque de la competencia.",
      features: [
        "Logo profesional y memorable",
        "Paleta de colores estratégica",
        "Guía de estilo completa",
        "Aplicaciones para redes sociales",
        "Manual de marca digital",
      ],
      gradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "hover:border-purple-200",
      slug: "branding",
    },
    {
      icon: Globe,
      title: "Desarrollo Web & Apps",
      subtitle: "Plataformas que convierten y escalan",
      description: "Desarrollamos sitios web, tiendas online y aplicaciones móviles que generan resultados medibles.",
      features: [
        "Sitios web de alto rendimiento",
        "Tiendas online que convierten",
        "Apps móviles iOS y Android",
        "Sistemas LMS y plataformas",
        "Desarrollo a medida",
      ],
      gradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "hover:border-blue-200",
      slug: "desarrollo-web",
    },
    {
      icon: Bot,
      title: "Automatización Inteligente",
      subtitle: "Libera tiempo, multiplica resultados",
      description: "Automatizamos procesos repetitivos con n8n e IA para que te enfoques en hacer crecer tu negocio.",
      features: [
        "Chatbots inteligentes",
        "Automatización de WhatsApp",
        "Workflows personalizados",
        "Integración de sistemas",
        "Reportes automáticos",
      ],
      gradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "hover:border-green-200",
      slug: "automatizacion",
    },
  ]

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

  const testimonials = [
    {
      name: "Ana Martínez",
      role: "CEO, Boutique Luna",
              image: getAssetPath("/assets/refmujer1.png"),
      content:
        "En 4 meses pasamos de $15K a $45K mensuales. La nueva tienda online y las automatizaciones cambiaron completamente nuestro negocio.",
      result: "+200% en ventas",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      role: "Fundador, TechConsulting",
              image: getAssetPath("/assets/refhombre1.jpg"),
      content:
        "El chatbot y las automatizaciones nos ahorran 25 horas semanales. Ahora podemos atender 3x más clientes con el mismo equipo.",
      result: "25h ahorradas/semana",
      rating: 5,
    },
    {
      name: "María González",
      role: "Directora, EduOnline",
              image: getAssetPath("/assets/refmujer2.png"),
      content:
        "La plataforma LMS que desarrollaron superó nuestras expectativas. Hemos escalado de 100 a 1,500 estudiantes en 6 meses.",
      result: "+1,400% crecimiento",
      rating: 5,
    },
  ]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formStep < 2) {
      setFormStep(formStep + 1)
    } else {
      console.log("Formulario enviado:", formData)
      alert("¡Gracias! Te contactaremos en las próximas 2 horas.")
    }
  }

  const scrollToPlans = () => {
    document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Navbar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">Golem8</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Servicios
              </a>
              <a href="#planes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Planes
              </a>
              <a href="#casos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Casos de Éxito
              </a>
              <Button size="sm" className="h-8 px-3 text-xs">
                <Phone className="w-3 h-3 mr-1.5" />
                Llamada Gratis
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 w-8 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col gap-4">
                <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </a>
                <a href="#planes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Planes
                </a>
                <a href="#casos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Casos de Éxito
                </a>
                <Button size="sm" className="h-8 w-fit">
                  <Phone className="w-3 h-3 mr-1.5" />
                  Llamada Gratis
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4 text-xs font-medium">
                🚀 Transformación Digital Completa
              </Badge>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight text-balance"
              variants={fadeInUp}
            >
              Impulsa tu negocio al <span className="text-primary">siguiente nivel</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto text-balance"
              variants={fadeInUp}
            >
              Branding profesional + Desarrollo web/móvil + Automatización inteligente.{" "}
              <span className="text-foreground font-medium">Todo en un solo lugar.</span>
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center mb-6" variants={fadeInUp}>
              <Button size="lg" onClick={scrollToPlans} className="h-11 px-6 text-sm font-medium">
                Ver Nuestros Planes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-11 px-6 text-sm font-medium bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Ver Casos de Éxito
              </Button>
            </motion.div>

            {/* Logo Carousel */}
            <motion.div className="mb-6 flex flex-col items-center justify-center" variants={fadeInUp}>
              <p className="text-sm text-muted-foreground mb-6 text-center">Tecnologías y aliados de confianza</p>
              <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
                <motion.div
                  className="flex items-center gap-8 sm:gap-12 md:gap-16"
                  animate={{
                    x: ["0%", "-50%"], // Move by exactly half the width (one set of logos)
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30, // Slower for smoother, more imperceptible effect
                      ease: "linear",
                    },
                  }}
                  style={{
                    width: "200%", // Double width to contain both sets
                  }}
                >
                  {/* First set of logos */}
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center flex-shrink-0 w-20 sm:w-24 md:w-28 h-16 sm:h-20 md:h-24 transition-all duration-300 hover:scale-110"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        width={80}
                        height={80}
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 w-full h-full"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {logos.map((logo, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex items-center justify-center flex-shrink-0 w-20 sm:w-24 md:w-28 h-16 sm:h-20 md:h-24 transition-all duration-300 hover:scale-110"
                    >
                      <Image
                        src={logo.image}
                        alt={logo.name}
                        width={80}
                        height={80}
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 w-full h-full"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Service Cards */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Los 3 pilares de tu transformación digital
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Una solución integral que cubre todo lo que necesitas para hacer crecer tu negocio online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
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
                  className={`h-full border-2 ${service.borderColor} transition-all duration-300 group hover:shadow-lg`}
                >
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconBg} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}
                    >
                      <service.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${service.iconColor}`} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-primary font-medium mb-2 sm:mb-3">{service.subtitle}</p>
                    <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed flex-grow text-xs sm:text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end mt-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 sm:h-8 px-2 sm:px-3 text-xs bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                          >
                            Ver detalles
                            <ExternalLink className="ml-1 sm:ml-1.5 h-3 w-3 group-hover:scale-110 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{serviceDetails[service.slug as keyof typeof serviceDetails].title}</DialogTitle>
                            <DialogDescription>{serviceDetails[service.slug as keyof typeof serviceDetails].subtitle}</DialogDescription>
                          </DialogHeader>
                          {renderServiceModal(service.slug)}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="planes" className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Planes diseñados para tu crecimiento
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Desde emprendedores hasta empresas establecidas. Tenemos la solución perfecta para ti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
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
                      ? "border-2 border-primary shadow-lg scale-105"
                      : "border-2 hover:border-primary/20 shadow-sm"
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1">
                        🔥 Más Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="text-center mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm">{plan.description}</p>

                      <div className="mb-2 sm:mb-3">
                        <span className="text-2xl sm:text-3xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground line-through ml-2">{plan.originalPrice}</span>
                      </div>

                      <Badge variant="secondary" className="mb-2 text-xs">
                        {plan.savings}
                      </Badge>

                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>{plan.duration}</p>
                        <p>⏱️ Entrega: {plan.timeline}</p>
                      </div>
                    </div>

                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full h-8 sm:h-10 text-xs sm:text-sm font-medium ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => window.open("https://forms.gle/kxhdEaxWyXT57Vug6", "_blank")}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-muted-foreground mb-4 text-xs sm:text-sm">¿Necesitas algo personalizado?</p>
            <Button variant="outline" size="sm" className="h-8 sm:h-9 px-3 sm:px-4 text-xs bg-transparent" onClick={() => window.open("https://forms.gle/kxhdEaxWyXT57Vug6", "_blank")}>Solicitar Cotización a Medida</Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="casos" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Estos son algunos de los negocios que hemos ayudado a transformar digitalmente
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-muted-foreground mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                      <div className="text-green-800 font-bold text-xs sm:text-sm text-center">{testimonial.result}</div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover border-2 border-border sm:w-12 sm:h-12"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                          <CheckCircle className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-xs sm:text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-balance" variants={fadeInUp}>
              ¿Listo para transformar tu negocio?
            </motion.h2>

            <motion.p className="text-base sm:text-lg mb-8 sm:mb-12 opacity-90 text-balance" variants={fadeInUp}>
              Agenda una llamada estratégica gratuita de 30 minutos y descubre exactamente cómo podemos ayudarte a
              crecer
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg font-semibold"
                onClick={() => window.open("https://calendly.com/edinssonadrian/30min", "_blank")}
              >
                Agendar Llamada Gratuita de 30min
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm opacity-75">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>100% Gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Respuesta inmediata</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Enhanced Footer */}
      <footer className="bg-muted py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-md flex items-center justify-center">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                </div>
                <span className="text-base sm:text-lg font-semibold text-foreground">Golem8</span>
              </Link>
              <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md text-xs sm:text-sm">
                Transformamos negocios con branding profesional, desarrollo web/móvil y automatización inteligente.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                  <Phone className="h-3 w-3" />
                  <span>+57 (1) 234-5678</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                  <Mail className="h-3 w-3" />
                  <span>hola@growthflow.co</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground">Servicios</h3>
              <div className="space-y-2 text-muted-foreground text-xs sm:text-sm">
                <div className="hover:text-foreground transition-colors cursor-pointer">Branding & Identidad</div>
                <div className="hover:text-foreground transition-colors cursor-pointer">Desarrollo Web</div>
                <div className="hover:text-foreground transition-colors cursor-pointer">Apps Móviles</div>
                <div className="hover:text-foreground transition-colors cursor-pointer">Automatización</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-xs sm:text-sm text-foreground">Empresa</h3>
              <div className="space-y-2 text-muted-foreground text-xs sm:text-sm">
                <div className="hover:text-foreground transition-colors cursor-pointer">Casos de Éxito</div>
                <div className="hover:text-foreground transition-colors cursor-pointer">Planes y Precios</div>
                <div className="hover:text-foreground transition-colors cursor-pointer">Blog</div>
                <div className="hover:text-foreground transition-colors cursor-pointer">Contacto</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground text-xs">
            <p>© 2024 GrowthFlow. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          size="sm"
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg h-10 w-10 sm:h-12 sm:w-12 p-0 transition-all duration-300 hover:scale-110"
          onClick={() => window.open("https://wa.me/573001234567", "_blank")}
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </div>
  )
}
