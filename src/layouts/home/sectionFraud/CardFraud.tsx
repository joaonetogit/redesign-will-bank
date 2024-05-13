import { ICardFraudProps } from '@/types/layouts/CardFraud';

export default function CardFraud({ icon, title, text }: ICardFraudProps) {
  return (
    <div className="flex max-w-[279px] flex-1 flex-col gap-6">
      <img className="w-fit" src={icon} alt={title} />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray900">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}
