"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Star,
  Users,
  Clock,
  Target,
  Smartphone,
  BarChart3,
  Shield,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function AgenciaLanding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    sector: "",
  })
  const [counters, setCounters] = useState({
    leads: 0,
    horas: 0,
    errores: 0,
  })

  // Animación de contadores
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        leads: 35,
        horas: 15,
        errores: 90,
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 1) {
      setCurrentStep(2)
    } else {
      // Aquí iría la integración con n8n
      console.log("Formulario enviado:", formData)
      alert("¡Gracias! Te contactaremos en menos de 24 horas.")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Botón WhatsApp flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg h-14 w-14">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-900 px-4 py-2">✨ Agencia Todo-en-Uno LATAM</Badge>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Más clientes y menos tareas manuales para tu PYME
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                Branding, Web y Automatización (n8n + IA) integrados en menos de 30 días. Multiplicamos tus ventas y
                liberamos tu tiempo con soluciones digitales medibles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg">
                  Solicita Asesoría Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm text-blue-200">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Respuesta {"<"} 24h</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Sin spam</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>+50 PYMEs nos recomiendan</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-red-500 text-sm font-medium mb-2">ANTES</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>❌ Pocos leads</div>
                      <div>❌ Web desactualizada</div>
                      <div>❌ Procesos manuales</div>
                      <div>❌ Sin métricas claras</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-500 text-sm font-medium mb-2">DESPUÉS</div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>✅ +35% más leads</div>
                      <div>✅ Web que convierte</div>
                      <div>✅ Todo automatizado</div>
                      <div>✅ ROI medible</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema → Solución */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transformamos los 3 dolores más grandes de las PYMEs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos encargamos de lo complejo, tú te enfocas en crecer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sin leads de calidad</h3>
                <p className="text-gray-600 mb-6">
                  Tu competencia te está ganando clientes porque no tienes una estrategia digital clara
                </p>
                <div className="border-t pt-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Nuestra solución:</h4>
                    <p className="text-sm text-green-700">
                      Growth Ads + Brand Map que genera leads calificados en 30 días
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Web desactualizada</h3>
                <p className="text-gray-600 mb-6">
                  Tu sitio web no convierte visitantes en clientes y pierdes oportunidades diariamente
                </p>
                <div className="border-t pt-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Nuestra solución:</h4>
                    <p className="text-sm text-green-700">Sites & Apps escalables optimizados para conversión</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Procesos manuales</h3>
                <p className="text-gray-600 mb-6">
                  Pierdes tiempo y dinero en tareas repetitivas que podrían estar automatizadas
                </p>
                <div className="border-t pt-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Nuestra solución:</h4>
                    <p className="text-sm text-green-700">Automatización n8n + IA que libera 15h semanales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resultados Medibles */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Resultados que puedes medir</h2>
          <p className="text-xl text-blue-200 mb-16">Nuestros clientes ven estos resultados en promedio</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-5xl font-bold text-cyan-400 mb-2">+{counters.leads}%</div>
              <div className="text-lg font-semibold mb-2">Más leads</div>
              <div className="text-blue-200 text-sm">En los primeros 30 días</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-5xl font-bold text-green-400 mb-2">-{counters.horas}h</div>
              <div className="text-lg font-semibold mb-2">Por semana</div>
              <div className="text-blue-200 text-sm">Tiempo liberado con automatización</div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-5xl font-bold text-yellow-400 mb-2">-{counters.errores}%</div>
              <div className="text-lg font-semibold mb-2">Menos errores</div>
              <div className="text-blue-200 text-sm">En procesos automatizados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso en 3 pasos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cómo trabajamos contigo</h2>
            <p className="text-xl text-gray-600">Un proceso simple y transparente</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diagnóstico</h3>
              <p className="text-gray-600 mb-4">Analizamos tu situación actual en una llamada de 30 minutos</p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                <Clock className="h-4 w-4" />
                <span>30 minutos</span>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-900">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sprint de implementación</h3>
              <p className="text-gray-600 mb-4">Desarrollamos y lanzamos tu solución digital integrada</p>
              <div className="flex items-center justify-center gap-2 text-sm text-cyan-600">
                <Target className="h-4 w-4" />
                <span>2-4 semanas</span>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-900">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Escala y soporte</h3>
              <p className="text-gray-600 mb-4">Optimizamos continuamente y escalamos según creces</p>
              <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                <BarChart3 className="h-4 w-4" />
                <span>Continuo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prueba Social */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600">Más de 50 PYMEs confían en nosotros</p>
          </div>

          {/* Logos de clientes */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-center h-16">
                <div className="w-full h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Testimonios */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  "En 6 meses obtuvimos un ROI del 300%. La automatización nos ahorró 20 horas semanales y los leads
                  aumentaron un 45%. Increíble."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">María González</div>
                    <div className="text-sm text-gray-600">CEO, TechSolutions PYME</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  "Pasamos de 50 a 200 leads mensuales. La nueva web convierte 3x mejor y la automatización eliminó
                  errores manuales por completo."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Carlos Mendoza</div>
                    <div className="text-sm text-gray-600">Director, Retail Plus</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planes y Precios */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Planes transparentes</h2>
            <p className="text-xl text-gray-600">Precios claros, sin sorpresas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-blue-900 mb-2">Desde $1,000</div>
                  <div className="text-gray-600">USD por proyecto</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Web 5 páginas optimizada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Brand Kit completo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>SEO básico</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Soporte 30 días</span>
                  </li>
                </ul>

                <Button className="w-full bg-transparent" variant="outline">
                  Empezar ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Más popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                  <div className="text-4xl font-bold text-blue-900 mb-2">Desde $2,500</div>
                  <div className="text-gray-600">USD por proyecto</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Todo de Starter +</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Campañas de Ads</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Automatización n8n básica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Analytics avanzado</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-500 hover:bg-blue-600">Empezar ahora</Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                  <div className="text-4xl font-bold text-blue-900 mb-2">Desde $5,000</div>
                  <div className="text-gray-600">USD por proyecto</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Todo de Growth +</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Full funnel marketing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Apps móviles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>IA personalizada</span>
                  </li>
                </ul>

                <Button className="w-full bg-transparent" variant="outline">
                  Empezar ahora
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">¿Necesitas algo a medida?</p>
            <Button variant="link" className="text-blue-600 hover:text-blue-700">
              Agenda una llamada personalizada →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final + Formulario */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Listo para multiplicar tus ventas?</h2>
            <p className="text-xl text-blue-100">Agenda tu asesoría gratuita y descubre cómo podemos ayudarte</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit}>
                {currentStep === 1 ? (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Paso 1 de 2</h3>
                      <p className="text-gray-600">Información básica</p>
                    </div>

                    <div className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                        className="h-12"
                      />
                      <Input
                        type="email"
                        placeholder="Tu email corporativo"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                      Continuar
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Paso 2 de 2</h3>
                      <p className="text-gray-600">Información de contacto</p>
                    </div>

                    <div className="space-y-4">
                      <Input
                        type="tel"
                        placeholder="Tu teléfono con WhatsApp"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        required
                        className="h-12"
                      />
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        required
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecciona tu sector</option>
                        <option value="retail">Retail/Comercio</option>
                        <option value="servicios">Servicios</option>
                        <option value="manufactura">Manufactura</option>
                        <option value="tecnologia">Tecnología</option>
                        <option value="salud">Salud</option>
                        <option value="educacion">Educación</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
                      Solicitar Asesoría Gratis
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setCurrentStep(1)}
                      className="w-full text-gray-600"
                    >
                      ← Volver
                    </Button>
                  </div>
                )}
              </form>

              <div className="text-center mt-6 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="h-4 w-4" />
                  <span>Respuesta garantizada en menos de 24 horas</span>
                </div>
                <p>Sin spam. Tus datos están seguros con nosotros.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AgenciaLATAM</h3>
              <p className="text-gray-400 mb-4">
                Multiplicamos ventas y liberamos tiempo a las PYMEs con soluciones digitales integradas.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Smartphone className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Branding & Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Automatización
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Apps Móviles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Casos de éxito
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto rápido</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 hola@agencialatam.com</p>
                <p>📱 +52 55 1234 5678</p>
                <p>🕐 Lun-Vie 9AM-6PM (GMT-6)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 AgenciaLATAM. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-white">
                Privacidad
              </Link>
              <Link href="#" className="hover:text-white">
                SSL Seguro 🔒
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
