import { cards } from '@/constants/cardsFeatures';
import Image from 'next/image';

export default function CardsFeatures() {
  return (
    <>
      {cards.map((content, key) => (
        <div
          key={key}
          className="font-inter flex flex-1 flex-col items-center space-y-2"
        >
          <Image
            src={content.image}
            alt={content.title}
            width={57}
            height={57}
            quality={90}
          />
          <h3 className="text-gray900 text-lg font-bold">{content.title}</h3>
          <p className="text-gray700 text-center text-base">
            {content.description}
          </p>
        </div>
      ))}
    </>
  );
}
