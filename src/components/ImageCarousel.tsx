import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageCarouselProps {
  slides: {
    src: string;
    alt: string;
  }[];
  ariaLabel?: string;
}

/**
 * Accessible Image Carousel Component
 * 
 * Usage:
 * <ImageCarousel 
 *   slides={[
 *     { src: imagePath1, alt: "Description of slide 1" },
 *     { src: imagePath2, alt: "Description of slide 2" },
 *   ]}
 *   ariaLabel="Case study screenshots"
 * />
 * 
 * To update slides:
 * 1. Replace the 'src' paths with your actual screenshot paths
 * 2. Update the 'alt' text to describe each screenshot accurately
 * 3. Add or remove slide objects from the array as needed
 */
const ImageCarousel = ({ slides, ariaLabel = "Image carousel" }: ImageCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <section
      className="relative w-full max-w-5xl mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl border-2 border-border shadow-xl bg-muted/30" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${slides.length}`}
            >
              <div className="relative aspect-video w-full bg-muted">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl transition-all focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed h-12 w-12"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 shadow-lg hover:shadow-xl transition-all focus-visible-ring disabled:opacity-50 disabled:cursor-not-allowed h-12 w-12"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Pagination Dots */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Carousel pagination">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all focus-visible-ring ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === selectedIndex}
              role="tab"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ImageCarousel;
