import { contact, whatsappMessages } from "@/content/site";

export function whatsappLink(message: string = whatsappMessages.default) {
  return `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(message)}`;
}
