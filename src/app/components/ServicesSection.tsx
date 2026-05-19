"use client";

import { motion } from "framer-motion";
import {
  Zap,
  FileText,
  Folder,
  Fingerprint,
  ShieldCheck,
  Sparkles,
  Workflow,
  Bot,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Orchestration Core",
    description:
      "Motor central de inteligencia artificial encargado de coordinar operaciones hospitalarias autónomas en tiempo real.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Bot,
    title: "Medical AI Agents",
    description:
      "Agentes especializados capaces de asistir en análisis clínicos, gestión médica y automatización hospitalaria.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Workflow,
    title: "Autonomous Workflows",
    description:
      "Automatización inteligente de tareas repetitivas, procesos administrativos y flujos médicos complejos.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FileText,
    title: "Gestión Administrativa",
    description:
      "Optimización de documentación, reportes y trámites institucionales",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Folder,
    title: "Control de Expedientes",
    description:
      "Sistema digital seguro para historiales clínicos y documentación médica",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Fingerprint,
    title: "Datos Biométricos",
    description:
      "Autenticación avanzada con reconocimiento facial y huella digital",
    color: "from-green-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Médica",
    description:
      "Protección de datos sensibles con encriptación de nivel enterprise",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Next-Gen Hospital Platform",
    description:
      "Infraestructura hospitalaria futurista preparada para operar con automatización e inteligencia artificial.",
    color: "from-cyan-400 to-blue-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0A0E27] to-[#1A1F3A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#00E5FF08,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0066CC08,transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm mb-4">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Soluciones Enterprise</span>
          </div>
          ```tsx
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Ecosistema de{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Agentes IA Autónomos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una nueva generación de inteligencia artificial diseñada para
            automatizar, coordinar y optimizar operaciones hospitalarias del
            IMSS en tiempo real.
          </p>
          ```
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  {/* Glow Effect on Hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Indicator */}
                  <div
                    className={`absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center`}
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
