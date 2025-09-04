import {
  Shield,
  Smartphone,
  TrendingUp,
  RefreshCw,
  Headphones,
  Settings,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Bảo mật cao",
      description: "Tuân thủ các tiêu chuẩn bảo mật dữ liệu y tế quốc tế",
    },
    {
      icon: Smartphone,
      title: "Đa nền tảng",
      description: "Truy cập mọi lúc mọi nơi trên máy tính",
    },
    {
      icon: TrendingUp,
      title: "Phân tích thông minh",
      description: "Báo cáo chi tiết giúp tối ưu hóa kinh doanh",
    },
    {
      icon: RefreshCw,
      title: "Đồng bộ thời gian thực",
      description: "Dữ liệu được cập nhật liên tục giữa các nền tảng",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc",
    },
    {
      icon: Settings,
      title: "Tùy chỉnh linh hoạt",
      description: "Điều chỉnh theo nhu cầu riêng của từng doanh nghiệp",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="features-title"
          >
            Tính năng nổi bật
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="features-description"
          >
            Được thiết kế dành riêng cho ngành dược phẩm Việt Nam với các tính
            năng tiên tiến
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-transparent hover:border-primary/20 fade-in hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`feature-${index}`}
              >
                <div className="w-14 h-14 feature-icon-gradient rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md pulse-slow">
                  <IconComponent className="h-6 w-6 text-primary hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
