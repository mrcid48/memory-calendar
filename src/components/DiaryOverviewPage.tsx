import { Heart, Book, ImagePlus } from 'lucide-react';

interface DiaryOverviewPageProps {
  isActive: boolean;
}

// Replace these placeholder URLs with your own photo URLs!
export const overviewPhotos = [
  "/Photos/sh1.jpg",
  "/Photos/sh7.jpg",
  "/Photos/sh12.jpg",
  "/Photos/sh17.jpg",
];

export const DiaryOverviewPage = ({ isActive }: DiaryOverviewPageProps) => {
  return (
    <div className="flex w-full h-full bg-diary-paper">
      {/* Left Page - Title & Introduction */}
      <div className="w-1/2 paper-left relative p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col border-r border-diary-ink/10 overflow-y-auto">
        <div className="relative z-20 flex-1 flex flex-col">
          {/* Decorative header */}
          <div className="text-center mb-4 sm:mb-6">
            <Book className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-diary-gold mb-2" />
            <h1 className="font-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-diary-ink mb-2">
              Our Year Together
            </h1>
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-8 sm:w-12 bg-diary-gold/50"></div>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
              <div className="h-px w-8 sm:w-12 bg-diary-gold/50"></div>
            </div>
          </div>
          
          {/* Introduction text */}
          <div className="bg-amber-50/50 rounded-lg p-3 sm:p-4 md:p-5 mb-4 sm:mb-6">
            <p className="font-serif text-diary-ink/80 text-xs sm:text-sm md:text-base leading-relaxed first-letter:text-xl first-letter:sm:text-2xl first-letter:md:text-3xl first-letter:font-script first-letter:float-left first-letter:mr-1 first-letter:text-diary-gold">
              2025 12 months, 365 days, 8760 hours, 525600 minutes sunne mai toh bhaut lamba time lagta hai...par actual mai tha nhi...Is saal toh pta hi ni lga pura saal kya chalta rha mind mai na time ka kuch pta lga...kb January se December se b puch gya. Aur ab toh phir January aa gya...Kuch jada yaad b nhi hai is saal ke bara mai bs asa lagta hai ya year bs sikhna ka liya aaya tha. Dono ko hi IS year ne bhaut kuch sikha diya bhaut kuch experience karwaya..bhaut kuch asa jo kabhi hm toh nhi chata tha. Jada kuch likhna ni chata is year ke bara mai shayd isliya website hi bna rha hu. Koshish krunga ki ya padh kr apko bs achi cheeza hi yaad aaya is year ke bara mai. Aur umeed bhi ki ye year hi hum dono ki life ka worst year rhe...2026 Apki life mai sirf khushiya hi khushiya le kr aaya aur one of the best year bn jai apki life ka.
              May you always be happy and smiling. Happy New Year ! have a wonderful year ahead!!
            </p>
          </div>
          
          {/* Dedication */}
          <div className="text-center mt-auto">
            <p className="font-script text-lg sm:text-xl md:text-2xl text-diary-ink/70 italic">
              "Start Your Journey With a Big Smile and a Happy Face"
            </p>
          </div>
        </div>
        
        {/* Page label */}
        <div className="text-center text-diary-ink/40 text-[8px] sm:text-[10px] md:text-xs font-serif mt-2">
          INTRODUCTION
        </div>
      </div>
      
      {/* Right Page - Photo Gallery */}
      <div className="w-1/2 paper-right relative p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col overflow-y-auto">
        <div className="relative z-20 flex-1 flex flex-col">
          <h2 className="font-serif text-diary-ink/80 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 md:mb-6 text-center">
            Our Favorite Memories
          </h2>
          
          {/* Photo grid - 4 photos */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 flex-1">
            {overviewPhotos.map((photo, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden border-2 border-diary-gold/30 shadow-md hover:shadow-lg transition-shadow group"
              >
                <img 
                  src={photo} 
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-diary-ink/0 group-hover:bg-diary-ink/10 transition-colors" />
                <div className="absolute bottom-1 right-1 bg-white/80 rounded px-1.5 py-0.5">
                  <span className="text-[8px] sm:text-[10px] text-diary-ink/60 font-serif">
                    Photo {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-3 sm:mt-4 md:mt-6">
            <p className="text-[10px] sm:text-xs md:text-sm text-diary-ink/60 font-serif">
              Swipe or click to begin our journey →
            </p>
          </div>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-t-2 border-r-2 border-diary-gold/30 opacity-50"></div>
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 border-b-2 border-l-2 border-diary-gold/30 opacity-50"></div>
        
        {/* Page label */}
        <div className="text-center text-diary-ink/40 text-[8px] sm:text-[10px] md:text-xs font-serif mt-2">
          OVERVIEW
        </div>
      </div>
    </div>
  );
};
