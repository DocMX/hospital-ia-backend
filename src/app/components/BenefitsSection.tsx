"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Database,
  BarChart3,
  CheckCircle,
  Send,
  Brain,
  Loader2,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Reducción de Tiempos Administrativos",
    description: "Hasta 85% menos tiempo en procesos manuales repetitivos",
    stat: "-85%",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Optimización Hospitalaria",
    description: "Mejora continua de flujos de trabajo médicos y administrativos",
    stat: "+92%",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Seguridad de Información Médica",
    description: "Protección enterprise de datos sensibles con cumplimiento normativo",
    stat: "100%",
    color: "from-green-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Automatización Operativa",
    description: "Workflows inteligentes que se ejecutan sin intervención humana",
    stat: "24/7",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Análisis Inteligente",
    description: "Insights predictivos en tiempo real para toma de decisiones",
    stat: "Real-time",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Infraestructura Escalable",
    description: "Arquitectura cloud que crece con las necesidades del IMSS",
    stat: "∞",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function BenefitsSection() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const [formData, setFormData] = useState({
    patient_name: "",
    department: "",
    request_type: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setResponse(data.ai);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00E5FF05,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-4">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">
              AI Administrative Agent Demo
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hospital{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simulación en tiempo real de agentes IA automatizando procesos
            administrativos hospitalarios del IMSS.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <div
                    className={`absolute top-6 right-6 px-3 py-1 rounded-full bg-gradient-to-r ${benefit.color} text-white text-sm font-bold`}
                  >
                    {benefit.stat}
                  </div>

                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-white font-semibold mb-2 text-lg pr-16">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI DEMO FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                AI Hospital Agent
              </h3>

              <p className="text-gray-400">
                Simulación de automatización administrativa hospitalaria
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Nombre del Paciente
                </label>

                <input
                  type="text"
                  placeholder="Juan Pérez"
                  value={formData.patient_name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      patient_name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Departamento
                </label>

                <input
                  type="text"
                  placeholder="Cardiología"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      department: e.target.value,
                    })
                  }
                  className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Solicitud Hospitalaria
                </label>

                <textarea
                  rows={5}
                  placeholder="Necesita reprogramación urgente de cirugía..."
                  value={formData.request_type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      request_type: e.target.value,
                    })
                  }
                  className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Procesando con IA...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Ejecutar Agente IA
                  </>
                )}
              </motion.button>
            </div>

            {/* RESPONSE */}
            <div className="rounded-3xl bg-black/30 border border-cyan-500/20 p-6 min-h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-semibold text-lg">
                  AI Decision Engine
                </h4>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs">
                    AI ONLINE
                  </span>
                </div>
              </div>

              {!response && !loading && (
                <div className="h-full flex items-center justify-center text-center text-gray-500">
                  Esperando solicitud hospitalaria...
                </div>
              )}

              {loading && (
                <div className="space-y-4">
                  <div className="animate-pulse h-4 bg-cyan-500/20 rounded-full" />
                  <div className="animate-pulse h-4 bg-cyan-500/10 rounded-full w-3/4" />
                  <div className="animate-pulse h-4 bg-cyan-500/20 rounded-full w-1/2" />
                </div>
              )}

              {response && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="text-cyan-400 text-sm mb-1">
                      PRIORIDAD DETECTADA
                    </div>

                    <div className="text-white text-2xl font-bold uppercase">
                      {response.priority}
                    </div>
                  </div>

                  <div>
                    <div className="text-cyan-400 text-sm mb-1">
                      RESUMEN IA
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {response.summary}
                    </p>
                  </div>

                  <div>
                    <div className="text-cyan-400 text-sm mb-1">
                      DECISIÓN AUTOMÁTICA
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {response.decision}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Workflow hospitalario automatizado correctamente
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </form>

          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl opacity-10 blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}