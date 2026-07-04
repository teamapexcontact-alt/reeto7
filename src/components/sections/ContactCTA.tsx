import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { MessageSquare, Mail, MapPin, Calendar } from 'lucide-react';


export const ContactCTA: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(siteConfig.getWhatsAppLink("Hi ReelTo7, I'm ready to scale our content. Let's talk!"), '_blank');
  };

  const handleEmail = () => {
    window.open(siteConfig.getMailtoLink("ReelTo7 Service Inquiry"), '_self');
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Intense background glow behind contact box */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-primary/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="rounded-3xl border border-red-primary/18 bg-gradient-to-b from-[#141414] to-[#0A0A0A] p-8 md:p-16 text-center shadow-2xl relative">
          
          {/* Subtle sparkles texture */}
          <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

          {/* Section Header */}
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-primary/10 text-red-primary border border-red-primary/18 mb-6">
              <Calendar className="h-6 w-6" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              Ready to Grow <br className="hidden sm:block" />
              with <span className="text-red-gradient">Reels?</span>
            </h2>
            
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Book your free 30-minute content strategy call. We'll audit your current Instagram presence and map out a customized 3-step growth plan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-12">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-2 rounded-xl bg-red-gradient px-8 py-4 text-sm font-bold text-white hover:scale-[1.02] active:scale-98 shadow-xl shadow-red-primary/18 transition-all cursor-pointer w-full sm:w-auto"
              >
                <MessageSquare className="h-4.5 w-4.5 fill-white stroke-white" />
                <span>Chat on WhatsApp</span>
              </button>
              
              <button
                onClick={handleEmail}
                className="flex items-center justify-center gap-2 rounded-xl border border-red-primary/18 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 hover:border-red-primary hover:shadow-[0_0_15px_rgba(255,59,77,0.18)] transition-all cursor-pointer w-full sm:w-auto"
              >
                <Mail className="h-4.5 w-4.5" />
                <span>Email ReelTo7</span>
              </button>
            </div>

            {/* Contact details metadata strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-text-muted border-t border-white/5 pt-8 w-full">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-primary" />
                <span>Based in {siteConfig.location}</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-white/10"></div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-primary" />
                <span>{siteConfig.email}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default ContactCTA;
