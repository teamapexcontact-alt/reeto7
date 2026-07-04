import React from 'react';
import { socialProofStats } from '../../data/portfolio';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialProof: React.FC = () => {
  return (
    <section id="reviews" className="py-24 px-6 bg-gradient-to-b from-bg-dark to-[#0D0D0D] border-t border-white/5 relative">
      {/* Background ambient light */}
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-red-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-red-primary/10 border border-red-primary/30 px-4 py-1 text-xs font-semibold tracking-wider text-red-primary uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Loved by <span className="text-red-gradient">Local Brands</span>
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            See what businesses and creators in Hyderabad say about working with ReelTo7 to streamline their short-form content pipeline.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialProofStats.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl bg-bg-card p-8 border border-white/5 shadow-lg flex flex-col justify-between"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute right-6 top-6 text-red-primary/10">
                <Quote className="h-10 w-10 fill-red-primary/10 stroke-none" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 text-red-primary mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-red-primary stroke-red-primary" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm italic leading-relaxed text-white/90 mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-white/5 pt-4">
                <div className="text-xs font-bold tracking-wider text-red-primary uppercase">
                  {testimonial.author}
                </div>
                <div className="text-[10px] text-text-muted mt-0.5">Verified Partner</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Horizontal Stats Strip */}
        <div className="rounded-2xl border border-red-primary/20 bg-bg-card/40 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center backdrop-blur-sm">
          <div>
            <div className="text-3xl md:text-4xl font-black text-red-gradient">
              {socialProofStats.followers}
            </div>
            <div className="text-[11px] font-bold tracking-wider text-text-muted uppercase mt-2">
              Instagram Followers
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-red-gradient">
              {socialProofStats.reelsDelivered}
            </div>
            <div className="text-[11px] font-bold tracking-wider text-text-muted uppercase mt-2">
              Reels Delivered
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-red-gradient">
              {socialProofStats.countries}
            </div>
            <div className="text-[11px] font-bold tracking-wider text-text-muted uppercase mt-2">
              States/Regions
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-black text-red-gradient">
              {socialProofStats.clientSatisfaction}
            </div>
            <div className="text-[11px] font-bold tracking-wider text-text-muted uppercase mt-2">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialProof;
