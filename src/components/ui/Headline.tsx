import { IHeadlineProps } from '@/types/components/Headline';
import clsx from 'clsx';

export default function Headline({
  className,
  title,
  textSupport,
  alignment,
}: IHeadlineProps) {
  const containerClasses = clsx(className, 'space-y-4', {
    'text-center': alignment === 'center',
    'text-left': alignment === 'left',
    'text-right': alignment === 'right',
  });

  return (
    <div className={containerClasses}>
      <h2 className="mb-4 font-poppins text-[40px]/[48px] font-semibold text-gray900">
        {title}
      </h2>
      <p className="font-inter text-base text-gray700">{textSupport}</p>
    </div>
  );
}

Headline.defaultProps = {
  alignment: 'left',
};
