import { Sparkles, Heart, Star } from 'lucide-react';

interface NewYearWishPageProps {
  isActive: boolean;
}

export const NewYearWishPage = ({ isActive }: NewYearWishPageProps) => {
  return (
    <div className="flex w-full h-full overflow-hidden">
      {/* Left Page */}
      <div className="w-1/2 paper-left relative p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center border-r border-diary-ink/10 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
        <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-diary-gold/50 pointer-events-none">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
        </div>
        <div className="absolute bottom-4 right-4 text-diary-gold/50 pointer-events-none">
          <Star className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center py-4">
          <h2 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl gold-text mb-4 sm:mb-6">
            Happy New Year
          </h2>
          <p className="font-script text-lg sm:text-xl md:text-2xl text-diary-ink/80">
            2026
          </p>
          <div className="mt-4 sm:mt-6 flex justify-center gap-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-diary-gold/70 fill-diary-gold/30" />
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-diary-gold fill-diary-gold/50" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-diary-gold/70 fill-diary-gold/30" />
          </div>
        </div>
      </div>
      
      {/* Right Page */}
      <div className="w-1/2 paper-right relative p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
        <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none"></div>
        
        {/* Decorative corner */}
        <div className="absolute top-4 right-4 text-accent/50 pointer-events-none">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-accent/30" />
        </div>
        
        <div className="relative z-10 py-4 pb-8">
          <p className="font-script text-sm sm:text-base md:text-lg lg:text-xl text-diary-ink/80 leading-relaxed text-center mb-4 sm:mb-6">
            2026 mai jata hua ek last time baat sunn lena...Please
          </p>
          
          <p className="font-script text-sm sm:text-base md:text-lg lg:text-xl text-diary-ink/80 leading-relaxed text-center mb-4 sm:mb-6">
            Please gussa mai asa uthi sidhi cheeza ni kiya kro...Hm chaya kuch b ho...pr kabhi apse asa kisi cheez ki ummeed toh rakhi hogi...Mujhe ni pta apki life mai abhi kya chl rha kya nii pr...jo kuch hoga jo b presani hogi dushre way se thik krna ki koshih krke dekho...Ya sb krna sa kuch sahi toh ni hoga...Please..
          </p>
          
          <p className="font-script text-sm sm:text-base md:text-lg lg:text-xl text-diary-ink/80 leading-relaxed text-center mb-4 sm:mb-6">
            Start Your New Year with a new laughter, and a big smile...
          </p>
          
          <p className="font-script text-base sm:text-lg md:text-xl lg:text-2xl text-diary-ink text-center mt-4 sm:mt-6">
            Very Happpy New Year Shkachu 💕
          </p>
          
          <div className="mt-6 sm:mt-8 flex justify-center pb-4">
            <div className="px-4 py-2 border border-diary-gold/30 rounded-lg">
              <p className="font-serif text-xs sm:text-sm text-diary-ink/60 text-center">
                Swipe to see the back cover →
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
