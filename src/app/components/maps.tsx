'use client';
import { Divider } from '@nextui-org/react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
export default function Maps() {
  return (
    <div className=' p-5 '>
      <div className=' m-4' id='section'>
        <h4 className='text-large font-medium'>Наш адрес</h4>
        <Divider />
      </div>
      <YMaps>
        <Map
          width='100%'
          // включаем модули, отвечающие за всплывающие окна над геообъектами
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          state={{
            center: [55.653462, 37.626385], // координаты центра карты
            zoom: 15,
          }}>
          <Placemark
            geometry={[55.653462, 37.626385]}
            options={{
              preset: 'islands#nightStretchyIcon', // список темплейтов на сайте яндекса
              iconColor: 'blue', // цвет иконки
            }}
            properties={{
              iconContent: 'Volimfit', // пару символов помещается
              hintContent: '<em>Подробнее</em>',
              balloonContent: `<div class="">
              <h4>Наш адрес</h4>
              <p>
              Москва,
                <br />
             Каширский проезд, д.25, корп 4, пом 13Н
              </p>
        
            </div>`,

              // <a href="#">Схема проезда</a>
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}
