import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalVestris } from "./pages/GlobalVestris";
import { ClinicalLanding } from "./pages/ClinicalLanding";
import { LabLanding } from "./pages/LabLanding";
import { StudentLanding } from "./pages/StudentLanding";
import { CetasZooLanding } from "./pages/CetasZooLanding";
import { OngLanding } from "./pages/OngLanding";

const pageTransition = {
  initial: { opacity: 0, y: 14, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, filter: "blur(2px)", transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};

function AnimatedRoute({ element }: { element: React.ReactElement }) {
  return (
    <motion.div {...pageTransition}>
      {element}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedRoute element={<GlobalVestris />} />} />
        <Route path="/global" element={<Navigate to="/" replace />} />
        <Route path="/clinico" element={<AnimatedRoute element={<ClinicalLanding />} />} />
        <Route path="/lab" element={<AnimatedRoute element={<LabLanding />} />} />
        <Route path="/student" element={<AnimatedRoute element={<StudentLanding />} />} />
        <Route path="/cetas-zoo" element={<AnimatedRoute element={<CetasZooLanding />} />} />
        <Route path="/ongs" element={<AnimatedRoute element={<OngLanding />} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}