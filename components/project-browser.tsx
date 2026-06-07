import Image from 'next/image';

type Props = {
  image: string;
};

const ProjectBrowser = ({ image }: Props) => {
  return (
    <div className=" relative overflow-hidden rounded-4xl border border-primary/20 bg-[#090114] shadow-a-base h-fit">
      <div className="flex gap-2 border-b border-primary/20 p-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="relative aspect-16/10 rounded-b-4xl border">
        <Image fill alt="" src={image} className="object-contain" />
      </div>
    </div>
  );
};

export default ProjectBrowser;
