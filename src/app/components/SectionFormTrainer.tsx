import { Divider } from "@nextui-org/react";
import FormTrainer from "./formTrainer";
interface SectionFormTrainerProps {
  name: string;


}
const SectionFormTrainer = ({
  name
}: SectionFormTrainerProps) => {


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
      <h4 className='text-2xl font-medium '>Записаться на трениковку</h4>
      <Divider className='bg-sky-950 mb-4 md:mb-0' />
      <p className='text-large text-default-500'>
        Оставьте заявку и наш менеджер согласует персональную тренировку
      </p>
    </div>
    <FormTrainer  name={name}/>
  </div>
}
export default SectionFormTrainer;