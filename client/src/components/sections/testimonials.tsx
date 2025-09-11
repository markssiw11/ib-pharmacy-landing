import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Chị Lan Anh",
      company: "Nhà thuốc An Khang",
      content: "IB Pharmacy đã giúp chúng tôi tiết kiệm 60% thời gian quản lý kho và tăng 25% hiệu quả bán hàng.",
    },
    {
      name: "Anh Minh Đức",
      company: "Công ty TNHH Dược phẩm Minh Đức",
      content: "Hệ thống rất dễ sử dụng và hỗ trợ khách hàng xuất sắc. Tôi rất hài lòng với IB Pharmacy.",
    },
    {
      name: "Bà Thu Hà",
      company: "Nhà thuốc Bình An",
      content: "Chuyển đổi số thành công với IB Pharmacy. Doanh thu của chúng tôi tăng 40% sau 6 tháng sử dụng.",
    },
    {
      name: "Anh Văn Hùng",
      company: "Nhà thuốc Tâm Đức",
      content:
        "Tính năng đồng bộ real-time giúp chúng tôi quản lý nhiều chi nhánh hiệu quả. Không còn lo lắng về tình trạng tồn kho.",
    },
    {
      name: "Chị Thùy Linh",
      company: "Công ty Dược phẩm Sài Gòn",
      content:
        "Báo cáo phân tích chi tiết giúp chúng tôi đưa ra quyết định kinh doanh chính xác. ROI tăng 35% trong quý đầu.",
    },
    {
      name: "Bác sĩ Hoàng Nam",
      company: "Phòng khám Đa khoa Nam Việt",
      content:
        "Giao diện thân thiện và tính năng bảo mật cao. Chúng tôi tin tưởng hoàn toàn vào IB Pharmacy cho việc quản lý dược phẩm.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="testimonials-title">
            Khách hàng tin tưởng
          </h2>
          <p
            className="text-xl text-muted-foreground"
            data-testid="testimonials-description">
            Hàng trăm nhà thuốc và nhà phân phối đã chọn IB Pharmacy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg border border-border shadow-xl fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
                data-testid={`testimonial-${index}`}
                initial={{
                  height: 300,
                  y: 0,
                }}
                animate={{
                  boxShadow: isHovered
                    ? "0 25px 50px -12px rgba(1, 90, 162, 0.25), 0 0 0 1px rgba(1, 90, 162, 0.1)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                  boxShadow: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{
                    background: "white",
                    opacity: 1,
                  }}
                  animate={{
                    background: isHovered ? "linear-gradient(180deg, #015AA2 0%, #00213C 100%)" : "white",
                    opacity: isHovered ? 0.95 : 1,
                  }}
                  transition={{
                    duration: 1.3,
                    ease: "linear",
                    delay: 0.05,
                  }}
                />

                {/* Background decoration - only show for hovered card */}
                {isHovered && (
                  <motion.div
                    className="absolute bottom-0 right-0"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 0.15,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.05,
                    }}>
                    <svg
                      width="124"
                      height="146"
                      viewBox="0 0 248 291"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path
                          d="M152.905 5.873C159.205 2.23832 166.965 2.23768 173.266 5.87132L294.199 75.6133C300.514 79.2552 304.402 85.9934 304.395 93.2833L304.259 232.75C304.252 240.022 300.369 246.739 294.071 250.375L173.273 320.118C166.969 323.758 159.202 323.758 152.898 320.118L32.1029 250.377C25.8029 246.74 21.9201 240.02 21.9154 232.745L21.8259 93.2766C21.8212 85.9903 25.7078 79.2561 32.0191 75.615L152.905 5.873Z"
                          fill="#015AA2"
                        />
                        <path
                          d="M85.3203 144.082C85.3203 141.47 88.1458 139.836 90.4097 141.138L107.054 150.715L123.68 160.281C126.84 162.099 128.787 165.466 128.787 169.111L128.787 267.818C128.787 273.034 123.152 276.303 118.624 273.714L90.4514 257.607C87.2784 255.793 85.3204 252.418 85.3203 248.763L85.3203 144.082Z"
                          fill="white"
                        />
                        <path
                          d="M85.3203 70.4526C85.3203 67.827 88.1725 66.1947 90.4363 67.5246L123.76 87.102C126.874 88.9317 128.787 92.2737 128.787 95.8858V140.445C128.787 143.066 125.943 144.699 123.679 143.378L90.3725 123.938C87.2439 122.112 85.3203 118.762 85.3203 115.139V70.4526Z"
                          fill="white"
                        />
                        <path
                          d="M205.973 156.132C203.885 154.915 202.602 152.681 202.602 150.264L202.602 116.242C202.602 113.628 205.431 111.994 207.695 113.301L253.376 139.676C260.179 143.604 260.164 153.429 253.349 157.336L235.616 167.503C232.455 169.315 228.566 169.301 225.418 167.466L205.973 156.132Z"
                          fill="white"
                        />
                        <path
                          d="M147.929 34.0564C147.929 31.4441 150.755 29.8101 153.019 31.1133L186.18 50.2037C189.339 52.0219 191.285 55.3885 191.285 59.0328V235.329L152.969 212.893C149.847 211.065 147.929 207.719 147.929 204.102V34.0564Z"
                          fill="white"
                        />
                        <path
                          d="M263.62 145.576C266.769 147.397 268.709 150.758 268.709 154.396V230.602C268.709 234.26 266.747 237.638 263.568 239.451L259.019 242.045C258.849 242.163 258.674 242.277 258.489 242.383L235.648 255.478C232.473 257.298 228.565 257.275 225.411 255.418L154.106 213.428L191.291 191.694L225.242 211.35V123.389L263.62 145.576Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </motion.div>
                )}

                <CardContent className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4 fade-in-delay-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current transition-transform duration-300 hover:scale-110"
                        />
                      ))}
                    </div>
                  </div>

                  <motion.p
                    className="mb-4 italic flex-1"
                    initial={{ color: "#6b7280" }}
                    animate={{
                      color: isHovered ? "white" : "#6b7280",
                      textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.05,
                    }}>
                    "{testimonial.content}"
                  </motion.p>

                  <motion.div
                    className="flex items-center"
                    initial={{ color: "inherit" }}
                    animate={{
                      color: isHovered ? "white" : "inherit",
                      textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                    }}
                    transition={{
                      duration: 1.4,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.05,
                    }}>
                    <div className="w-10 h-10 feature-icon-gradient rounded-full flex items-center justify-center mr-3 shadow-md">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm opacity-80">{testimonial.company}</div>
                    </div>
                  </motion.div>
                </CardContent>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
