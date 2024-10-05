import { Divider } from "@nextui-org/react";
import MyForm from "./form";

const SectionForm = () => {


  return <div className='min-h-96   inset-0 w-full h-full     '>
    <div
      className='min-h-32 md:min-h-48 container mx-auto max-w-7xl  p-4  animate-wave rounded-lg'
      id='form'
      style={{
        backgroundImage: `url(/wave1.svg)`,
        backgroundRepeat: 'no-repeat',

        backgroundAttachment: 'local',
        backgroundColor: '#3bc9db',
      }}>
      <h4 className='text-2xl font-medium '>Присоединяйтесь к нам</h4>
      <Divider className='bg-sky-950 mb-4 md:mb-0' />
      <p className='text-large text-default-500'>
        Оставьте заявку и получите абонемент со скидкой
      </p>
    </div>
    <MyForm />
  </div>
}
export default SectionForm;