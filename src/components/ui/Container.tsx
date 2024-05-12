import { IContainerProps } from '@/types/components/Container';
import { twMerge } from 'tailwind-merge';

export default function Container({ children, className }: IContainerProps) {
  const defaultClassesContainer = 'w-full max-w-grid mx-auto px-4';
  const combinedClassesContainer = twMerge(defaultClassesContainer, className);

  return <div className={combinedClassesContainer}>{children}</div>;
}
