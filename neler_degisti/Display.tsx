//* 2) Artık bir bielşen prop alıyoesa mutlaka o bileşene gelen propların tipini tanımlamak zorundayız

import { span } from "framer-motion/client";

type PropsType = {
    count: number;
};

const Display = ({ count }: PropsType) => {
  return <span>{count}</span>
}

export default Display