import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budgetRange: string;
  description: string;
  timeline?: string;
}

export interface ContactServiceResponse {
  success: boolean;
  message?: string;
  error?: unknown;
}

export interface IContactService {
  submitForm(data: ContactFormData): Promise<ContactServiceResponse>;
}

export class EmailJSContactService implements IContactService {
  async submitForm(data: ContactFormData): Promise<ContactServiceResponse> {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not configured.');
      }

      // We convert data to Record<string, unknown> to satisfy EmailJS types
      await emailjs.send(
        serviceId,
        templateId,
        data as unknown as Record<string, unknown>,
        publicKey
      );
      
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}

export const contactService: IContactService = new EmailJSContactService();
