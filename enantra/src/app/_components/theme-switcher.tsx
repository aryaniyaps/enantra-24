// app/components/ThemeSwitcher.tsx
"use client";

import type { SwitchProps } from "@nextui-org/react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = (props: SwitchProps) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "h-8 w-8",
            "flex items-center justify-center",
            "bg-default-100 hover:bg-default-200 rounded-lg",
          ],
        })}
      >
        {isSelected ? <SunIcon /> : <MoonIcon />}
      </div>
    </Component>
  );
};

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeSwitch
      isSelected={theme === "dark"}
      onValueChange={(value) => setTheme(value ? "dark" : "light")}
    />
  );
}
