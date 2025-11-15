interface DeviceMockupProps {
  screenshot: string;
  alt: string;
  variant?: 'mobile' | 'tablet';
}

const DeviceMockup = ({ screenshot, alt, variant = 'mobile' }: DeviceMockupProps) => {
  const isMobile = variant === 'mobile';
  
  return (
    <div className="relative w-full flex items-center justify-center py-8 px-4">
      {/* Device Frame */}
      <div 
        className={`
          relative bg-gradient-to-br from-border/30 to-border/60 rounded-[2.5rem] 
          ${isMobile ? 'w-[280px] h-[560px]' : 'w-[400px] h-[520px]'}
          shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]
          group-hover:scale-[1.02]
        `}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Screen Bezel */}
        <div 
          className={`
            absolute inset-0 bg-background/5 backdrop-blur-sm
            ${isMobile ? 'rounded-[2.5rem] p-3' : 'rounded-[2.5rem] p-4'}
          `}
        >
          {/* Notch/Camera (for mobile) */}
          {isMobile && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background/90 rounded-b-3xl z-10 shadow-lg" />
          )}
          
          {/* Screen Content */}
          <div 
            className={`
              relative w-full h-full bg-muted/80 overflow-hidden
              ${isMobile ? 'rounded-[2rem]' : 'rounded-[2rem]'}
              shadow-inner
            `}
          >
            <img
              src={screenshot}
              alt={alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            
            {/* Screen Glare Effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"
            />
          </div>
        </div>
        
        {/* Home Button/Indicator (for mobile) */}
        {isMobile && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-background/30 rounded-full" />
        )}
      </div>
      
      {/* Reflection/Shadow Effect */}
      <div 
        className={`
          absolute bottom-0 left-1/2 -translate-x-1/2
          ${isMobile ? 'w-[280px] h-32' : 'w-[400px] h-32'}
          bg-gradient-to-b from-primary/5 to-transparent opacity-50 blur-2xl -z-10
        `}
      />
    </div>
  );
};

export default DeviceMockup;
