import { useState } from 'react';
import { toast } from 'sonner';
import { Calendar, Users, User, Mail, Phone, BedDouble } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ROOM_TYPES = [
  { id: 'standard', label: 'Standard Room — $150 / night' },
  { id: 'deluxe', label: 'Deluxe Room — $220 / night' },
  { id: 'junior-suite', label: 'Junior Suite — $320 / night' },
  { id: 'riad-suite', label: 'Riad Suite — $450 / night' },
];

const GUEST_OPTIONS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'];

interface Props {
  open: boolean;
  onClose: () => void;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
}

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  specialRequests: string;
}

const today = new Date().toISOString().split('T')[0];

export function BookingModal({ open, onClose, initialCheckIn = '', initialCheckOut = '', initialGuests = '2 Guests' }: Props) {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    guests: initialGuests,
    roomType: 'standard',
    specialRequests: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.checkIn) e.checkIn = 'Required';
    if (!form.checkOut) e.checkOut = 'Required';
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn)
      e.checkOut = 'Must be after check-in';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    onClose();
    toast.success('Booking request received!', {
      description: `We'll contact ${form.email} within 24 hours to confirm your stay.`,
    });
    setForm({ firstName: '', lastName: '', email: '', phone: '', checkIn: '', checkOut: '', guests: '2 Guests', roomType: 'standard', specialRequests: '' });
    setErrors({});
  }

  const inputCls = (field: keyof FormState) =>
    `w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] ${errors[field] ? 'border-red-400' : 'border-border'}`;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl w-full max-h-[92vh] overflow-y-auto mx-2 sm:mx-auto">
        <DialogHeader>
          <DialogTitle className="text-[#7C8A5D] text-xl">Reserve Your Stay</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><User size={12} /> First Name</label>
              <input value={form.firstName} onChange={set('firstName')} className={inputCls('firstName')} />
              {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><User size={12} /> Last Name</label>
              <input value={form.lastName} onChange={set('lastName')} className={inputCls('lastName')} />
              {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><Mail size={12} /> Email</label>
              <input type="email" value={form.email} onChange={set('email')} className={inputCls('email')} />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><Phone size={12} /> Phone</label>
              <input type="tel" value={form.phone} onChange={set('phone')} className={inputCls('phone')} />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><Calendar size={12} /> Check-in</label>
              <input type="date" value={form.checkIn} onChange={set('checkIn')} min={today} className={inputCls('checkIn')} />
              {errors.checkIn && <p className="text-xs text-red-500">{errors.checkIn}</p>}
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><Calendar size={12} /> Check-out</label>
              <input type="date" value={form.checkOut} onChange={set('checkOut')} min={form.checkIn || today} className={inputCls('checkOut')} />
              {errors.checkOut && <p className="text-xs text-red-500">{errors.checkOut}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><Users size={12} /> Guests</label>
              <select value={form.guests} onChange={set('guests')} className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]">
                {GUEST_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground/60 flex items-center gap-1.5"><BedDouble size={12} /> Room Type</label>
              <select value={form.roomType} onChange={set('roomType')} className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]">
                {ROOM_TYPES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground/60">Special Requests</label>
            <textarea rows={3} value={form.specialRequests} onChange={set('specialRequests')} placeholder="Dietary requirements, celebrations, accessibility needs…" className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] resize-none" />
          </div>
          <button type="submit" disabled={isSubmitting} className="w-full bg-[#7C8A5D] text-white py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed text-sm">
            {isSubmitting ? 'Sending Request…' : 'Confirm Booking Request'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
