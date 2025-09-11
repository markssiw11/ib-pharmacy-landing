import { motion } from "framer-motion";
import customOnUsageIcon from "@assets/custom-on-usage.svg";
import customerSupportIcon from "@assets/customer-support.svg";
import dataAnalysisIcon from "@assets/data-analysis.svg";
import distributorPlatformIcon from "@assets/distributor-platform.svg";
import multiPlatformIcon from "@assets/multi-platform.svg";
import realtimeSyncIcon from "@assets/realtime-sync.svg";

export function Features() {
  const features = [
    {
      thumbnail: customOnUsageIcon,
      title: "Bảo mật dữ liệu toàn diện",
      description: "Tuân thủ chặt chẽ các tiêu chuẩn quốc tế, đảm bảo an toàn tuyệt đối cho dữ liệu y tế.",
    },
    {
      thumbnail: multiPlatformIcon,
      title: "Hỗ trợ đa nền tảng linh hoạt",
      description:
        "Truy cập mọi lúc, mọi nơi trên cả máy tính và điện thoại, đảm bảo trải nghiệm liền mạch và tiện lợi cho người dùng.",
    },
    {
      thumbnail: dataAnalysisIcon,
      title: "Phân tích dữ liệu thông minh và chính xác",
      description:
        "Báo cáo chi tiết, trực quan giúp doanh nghiệp nắm bắt tình hình và tối ưu hóa hoạt động kinh doanh hiệu quả hơn.",
    },
    {
      thumbnail: realtimeSyncIcon,
      title: "Đồng bộ thời gian thực trên mọi thiết bị",
      description:
        "Dữ liệu được cập nhật liên tục và đồng bộ hóa giữa các nền tảng, đảm bảo mọi thông tin luôn mới nhất và chính xác.",
    },
    {
      thumbnail: customerSupportIcon,
      title: "Đội ngũ hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ mọi lúc, đảm bảo giải quyết nhanh chóng mọi vấn đề của bạn.",
    },
    {
      thumbnail: distributorPlatformIcon,
      title: "Tùy chỉnh linh hoạt theo nhu cầu sử dụng",
      description:
        "Hệ thống có thể điều chỉnh linh hoạt để phù hợp với nhu cầu và quy trình riêng của từng doanh nghiệp.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="features-title">
            Tính năng nổi bật
          </h2>
          <p
            className="text-base text-muted-foreground max-w-3xl mx-auto"
            data-testid="features-description">
            Được thiết kế dành riêng cho ngành dược phẩm Việt Nam với các tính năng tiên tiến
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 space-y-6"
              data-testid={`feature-${index}`}>
              <img
                src={feature.thumbnail}
                alt={feature.title}
              />
              <h3 className="font-bold text-lg mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
