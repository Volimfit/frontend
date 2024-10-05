import {
  Card,
  CardHeader,
  Chip,
  Divider,
  Image,
} from '@nextui-org/react';
import Link from 'next/link';

interface TrainerSlideProps {
  name: string;
  title: string;
  link: string;
  img: string;
 
}

export default function TrainerSlide({
  name,
  title,
  link,
  img
}: TrainerSlideProps) {


  return (
  <Link href={`/trainers/${link}`} className="mb-4">
  
  
  <Card isPressable className="z-0 mb-4">
    <CardHeader className="absolute bottom-0 bg-[#000000c4] z-10 flex-col items-start ">
      <p className="text-tiny text-white/60  font-bold text-left">{title}</p>
      <h4 className="text-white font-medium text-large text-left">{name}</h4>
    </CardHeader>
    <Image
removeWrapper
alt="Card background"
className=" m-1 z-0"
src={`${img}`}
/>
</Card>
  </Link>
  );
}
