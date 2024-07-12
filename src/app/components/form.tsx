import { Button, Checkbox, Input } from '@nextui-org/react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import Privacy from './privacy';

export default function MyForm() {
  const [first, setFirst] = useState('+7');
  const [finish, setFinished] = useState(false);
  const [isLoading, setLoading] = useState(false); // Состояние для отслеживания загрузки
  const [isInvalid, setIsInvalid] = useState(false); // Состояние для отслеживания ошибки
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Состояние для reCAPTCHA
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    if (!recaptchaValue) {
      alert('Пожалуйста, подтвердите, что вы не робот.');
      return;
    }

    setLoading(true); // Устанавливаем isLoading в true при отправке формы

    try {
      // Ваш код для отправки данных на сервер
      console.log(data);
      // http://109.172.114.125:8111
      const url = 'https://api.volimfit.ru/mail/send-email';
      const body = {
        number: data.phone,
        recaptcha: recaptchaValue,
      };
      console.log(JSON.stringify(body));
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
      // Можно добавить имитацию задержки для тестирования
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Если запрос успешен, можно использовать стандартный alert или другой метод уведомления
    } catch (error) {
      // Если произошла ошибка при отправке, также можно использовать alert или другой метод уведомления
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
      setFinished(true); // В любом случае устанавливаем isLoading в false
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\+?\d*$/.test(value) || value === '') {
      setFirst(value);
      setIsInvalid(false); // Сбрасываем ошибку при вводе корректного значения

      // Проверяем длину введенного номера телефона
      if (value.length < 11) {
        setIsInvalid(true); // Устанавливаем ошибку, если номер телефона слишком короткий
      }
    } else {
      setIsInvalid(true); // Устанавливаем ошибку при некорректном вводе
    }
  };

  if (finish) {
    return (
      <div className='animate-fadeIn container mx-auto max-w-7xl flex justify-center items-center'>
        <div className='text-center'>
          Спасибо за заявку!
          <br /> Менеджер скоро с вами свяжется
        </div>
      </div>
    );
  }
  return (
    <form
      className='  sm:justify-center sm:flex-row items-center sm:space-y-0 sm:space-x-4 container mx-auto max-w-7xl'
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('phone', { pattern: /^\+7\d{10}$/ })}
        type='tel'
        label='Номер'
        size='lg'
        className='w-full  '
        value={first}
        onChange={handlePhoneChange}
        variant='bordered'
        errorMessage={isInvalid || errors.phone ? 'Введите корректный номер телефона' : ''}
        isInvalid={isInvalid || !!errors.phone}
      />
      <Checkbox
        {...register('terms', { required: true })}
        isInvalid={!!errors.terms}
        className='p-0 m-0'>
        Я согласен с правилами обработки персональных данных
      </Checkbox>
      <Privacy />
      <ReCAPTCHA
        className=' pt-5 sm:pt-10  pb-5 sm:pb-10'
        sitekey={`${
          process.env.RECAPTCHA_SECRET_KEY || '6LeHuwwqAAAAAHvZD1LBGHyN9cogqSUoDTSsvfk8'
        }`} // Замените на ваш site key
        onChange={(value: any) => setRecaptchaValue(value)}
      />

      <Button
        variant='ghost'
        className='w-full sm:w-auto'
        color='success'
        isLoading={isLoading}
        type='submit'>
        {isLoading ? 'Отправка...' : 'Оставить заявку'}
      </Button>
    </form>
  );
}
