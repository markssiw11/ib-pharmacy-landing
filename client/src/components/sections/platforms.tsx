import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Warehouse, Pill, CheckCircle, ExternalLink } from "lucide-react";

export function Platforms() {
  return (
    <section id="platforms" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="platforms-title">
            Hai nền tảng, một hệ sinh thái
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="platforms-description">
            IB Pharmacy cung cấp giải pháp toàn diện cho cả nhà thuốc và nhà phân phối, 
            kết nối liền mạch trong chuỗi cung ứng dược phẩm
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Distributor Platform */}
          <Card className="border border-border shadow-xl bg-gradient-to-br from-white to-blue-50/30 fade-in slide-in-left transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" data-testid="card-distributor">
            <CardHeader className="text-center">
              <div className="w-16 h-16 feature-icon-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg gentle-scale">
                <Warehouse className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Nền tảng Nhà phân phối</CardTitle>
              <p className="text-muted-foreground">Quản lý kho hàng và đơn hàng chuyên nghiệp</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quản lý kho thông minh</h4>
                    <p className="text-sm text-muted-foreground">Theo dõi tồn kho, hạn sử dụng và xuất nhập tự động</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Xử lý đơn hàng nhanh chóng</h4>
                    <p className="text-sm text-muted-foreground">Tự động hóa quy trình từ đặt hàng đến giao hàng</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Báo cáo phân tích</h4>
                    <p className="text-sm text-muted-foreground">Dashboard thông minh với insights kinh doanh</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="button-distributor-login"
              >
                <a href="https://dev.distributor.ibpharmacy.com.vn/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Đăng nhập Nhà phân phối
                </a>
              </Button>
            </CardContent>
          </Card>
          
          {/* Pharmacy Platform */}
          <Card className="border border-border shadow-xl bg-gradient-to-br from-white to-green-50/30 fade-in slide-in-right transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" data-testid="card-pharmacy">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg gentle-scale">
                <Pill className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="text-2xl mb-2">Nền tảng Nhà thuốc</CardTitle>
              <p className="text-muted-foreground">Giải pháp quản lý nhà thuốc toàn diện</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quản lý thuốc hiệu quả</h4>
                    <p className="text-sm text-muted-foreground">Theo dõi thuốc, hạn sử dụng và cảnh báo tồn kho</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Đặt hàng trực tuyến</h4>
                    <p className="text-sm text-muted-foreground">Kết nối trực tiếp với nhà phân phối, đặt hàng dễ dàng</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Quản lý bán hàng</h4>
                    <p className="text-sm text-muted-foreground">POS tích hợp, báo cáo doanh thu chi tiết</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-pharmacy-login"
              >
                <a href="https://dev.app.ibpharmacy.com.vn/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Đăng nhập Nhà thuốc
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
