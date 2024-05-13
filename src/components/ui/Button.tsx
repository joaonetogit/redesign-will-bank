import { IButtonProps } from '@/types/components/Button';

export default function Button({ label }: IButtonProps) {
  return (
    <button
      type="button"
      className="flex w-fit items-center justify-center rounded-full border border-gray800 px-8 py-4 text-base text-gray800"
    >
      {label}
    </button>
  );
}
