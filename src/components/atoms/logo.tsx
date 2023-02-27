import React from "react";

interface Props {
  className?: string
}

const logo = ({ className }: Props) => {
	return <img src='/public/32x32.svg' className={className ? className : "w-8 h-8"} />;
};

export default logo;
