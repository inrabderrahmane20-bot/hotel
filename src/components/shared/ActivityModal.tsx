import { toast } from 'sonner';
import { Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ImageWithFallback } from './ImageWithFallback';
import type { Activity } from '@/constants';

interface Props {
  activity: Activity | null;
  onClose: () => void;
}

export function ActivityModal({ activity, onClose }: Props) {
  if (!activity) return null;
  const Icon = activity.icon;

  function handleBook() {
    onClose();
    toast.success(`${activity.title} booked!`, {
      description: 'Our team will reach out within 24 hours with full details.',
    });
  }

  return (
    <Dialog open={!!activity} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative h-56 md:h-72">
          <ImageWithFallback
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <div className="bg-[#7C8A5D]/90 backdrop-blur-sm p-2.5 rounded-full">
              <Icon className="text-[#C9A961]" size={22} />
            </div>
            <h2 className="text-white text-2xl font-semibold">{activity.title}</h2>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-foreground/70 leading-relaxed">{activity.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 bg-[#FAF7F2] rounded-xl p-3">
              <Clock size={18} className="text-[#C9A961] flex-shrink-0" />
              <div>
                <p className="text-xs text-foreground/50">Duration</p>
                <p className="text-sm font-medium">{activity.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#FAF7F2] rounded-xl p-3">
              <DollarSign size={18} className="text-[#C9A961] flex-shrink-0" />
              <div>
                <p className="text-xs text-foreground/50">Price</p>
                <p className="text-sm font-medium">{activity.price}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">What's Included</h4>
            <ul className="space-y-2">
              {activity.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                  <CheckCircle2 size={15} className="text-[#7C8A5D] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBook}
            className="w-full bg-[#7C8A5D] text-white py-3 rounded-lg hover:bg-[#5A6842] transition-colors shadow-md font-medium"
          >
            Book This Activity
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
