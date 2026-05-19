"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Activity, GiftIcon} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#1A1F3A] to-[#0A0E27] border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF05_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">IMSS IA Platform</h3>
                  <p className="text-cyan-400 text-sm">Healthcare Intelligence</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Plataforma enterprise de gestión hospitalaria impulsada por Inteligencia Artificial,
                diseñada específicamente para transformar el sistema de salud del IMSS.
              </p>

              <div className="flex gap-3">
                {[
                  { icon: GiftIcon, href: "#" },
                  { icon: GiftIcon, href: "#" },
                  { icon: GiftIcon, href: "#" }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all group"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-3">
              {["Características", "Seguridad", "Integraciones", "API Docs", "Actualizaciones"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <a href="mailto:jorgelvegahdz@gmail.com" className="text-white text-sm hover:text-cyan-400 transition-colors">
                    jorgelvegahdz@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Teléfono</div>
                  <a href="tel:+524921739311" className="text-white text-sm hover:text-cyan-400 transition-colors">
                    +52 492 173 9311
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Ubicación</div>
                  <p className="text-white text-sm">
                    Durango,Dgo., México
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} IMSS IA Platform by
              <a href="https://my-portfolio-two-psi-18.vercel.app/" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                JV
              </a>. Todos los derechos reservados.
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {["Privacidad", "Términos", "Cumplimiento", "Soporte"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Badge */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-400 text-xs">
                Powered by AI • Secured by Enterprise Security • Built for Scale
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/10 blur-[100px]" />
    </footer>
  );
}
