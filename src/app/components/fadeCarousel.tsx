
import { EmblaOptionsType } from 'embla-carousel';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Image from 'next/image';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const FadeCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className='embla1'>
      <div className='embla__viewport1' ref={emblaRef}>
        <div className='embla__container1'>
          {slides.map((index) => (
            <div className='embla__slide1' key={index}>
              <div className="relative w-full aspect-[3902/2190]">
                <Image
                  className="embla__slide__img1 object-cover"
                  src={`/slider-${index}.jpg`} 
                  alt={`Slide ${index}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls1'>
        <div className='embla__buttons1'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots1'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot1'.concat(
                index === selectedIndex ? ' embla__dot--selected1' : '',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FadeCarousel;
