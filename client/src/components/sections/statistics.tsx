import { motion } from "framer-motion";
import pillIcon from "@assets/pill.svg";
import storeIcon from "@assets/storefront.svg";
import clockIcon from "@assets/timer.svg";

export function Statistics() {
  const stats = [
    {
      number: "500+",
      label: "Nhà thuốc tin dùng",
      background: "#F4FFE7",
      gradient: "linear-gradient(93.53deg, #2D8F00 0.61%, #3EC500 43.91%)",
      icon: pillIcon,
    },
    {
      number: "50+",
      label: "Nhà phân phối",
      background: "#FFFADB",
      gradient: "linear-gradient(94.35deg, #EDAA00 3.57%, #FFD97A 32.76%)",
      icon: storeIcon,
    },
    {
      number: "99.9%",
      label: "Thời gian hoạt động",
      background: "#F5FAFF",
      gradient: null,
      icon: clockIcon,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl h-[100px] p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex items-center gap-4">
              <div
                className="w-[76px] h-[76px] flex items-center justify-center rounded-lg"
                style={{ background: stat.background }}>
                <img
                  src={stat.icon}
                  alt={stat.label}
                  width={32}
                  height={32}
                />
              </div>
              <div className="text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-[40px] font-bold"
                  style={{
                    background: stat.gradient || undefined,
                    WebkitBackgroundClip: stat.gradient ? "text" : undefined,
                    WebkitTextFillColor: stat.gradient ? "transparent" : undefined,
                    backgroundClip: stat.gradient ? "text" : undefined,
                    color: stat.gradient ? undefined : "var(--primary)",
                  }}>
                  {stat.number}
                </motion.div>
                <h3 className="text-base text-gray-500">{stat.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
