import { useState } from 'react';
import { toast } from 'sonner';
import { Calendar, Users, User, Mail, Phone, BedDouble, X } from 'lucide-react';
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

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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

  const field = (label: string, icon: React.ReactNode, id: keyof FormState, type = 'text', extra?: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm font-medium text-foreground/70 flex items-center gap-1.5">
        {icon} {label}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={set(id)}
        className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] ${errors[id] ? 'border-red-400' : 'border-border'}`}
        {...extra}
      />
      {errors[id] && <p className="text-xs text-red-500">{errors[id]}</p>}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#7C8A5D] text-xl">Reserve Your Stay</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
            {field('First Name', <User size={13} />, 'firstName')}
            {field('Last Name', <User size={13} />, 'lastName')}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {field('Email', <Mail size={13} />, 'email', 'email')}
            {field('Phone', <Phone size={13} />, 'phone', 'tel')}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {field('Check-in', <Calendar size={13} />, 'checkIn', 'date', { min: today })}
            {field('Check-out', <Calendar size={13} />, 'checkOut', 'date', { min: form.checkIn || today })}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="guests" className="text-sm font-medium text-foreground/70 flex items-center gap-1.5">
                <Users size={13} /> Guests
              </label>
              <select id="guests" value={form.guests} onChange={set('guests')} className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]">
                {GUEST_OPTIONS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="roomType" className="text-sm font-medium text-foreground/70 flex items-center gap-1.5">
                <BedDouble size={13} /> Room Type
              </label>
              <select id="roomType" value={form.roomType} onChange={set('roomType')} className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2]">
                {ROOM_TYPES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <label htmlFor="specialRequests" className="text-sm font-medium text-foreground/70">Special Requests</label>
            <textarea
              id="specialRequests"
              rows={3}
              value={form.specialRequests}
              onChange={set('specialRequests')}
              placeholder="Dietary requirements, celebrations, accessibility needs..."
              className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7C8A5D] bg-[#FAF7F2] resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#7C8A5D] text-white py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending Request…' : 'Confirm Booking Request'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
