import type { ReactNode } from "react";

type StatusMessageProps = {
  icon: string;
  title: string;
  text: string;
  isPageTitle?: boolean;
  children?: ReactNode;
};

export const StatusMessage = ({
  icon,
  title,
  text,
  isPageTitle = false,
  children,
}: StatusMessageProps) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <img src={icon} alt="" className="size-7" />
      {isPageTitle ? <h1 className="text-3xl">{title}</h1> : <h2 className="text-3xl">{title}</h2>}
      <p className="text-base">{text}</p>
      {children}
    </div>
  );
};
