import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Derb el Hammam, Medina, Marrakech 40000, Morocco',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+212 524 123 456',
    href: 'tel:+212524123456',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@riadmarrakech.com',
    href: 'mailto:info@riadmarrakech.com',
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Required';
    if (form.message.trim().length < 10) e.message = 'Please write at least 10 characters';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    toast.success('Message sent!', { description: `Thanks ${form.name.split(' ')[0]}, we'll reply to ${form.email} shortly.` });
    setForm({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-white transition-colors ${errors[field] ? 'border-red-400' : 'border-border'}`;

  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#7C8A5D] mb-4">Get in Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have questions about your stay or want to arrange something special? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Contact Information</h3>
              <ul className="space-y-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="bg-[#7C8A5D]/10 p-3 rounded-xl flex-shrink-0">
                      <Icon size={20} className="text-[#7C8A5D]" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-foreground/80 hover:text-[#7C8A5D] transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="text-foreground/80 text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#3D4A2B] rounded-2xl p-6 text-white">
              <h4 className="text-[#C9A961] mb-2">Opening Hours</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex justify-between"><span>Front Desk</span><span>24 / 7</span></li>
                <li className="flex justify-between"><span>Breakfast</span><span>07:00 – 10:30</span></li>
                <li className="flex justify-between"><span>Lunch</span><span>12:00 – 14:30</span></li>
                <li className="flex justify-between"><span>Dinner</span><span>19:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Spa & Hammam</span><span>09:00 – 21:00</span></li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground/70">Full Name</label>
                <input value={form.name} onChange={set('name')} className={inputClass('name')} placeholder="Jane Smith" />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-foreground/70">Email</label>
                <input type="email" value={form.email} onChange={set('email')} className={inputClass('email')} placeholder="jane@example.com" />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground/70">Subject</label>
              <input value={form.subject} onChange={set('subject')} className={inputClass('subject')} placeholder="Inquiry about room availability…" />
              {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground/70">Message</label>
              <textarea rows={5} value={form.message} onChange={set('message')} className={`${inputClass('message')} resize-none`} placeholder="Tell us how we can help…" />
              {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#7C8A5D] text-white py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium disabled:opacity-60 flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
