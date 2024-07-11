'use client';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useEffect, useState } from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';

type PropType = {
  slides: any;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000 }), // Настройки автовоспроизведения
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    console.log('autoplay', autoplay);
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());

    // Обработчики событий автовоспроизведения
    const playHandler = () => setIsPlaying(true);
    const stopHandler = () => setIsPlaying(false);

    emblaApi
      .on('autoplay:play', playHandler)
      .on('autoplay:stop', stopHandler)
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()));

    // При размонтировании компонента отписываемся от событий
    return () => {
      emblaApi.off('autoplay:play', playHandler);
      emblaApi.off('autoplay:stop', stopHandler);
    };
  }, [emblaApi]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide: any, index: number) => (
            <div className='embla__slide' key={index}>
              {slide.data}
            </div>
          ))}
        </div>
      </div>

      <div className='embla__buttons2'>
        <PrevButton
          // className='embla__button--prev1'
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          // className='embla__button--next1'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
};

export default EmblaCarousel;
