import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function MyForm() {
  const [first, setFirst] = useState('+7');
  const [finish, setFinished] = useState(false);
  const [isLoading, setLoading] = useState(false); // Состояние для отслеживания загрузки
  const [isInvalid, setIsInvalid] = useState(false); // Состояние для отслеживания ошибки
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true); // Устанавливаем isLoading в true при отправке формы

    try {
      // Ваш код для отправки данных на сервер
      console.log('Sending data:', data);

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
        <div className='text-center'>спасибо за заявку, наш оператор скоро с вами свяжется</div>
      </div>
    );
  }
  return (
    <form
      className='flex flex-col sm:justify-center sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 container mx-auto max-w-7xl'
      onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('phone', { pattern: /^\+7\d{10}$/ })}
        type='tel'
        label='Phone'
        value={first}
        onChange={handlePhoneChange}
        variant='bordered'
        fullWidth
        errorMessage='Введите корректный номер телефона'
        isInvalid={isInvalid} // Передаем состояние ошибки в компонент Input
      />
      <Button className='w-full sm:w-auto' color='success' isLoading={isLoading} type='submit'>
        {isLoading ? 'Отправка...' : 'Оставить заявку'}
      </Button>
    </form>
  );
}
