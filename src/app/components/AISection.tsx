"use client";
import { motion } from "framer-motion";
import { Brain, Sparkles, Workflow, FileText, TrendingUp, MessageSquare } from "lucide-react";

const aiFeatures = [
  {
    icon: Brain,
    title: "Agentes IA Especializados",
    description: "Asistentes virtuales entrenados en procesos médicos y administrativos del IMSS",
    items: ["Triaje inteligente", "Diagnóstico asistido", "Gestión de citas"]
  },
  {
    icon: Workflow,
    title: "Automatización de Workflows",
    description: "Flujos de trabajo médicos completamente automatizados y optimizados",
    items: ["Admisión automática", "Procesamiento de estudios", "Facturación inteligente"]
  },
  {
    icon: FileText,
    title: "Generación de Reportes",
    description: "Documentación médica y administrativa generada automáticamente por IA",
    items: ["Reportes clínicos", "Resúmenes ejecutivos", "Análisis estadísticos"]
  },
  {
    icon: TrendingUp,
    title: "Análisis Predictivo",
    description: "Predicción de tendencias hospitalarias y optimización de recursos",
    items: ["Predicción de demanda", "Gestión de inventario", "Optimización de turnos"]
  },
  {
    icon: MessageSquare,
    title: "Asistentes Virtuales",
    description: "Chatbots médicos 24/7 para pacientes y personal hospitalario",
    items: ["Soporte a pacientes", "Consultas médicas", "Información institucional"]
  },
  {
    icon: Sparkles,
    title: "Machine Learning",
    description: "Aprendizaje continuo del sistema para mejora constante de procesos",
    items: ["Detección de patrones", "Optimización automática", "Mejora continua"]
  }
];

export default function AISection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm mb-4">
            <Brain className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Inteligencia Artificial Avanzada</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Agentes{" "}
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              IA Hospitalarios
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automatización inteligente de procesos médicos con tecnología de IA de última generación,
            reduciendo tiempos operativos hasta en un 85%
          </p>
        </motion.div>

        {/* AI Visualization Center */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Central AI Core */}
            <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-12">
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-32 h-32"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 blur-2xl opacity-50" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 animate-pulse" />
                  <div className="absolute inset-8 rounded-full bg-[#1A1F3A] flex items-center justify-center">
                    <Brain className="w-12 h-12 text-cyan-400" />
                  </div>
                </motion.div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Motor de IA Central</h3>
                <p className="text-gray-400">Procesando 2,847 tareas simultáneas</p>
              </div>

              {/* Processing Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Precisión", value: "99.2%", color: "text-green-400" },
                  { label: "Velocidad", value: "2.4s", color: "text-cyan-400" },
                  { label: "Aprendizaje", value: "Activo", color: "text-purple-400" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-3xl opacity-20 blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-shadow">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {feature.description}
                  </p>

                  {/* Feature Items */}
                  <ul className="space-y-2">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
