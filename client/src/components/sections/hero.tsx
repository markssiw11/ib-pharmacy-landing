import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="enhanced-gradient text-primary-foreground pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5">
        <div className="absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/8 gentle-glow"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-white/4 gentle-glow" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/6 gentle-glow" style={{ animationDelay: '8s' }}></div>
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight fade-in" data-testid="hero-title">
            Giải pháp quản lý <br />
            <span className="text-secondary">dược phẩm hiện đại</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed fade-in fade-in-delay-1" data-testid="hero-description">
            Hệ thống tích hợp hoàn chỉnh cho nhà thuốc và nhà phân phối, 
            tối ưu hóa quy trình quản lý và nâng cao hiệu quả kinh doanh
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-2">
            <Button 
              onClick={() => scrollToSection('platforms')}
              className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-gray-50 shadow-lg transition-all duration-500 hover:shadow-xl"
              data-testid="button-explore"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Khám phá ngay
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('platforms')}
              className="border-2 border-white/80 text-white bg-transparent px-8 py-4 text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-500"
              data-testid="button-demo"
            >
              <Play className="mr-2 h-5 w-5" />
              Xem demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center fade-in fade-in-delay-3">
            <div data-testid="stat-pharmacies">
              <div className="text-3xl font-bold">500+</div>
              <div className="opacity-80">Nhà thuốc tin dùng</div>
            </div>
            <div data-testid="stat-distributors">
              <div className="text-3xl font-bold">50+</div>
              <div className="opacity-80">Nhà phân phối</div>
            </div>
            <div data-testid="stat-uptime">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="opacity-80">Thời gian hoạt động</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
