import { motion } from "framer-motion";
import zipperPull from "../assets/zipper-pull.svg";

export default function Zipper({ active, direction }) {
  if (!active) return null;

  const opening = direction === "open";

  return (
    <motion.div
      initial={{ 
        y: opening ? "-100%" : "100%",
        scaleY: 0.1,
        opacity: 0
      }}
      animate={{ 
        y: opening ? "100%" : "-100%",
        scaleY: 1,
        opacity: 1
      }}
      transition={{ 
        duration: 0.9,
        ease: "easeInOut",
        scaleY: {
          duration: 0.7,
          ease: "easeInOut",
          times: [0, 0.1, 0.9, 1]
        },
        opacity: {
          duration: 0.2,
          times: [0, 0.1, 0.9, 1]
        }
      }}
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        transform: "translateX(-50%)",
        zIndex: 1000,
        pointerEvents: "none",
        width: "50px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Zipper track line */}
      <div style={{
        position: "absolute",
        width: "2px",
        height: "100%",
        backgroundColor: "#666",
        zIndex: 999,
      }} />
      
      {/* Zipper pull */}
      <motion.img
        src={zipperPull}
        alt="Zipper"
        style={{
          width: "40px",
          height: "auto",
          zIndex: 1001,
        }}
      />
    </motion.div>
  );
}
