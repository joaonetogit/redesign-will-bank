import { ICardPostProps } from '@/types/layouts/CardPost';
import Image from 'next/image';
import Link from 'next/link';

export default function CardPost({
  thumb,
  category,
  title,
  link,
}: ICardPostProps) {
  return (
    <Link href={link} className="group flex flex-1 flex-col">
      <div className="mb-6 h-[255px] w-full overflow-hidden">
        <Image
          width={384}
          height={255}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={thumb}
          alt={title}
          quality={100}
        />
      </div>
      <p className="mb-4 font-semibold uppercase text-gray600">{category}</p>
      <h3 className="mb-14 h-16 text-lg font-semibold text-gray900">{title}</h3>
      <p className="w-fit border border-black px-6 py-3 font-inter text-base/none font-medium text-gray800">
        Ler mais
      </p>
    </Link>
  );
}
