import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import contactLocation from "@assets/contact-location.png";
import type { InsertContactRequest } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Logo } from "../ui/logo";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertContactRequest>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
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
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Lỗi!",
        description: error.message || "Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.",
        variant: "destructive",
      });
    },
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-20 enhanced-gradient">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[474px_650px] xl:justify-center">
          <div className="fade-in slide-in-left bg-primary p-10 flex flex-col items-center gap-6 rounded-xl bg-gradient-to-b from-[#004378] to-[#015AA2]">
            <div className="flex gap-4 items-center">
              <Logo />
              <p className="text-3xl 2xl:text-[38px] font-extrabold montserrat text-white">IB Pharmacy</p>
            </div>

            <div className="space-y-6">
              <a
                href="https://maps.app.goo.gl/nf33SAQSuUzERWfD7"
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[400px] h-auto aspect-square rounded-xl overflow-hidden cursor-pointer block transition-transform duration-500 hover:scale-105">
                <img
                  src={contactLocation}
                  alt="Contact Location - Click to view on Google Maps"
                  className="w-full h-full object-cover"
                />
              </a>
              <div
                className="flex gap-2"
                data-testid="contact-address">
                <MapPin className="h-5 w-auto shrink-0 text-white" />
                <p className="text-white plus-jakarta-sans font-light">
                  146 Cộng Hòa, Phường 12, Tân Bình, Hồ Chí Minh
                </p>
              </div>

              <div
                className="flex gap-2"
                data-testid="contact-phone">
                <Phone className="h-5 w-auto shrink-0 text-white" />

                <p className="text-white plus-jakarta-sans font-light"> +84 902765231</p>
              </div>

              <div
                className="flex gap-2"
                data-testid="contact-email">
                <Mail className="h-5 w-auto shrink-0 text-white" />

                <p className="text-white plus-jakarta-sans font-light">info@ib-pharmacy.com.vn</p>
              </div>

              <div
                className="flex gap-2"
                data-testid="contact-hours">
                <Clock className="h-5 w-5 shrink-0 text-white" />

                <p className="text-white plus-jakarta-sans font-light">Thứ 2 - Thứ 6 | 8:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="fade-in slide-in-right">
            <Card className="shadow-2xl h-full border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-3xl">Liên hệ chúng tôi</CardTitle>
                <CardDescription className="text-base plus-jakarta-sans text-gray-500">
                  Hàng trăm nhà thuốc và nhà phân phối đã chọn IB Pharmacy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-testid="contact-form">
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
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => handleInputChange("businessType", value)}>
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
                    data-testid="button-submit-contact">
                    {contactMutation.isPending ? "Đang gửi..." : "Gửi yêu cầu"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
