import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Chị Lan Anh",
      company: "Nhà thuốc An Khang",
      content: "IB Pharmacy đã giúp chúng tôi tiết kiệm 60% thời gian quản lý kho và tăng 25% hiệu quả bán hàng."
    },
    {
      name: "Anh Minh Đức",
      company: "Công ty TNHH Dược phẩm Minh Đức",
      content: "Hệ thống rất dễ sử dụng và hỗ trợ khách hàng xuất sắc. Tôi rất hài lòng với IB Pharmacy."
    },
    {
      name: "Bà Thu Hà",
      company: "Nhà thuốc Bình An",
      content: "Chuyển đổi số thành công với IB Pharmacy. Doanh thu của chúng tôi tăng 40% sau 6 tháng sử dụng."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="testimonials-title">
            Khách hàng tin tưởng
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="testimonials-description">
            Hàng trăm nhà thuốc và nhà phân phối đã chọn IB Pharmacy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-border animated-border" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 feature-icon-gradient rounded-full flex items-center justify-center mr-3 shadow-md">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
