import heroDashboard from "@assets/hero-dashboard.svg";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="enhanced-gradient text-primary-foreground pt-28 relative overflow-hidden min-h-[80vh] flex items-center px-10">
      <div className="absolute inset-0 z-10 hero-background-img" />
      <div className="container relative mx-auto grid grid-cols-2 z-10">
        <motion.div
          className="flex flex-col justify-center gap-10 col-span-2 xl:col-span-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-[56px] font-bold leading-tight">
              Giải pháp quản lý <br />
              <span className="text-secondary">dược phẩm hiện đại</span>
            </h1>
            <p className="text-blue-50">
              Hệ thống tích hợp hoàn chỉnh cho nhà thuốc và nhà phân phối,{" "}
              <br /> tối ưu hóa quy trình quản lý và nâng cao hiệu quả kinh
              doanh.
            </p>
          </motion.div>
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              onClick={() =>
                window.open(
                  "https://youtu.be/Ee2UTPwQtSU",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <Play className="w-4 h-4" />
              Xem demo
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("platforms")}
            >
              Khám phá ngay
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute w-1/2 h-[630px] right-0 bottom-0 z-10 hidden xl:block">
        <motion.div
          initial={{ x: "100%", opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 5.08 }}
          transition={{
            duration: 0.75,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="absolute left-0 -bottom-10 w-full max-w-[560px] h-auto aspect-[560/519] bg-white/10 rounded-xl"
        />
        <motion.div
          initial={{ x: "100%", opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 5.08 }}
          transition={{
            duration: 0.75,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="absolute left-10 -bottom-1/4 w-full max-w-[560px] h-auto aspect-[560/701] bg-white/10 rounded-xl"
        />
        <motion.div
          initial={{ x: "100%", opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 5.08 }}
          transition={{
            duration: 0.75,
            delay: 1.2,
            ease: "easeOut",
          }}
          className="hero-dashboard-img"
        ></motion.div>
      </div>
    </section>
  );
}
