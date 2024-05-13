import { cardsFraud } from '@/constants/cardsFraud';
import CardFraud from './CardFraud';

export default function CardFraudList() {
  return (
    <div className="grid w-full max-w-2xl grid-cols-2 justify-between gap-y-[72px]">
      {cardsFraud.map((card, index) => {
        return <CardFraud key={index} {...card} />;
      })}
    </div>
  );
}
