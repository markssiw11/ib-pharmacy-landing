import { Logo } from "@/components/ui/logo";
import { Facebook, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold text-primary">IB Pharmacy</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Giải pháp quản lý dược phẩm hiện đại, kết nối nhà thuốc và nhà phân phối trong một hệ sinh thái hoàn chỉnh.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="https://dev.distributor.ibpharmacy.com.vn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-distributor-link"
                >
                  Nền tảng Nhà phân phối
                </a>
              </li>
              <li>
                <a 
                  href="https://dev.app.ibpharmacy.com.vn/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  data-testid="footer-pharmacy-link"
                >
                  Nền tảng Nhà thuốc
                </a>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-features-link"
                >
                  Tính năng
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-pricing-link">
                  Báo giá
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-docs-link">
                  Tài liệu hướng dẫn
                </a>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors text-left"
                  data-testid="footer-contact-link"
                >
                  Liên hệ
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-faq-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors" data-testid="footer-support-link">
                  Hỗ trợ kỹ thuật
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Theo dõi chúng tôi</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-facebook-link"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-linkedin-link"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid="footer-youtube-link"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 IB Pharmacy. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
