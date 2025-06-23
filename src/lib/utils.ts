import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { OptionType } from "@/features/options/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getId() {
  return Math.random().toString(36).substring(2, 9);
}

export const findOptionId = (
  options: OptionType[] | undefined,
  value: string
) => {
  const findOption = options?.find(({ text }) => text === value);
  return findOption?.id;
};
