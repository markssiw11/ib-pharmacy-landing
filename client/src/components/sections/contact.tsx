import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { InsertContactRequest } from "@shared/schema";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertContactRequest>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Thành công!",
        description: data.message || "Yêu cầu tư vấn đã được gửi thành công.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Lỗi!",
        description: error.message || "Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.businessType) {
      toast({
        title: "Lỗi!",
        description: "Vui lòng điền đầy đủ các trường bắt buộc.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContactRequest, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="contact-title">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="contact-description">
              Sẵn sàng hỗ trợ bạn bắt đầu hành trình chuyển đổi số
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="w-12 h-12 feature-icon-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Địa chỉ</h4>
                    <p className="text-muted-foreground">123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 feature-icon-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Điện thoại</h4>
                    <p className="text-muted-foreground">+84 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 feature-icon-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">support@ibpharmacy.com.vn</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="w-12 h-12 feature-icon-gradient rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Giờ làm việc</h4>
                    <p className="text-muted-foreground">
                      Thứ 2 - Thứ 6: 8:00 - 18:00<br />
                      Thứ 7: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in slide-in-right">
              <Card className="shadow-2xl border border-border card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">Gửi yêu cầu tư vấn</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div>
                      <Label htmlFor="name">Họ và tên *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Nhập họ và tên"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Nhập email"
                        required
                        data-testid="input-email"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Nhập số điện thoại"
                        required
                        data-testid="input-phone"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="businessType">Loại hình kinh doanh *</Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger data-testid="select-business-type">
                          <SelectValue placeholder="Chọn loại hình kinh doanh" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Nhà thuốc">Nhà thuốc</SelectItem>
                          <SelectItem value="Nhà phân phối">Nhà phân phối</SelectItem>
                          <SelectItem value="Khác">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Tin nhắn</Label>
                      <Textarea
                        id="message"
                        value={formData.message || ""}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Mô tả nhu cầu của bạn..."
                        rows={4}
                        data-testid="textarea-message"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 hover:shadow-lg"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Đang gửi..." : "Gửi yêu cầu"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
