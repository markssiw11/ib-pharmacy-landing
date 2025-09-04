import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      res.json({ 
        success: true, 
        message: "Yêu cầu tư vấn đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
        id: contactRequest.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại thông tin.",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get contact requests (for admin purposes)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Lỗi server khi lấy danh sách yêu cầu",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
