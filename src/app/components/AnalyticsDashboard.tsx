"use client";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  
  Activity,
  Clock,
  AlertCircle,
  
  ShieldCheck,
  Sparkles,
  Cpu,
  Brain,
} from "lucide-react";

const patientData = [
  { name: "Ene", pacientes: 4200, automatizados: 3150 },
  { name: "Feb", pacientes: 4800, automatizados: 3840 },
  { name: "Mar", pacientes: 5200, automatizados: 4420 },
  { name: "Abr", pacientes: 4900, automatizados: 4165 },
  { name: "May", pacientes: 5600, automatizados: 5040 },
  { name: "Jun", pacientes: 6100, automatizados: 5795 },
];

const procesosData = [
  { name: "Lun", procesos: 340 },
  { name: "Mar", procesos: 420 },
  { name: "Mié", procesos: 380 },
  { name: "Jue", procesos: 510 },
  { name: "Vie", procesos: 490 },
  { name: "Sáb", procesos: 280 },
  { name: "Dom", procesos: 180 },
];

const tiempoData = [
  { name: "00:00", tiempo: 45 },
  { name: "04:00", tiempo: 32 },
  { name: "08:00", tiempo: 67 },
  { name: "12:00", tiempo: 89 },
  { name: "16:00", tiempo: 72 },
  { name: "20:00", tiempo: 51 },
];

const kpis = [
  {
    icon: Brain,
    label: "AI Agents Active",
    value: "128",
    change: "+42%",
    color: "cyan",
  },
  {
    icon: Cpu,
    label: "Autonomous Workflows",
    value: "8,421",
    change: "+31%",
    color: "blue",
  },
  {
    icon: Sparkles,
    label: "AI Decisions Processed",
    value: "24.8K",
    change: "+58%",
    color: "purple",
  },
  {
    icon: ShieldCheck,
    label: "Biometric Validations",
    value: "99.98%",
    change: "+12%",
    color: "green",
  },
];

export default function AnalyticsDashboard() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1A1F3A] to-[#0A0E27] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00E5FF08_1px,transparent_1px),linear-gradient(to_bottom,#00E5FF08_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm mb-4">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">
              Analytics en Tiempo Real
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            {" "}
            AI{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Command Center{" "}
            </span>{" "}
          </h2>{" "}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {" "}
            Monitoreo en tiempo real de agentes autónomos, automatización
            hospitalaria y coordinación inteligente impulsada por IA.{" "}
          </p>
        </motion.div>

        {/* KPIs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r from-${kpi.color}-500/20 to-${kpi.color}-600/20 flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 text-${kpi.color}-400`} />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 text-xs">{kpi.change}</span>
                  </div>
                </div>
                <div className="text-gray-400 text-sm mb-1">{kpi.label}</div>
                <div className="text-white text-3xl font-bold">{kpi.value}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Patient Trends Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Tendencia de Pacientes
                </h3>
                <p className="text-gray-400 text-sm">
                  Comparativa con automatización IA
                </p>
              </div>
              <AlertCircle className="w-5 h-5 text-cyan-400" />
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={patientData}>
                <defs>
                  <linearGradient
                    id="colorPacientes"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorAutomatizados"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#0066CC" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0066CC" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(10, 14, 39, 0.95)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="pacientes"
                  stroke="#00E5FF"
                  fillOpacity={1}
                  fill="url(#colorPacientes)"
                />
                <Area
                  type="monotone"
                  dataKey="automatizados"
                  stroke="#0066CC"
                  fillOpacity={1}
                  fill="url(#colorAutomatizados)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Process Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Procesos Automatizados
                </h3>
                <p className="text-gray-400 text-sm">
                  Actividad semanal del sistema IA
                </p>
              </div>
              <Activity className="w-5 h-5 text-blue-400" />
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={procesosData}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#0066CC" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(10, 14, 39, 0.95)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Bar
                  dataKey="procesos"
                  fill="url(#barGradient)"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Response Time Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Tiempo de Respuesta
                </h3>
                <p className="text-gray-400 text-sm">
                  Optimización de procesos en tiempo real
                </p>
              </div>
              <Clock className="w-5 h-5 text-green-400" />
            </div>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={tiempoData}>
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#00E5FF" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(10, 14, 39, 0.95)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="tiempo"
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={{ fill: "#00E5FF", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
