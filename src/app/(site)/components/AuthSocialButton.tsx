import React from "react";
import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className=" inline-flex w-full justify-center rounded-md bg-background px-4 py-2 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 focus:outline-offset-0 hover:bg-gray-200 hover:dark:bg-background/50"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
