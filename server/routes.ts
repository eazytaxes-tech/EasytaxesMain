
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { sendContactEmail } from "./mailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      console.log('Received body:', req.body);
      await sendContactEmail(req.body);
      res.json({ success: true, message: "Inquiry received" });
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
