import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: any
}

const Container = ({ children }: Props) => {
	return <motion.div className='animate duration-300 h-[87vh]'>{children}</motion.div>;
};

export default Container;
