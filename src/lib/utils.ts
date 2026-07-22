import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function createWhatsAppUrl(message?: string): string {
  const defaultMsg = "Hello Tirumala Furniture team! I am visiting your website and would like to request an official quotation & schedule a showroom consultation.";
  const encodedText = encodeURIComponent(message || defaultMsg);
  // Phone number configured exclusively to +91 98855 33343
  return `https://wa.me/919885533343?text=${encodedText}`;
}

export function generateQuoteId(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `TF-QUOTE-${timestamp}-${random}`;
}
