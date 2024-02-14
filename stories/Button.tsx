import React from "react";
import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  width?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  width,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? ['text-white', 'bg-[#1ea7fd]']
    : ['text-[#333]', 'bg-transparent', 'shadow-[0_0_0_1px_rgba(0,0,0,0.15)_inset'];
  let buttonSize;
  switch (size) {
    case 'small':
      buttonSize = 'text-xs py-2 px-4'
      break
    case 'large':
      buttonSize = 'text-base py-4 px-10'
      break
    default:
      buttonSize = 'text-sm py-3 px-7'
      break
  }
  return (
    <button
      type="button"
      className={
        "font-sans font-bold border-0 rounded-full bg-sky-500 cursor-pointer inline-block leading-none" +
        " " + buttonSize + " " + 
        mode.join(' ')
      }
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
