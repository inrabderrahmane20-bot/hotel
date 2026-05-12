import { useState } from 'react';
import { toast } from 'sonner';
import { User, Mail, Phone, Calendar, Clock, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const TIME_SLOTS = [
  { label: 'Lunch', slots: ['12:00', '12:30', '13:00', '13:30', '14:00'] },
  { label: 'Dinner', slots: ['19:00', '19:30', '20:00', '20:30', '21:00'] },
];

const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6+ Guests'];

const today = new Date().toISOString().split('T')[0];

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

export function ReservationModal({ open, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 Guests',
    notes: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.date) e.date = 'Required';
    if (!form.time) e.time = 'Please select a time';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setIsSubmitting(false);
    onClose();
    toast.success('Table reserved!', {
      description: `Reservation confirmed for ${form.date} at ${form.time}. See you soon, ${form.name.split(' ')[0]}!`,
    });
    setForm({ name: '', email: '', phone: '', date: '', time: '', guests: '2 Guests', notes: '' });
    setErrors({});
  }

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#7C8A5D] text-xl">Reserve a Table</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground/70 flex items-center gap-1.5"><User size={13} /> Full Name</label>
            <input value={form.name} onChange={set('name')} className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] ${errors.name ? 'border-red-400' : 'border-border'}`} />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground/70 flex items-center gap-1.5"><Mail size={13} /> Email</label>
              <input type="email" value={form.email} onChange={set('email')} className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] ${errors.email ? 'border-red-400' : 'border-border'}`} />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground/70 flex items-center gap-1.5"><Phone size={13} /> Phone</label>
              <input type="tel" value={form.phone} onChange={set('phone')} className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] ${errors.phone ? 'border-red-400' : 'border-border'}`} />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground/70 flex items-center gap-1.5"><Calendar size={13} /> Date</label>
              <input type="date" value={form.date} onChange={set('date')} min={today} className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] ${errors.date ? 'border-red-400' : 'border-border'}`} />
              {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-foreground/70 flex items-center gap-1.5"><Users size={13} /> Guests</label>
              <select value={form.guests} onChange={set('guests')} className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]">
                {GUEST_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 flex items-center gap-1.5"><Clock size={13} /> Preferred Time</label>
            <div className="space-y-2">
              {TIME_SLOTS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs text-foreground/50 mb-1.5">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.slots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, time: slot }))}
                        className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${form.time === slot ? 'bg-[#7C8A5D] text-white border-[#7C8A5D]' : 'border-border hover:border-[#7C8A5D] hover:text-[#7C8A5D]'}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {errors.time && <p className="text-xs text-red-500">{errors.time}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground/70">Special Requests</label>
            <textarea rows={2} value={form.notes} onChange={set('notes')} placeholder="Allergies, special occasion, seating preference..." className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] resize-none" />
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-[#7C8A5D] text-white py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed">
            {isSubmitting ? 'Confirming…' : 'Confirm Reservation'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
