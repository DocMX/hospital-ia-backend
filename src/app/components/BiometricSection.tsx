"use client";
import { motion } from "framer-motion";
import { Fingerprint, Scan, Shield, Lock, Eye, CheckCircle } from "lucide-react";

export default function BiometricSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1A1F3A] to-[#0A0E27] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF05_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm">Seguridad Biométrica</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Autenticación{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                Biométrica Avanzada
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Protección de expedientes clínicos y datos médicos sensibles mediante tecnología
              biométrica de última generación con reconocimiento facial y huella digital.
            </p>

            {/* Security Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Fingerprint,
                  title: "Huella Digital",
                  description: "Identificación única de personal médico y pacientes"
                },
                {
                  icon: Scan,
                  title: "Reconocimiento Facial",
                  description: "Autenticación rápida y segura con IA facial"
                },
                {
                  icon: Lock,
                  title: "Encriptación End-to-End",
                  description: "Protección de datos con cifrado de nivel militar"
                },
                {
                  icon: Eye,
                  title: "Monitoreo de Accesos",
                  description: "Registro completo de accesos a expedientes"
                }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:border-green-500/30 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "< 1s", label: "Autenticación" },
                { value: "99.99%", label: "Precisión" },
                { value: "256-bit", label: "Encriptación" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Biometric Display */}
            <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              {/* Fingerprint Scanner */}
              <div className="relative mb-8">
                <div className="aspect-square max-w-xs mx-auto relative">
                  {/* Scanning Animation */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 opacity-20 blur-2xl"
                  />

                  {/* Fingerprint Icon */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 flex items-center justify-center">
                    <Fingerprint className="w-32 h-32 text-green-400" />

                    {/* Scanning Line */}
                    <motion.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  </div>

                  {/* Corner Brackets */}
                  {[
                    "top-0 left-0",
                    "top-0 right-0 rotate-90",
                    "bottom-0 right-0 rotate-180",
                    "bottom-0 left-0 -rotate-90"
                  ].map((position, i) => (
                    <div
                      key={i}
                      className={`absolute ${position} w-8 h-8 border-l-2 border-t-2 border-cyan-400`}
                    />
                  ))}
                </div>
              </div>

              {/* Status Display */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/10 border border-green-500/30">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white text-sm font-medium">Autenticación Exitosa</span>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Usuario</div>
                    <div className="text-white text-sm font-medium">Dr. García</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <div className="text-xs text-gray-400 mb-1">Nivel Acceso</div>
                    <div className="text-cyan-400 text-sm font-medium">Admin</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">Último acceso</div>
                  <div className="text-white text-sm">Hoy, 14:32 hrs</div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl -z-10" />

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
            >
              <Shield className="w-8 h-8 text-cyan-400" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center"
            >
              <Lock className="w-8 h-8 text-green-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
