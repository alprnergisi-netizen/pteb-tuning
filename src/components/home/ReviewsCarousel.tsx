"use client";

const REVIEWS = [
  {
    name: "Speed Safe",
    text: "Had them connect with us for their vehicle and couldn't help but enquire about boosting up some of our technicians cars. Very professional and friendly, and ran me through everything I needed in a timely manner. Can say now after almost 6 months of the tune on our cars, the power difference was and still is incredible all while reliability and safety for the cars were their highest priority. Earned our highest recommendations PTEB.",
    date: "4 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Andrew Marzolo",
    text: "I brought my 2020 Golf R in for an APR stage 1 ECU/TCU tune. Besim explained everything in detail in regards to everything that's done to the car prior, during and post tune. My car is an absolute beast and I would definitely recommend going to PTEB for a tune on your European car, they truly know how to turn your car into a rocket. Thank you guys for the amazing tune and awesome experience behind the scenes when it comes to tuning!",
    date: "5 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Deigo Delavega",
    text: "There is no words to describe pteb beside they are by far the best tuners and mechanic I highly recommend pteb my car has transformed in a weapon from now on myself and my mates will be bringing our cars here. Thank you guys all of you for the amazing job you done on my car.",
    date: "5 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Chris Bellucci",
    text: "Absolutely blown away by the results. Besim is incredibly knowledgeable and passionate about what he does. The car pulls so hard now and the power delivery is so much smoother. 100% recommend PTEB to anyone looking to get a proper tune done.",
    date: "3 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Jake Thornton",
    text: "Got my Audi S3 tuned here and it's like a completely different car. Stage 1 gains are unreal for a software-only tune. The whole process was professional from start to finish — pre-health check, dyno session, road test. Got my logs and graphs to take home too. Highly recommend.",
    date: "2 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Sam Williams",
    text: "PTEB tuned my BMW M4 and the results were outstanding — 334kW on stock turbos is insane. Besim knows exactly what he's doing and doesn't rush the process. Every pull is logged, every decision is explained. This is how a professional tune should be done.",
    date: "6 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Michael Papadopoulos",
    text: "Used the Warport device for remote tuning from Sydney and honestly couldn't be happier. Got constant updates from the team, the tune file was perfect first time, and the car pulls so much harder. Wouldn't hesitate to use PTEB again.",
    date: "1 month ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
  {
    name: "Tom Nguyen",
    text: "Best tuning shop in Melbourne without question. Brought my Golf R in for a Stage 2 tune and walked away with 255kW at the wheels. Besim was thorough, transparent and genuinely cared about getting the result right. Will be back for flex fuel.",
    date: "7 months ago",
    href: "https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne",
  },
];

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 stars">
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <a
      href={review.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col flex-shrink-0 w-72 sm:w-80 p-5 sm:p-6 bg-white border border-[#E5E7EB] hover:border-[#FC222D]/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
      style={{ minHeight: '200px' }}
    >
      <div className="flex items-center justify-between mb-4">
        <Stars />
        <GoogleIcon />
      </div>
      <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-5 line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4F6]">
        <div className="w-8 h-8 rounded-full bg-[#FC222D]/10 border border-[#FC222D]/20 flex items-center justify-center text-[#FC222D] text-xs font-black shrink-0">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-[#111] text-xs font-bold">{review.name}</p>
          <p className="text-[#9CA3AF] text-[10px]">{review.date}</p>
        </div>
      </div>
    </a>
  );
}

export function ReviewsCarousel() {
  // Duplicate for seamless loop
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }} aria-hidden="true" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }} aria-hidden="true" />

      <div
        className="flex gap-3 sm:gap-5 w-max"
        style={{
          animation: 'reviewsScroll 40s linear infinite',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>

      <style>{`
        @keyframes reviewsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
