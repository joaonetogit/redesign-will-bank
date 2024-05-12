import { IButtonProps } from '@/types/components/Button';

export default function Button({ label }: IButtonProps) {
  return (
    <button
      type="button"
      className="border-gray800 text-gray800 flex w-fit items-center justify-center rounded-full border px-8 py-4 text-base"
    >
      {label}
    </button>
  );
}
