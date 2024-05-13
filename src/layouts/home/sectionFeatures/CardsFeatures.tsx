import { cards } from '@/constants/cardsFeatures';
import Image from 'next/image';

export default function CardsFeatures() {
  return (
    <>
      {cards.map((content, key) => (
        <div
          key={key}
          className="flex flex-1 flex-col items-center space-y-2 font-inter"
        >
          <Image
            src={content.image}
            alt={content.title}
            width={57}
            height={57}
            quality={90}
          />
          <h3 className="text-lg font-bold text-gray900">{content.title}</h3>
          <p className="text-center text-base text-gray700">
            {content.description}
          </p>
        </div>
      ))}
    </>
  );
}
