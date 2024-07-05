'use client';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    console.log(autoplay);
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on('autoplay:play', () => setIsPlaying(true))
      .on('autoplay:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  return (
    <>
      <div className='embla   '>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((index) => (
              <div className='embla__slide ' key={index}>
                <img
                  src={'monya.svg'}
                  alt='...'
                  className='absolute max-w-[1300px]  bottom-0 right-0  -z-40 fill-success'
                />
                <div className=' inset-0 flex items-start justify-start bg-black bg-opacity-50'>
                  <div className='text-center text-white p-4 bg-black bg-opacity-70 rounded-lg'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-4 bg-success'>
                      Старт продаж с {index + 1} июля
                    </h2>
                    <p className='text-lg md:text-2xl mb-2'>
                      Успей купить абонемент со скидкой до 50%
                    </p>
                    <p className='text-sm md:text-lg'>Получить больше информации по тел.</p>
                  </div>
                </div>
                {/* <div className='embla__slide__number'>
                  <span></span>
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/* <div className='embla__controls'>
          <div className='embla__buttons'></div>

          <button className='embla__play' onClick={toggleAutoplay} type='button'>
            {isPlaying ? 'Stop' : 'Start'}
          </button>
        </div> */}
      </div>
    </>
  );
};

export default EmblaCarousel;
