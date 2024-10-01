import {
  Card,
  CardHeader,
  Chip,
  Image,
  useDisclosure
} from '@nextui-org/react';

interface TrainerSlideProps {
  name: string;
  title: string;
  education: string;
  experience: string;
  specializations: string[];
  achievements: string[];
  imageSrc: string;
  roles: string[];
}

export default function TrainerSlide({
  name,
  title,
  education,
  experience,
  specializations,
  achievements,
  imageSrc,
  roles
}: TrainerSlideProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div>
        <Card className="col-span-12 sm:col-span-4 ">
          <CardHeader className="absolute bg-[#000000c4] z-10 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
            <h4 className="text-white font-medium text-large">{name}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={imageSrc}
          />
        </Card>

        <div className="relative p-4 text-white" style={{ position: "relative", zIndex: 1 }}>
          <div className="diagonal-bg absolute inset-0 -z-1"></div>
          <p className="relative z-10 mb-1">
            🎓 Образование: {education}
          </p>
          <p className="relative z-10 mb-1">🏆 Опыт работы: {experience}</p>
          <p className="relative z-10 mb-1">
            🔹 Специализация:
            <ul className="list-disc ml-4">
              {specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </p>
          <p className="relative z-10 mb-1">
            🏅 Достижения:
            <ul className="list-disc ml-4">
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </p>
        </div>
    

      {roles.map((role, index) => (
        <Chip key={index} color="primary" variant="solid" className="mt-2">
          {role}
        </Chip>
      ))}

</div>
    </>
  );
}
