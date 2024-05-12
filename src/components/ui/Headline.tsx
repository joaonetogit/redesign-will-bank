import { IHeadlineProps } from '@/types/components/Headline';
import clsx from 'clsx';

export default function Headline({
  className,
  title,
  textSupport,
  alignment,
}: IHeadlineProps) {
  const containerClasses = clsx(className, {
    'text-center': alignment === 'center',
    'text-left': alignment === 'left',
    'text-right': alignment === 'right',
  });

  return (
    <div className={containerClasses}>
      <h2 className="font-poppins mb-4 text-[40px]/[48px] font-semibold text-gray-900">
        {title}
      </h2>
      <p className="font-inter text-base text-gray-700">{textSupport}</p>
    </div>
  );
}
