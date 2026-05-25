import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalVestris } from "./pages/GlobalVestris";
import { ClinicalLanding } from "./pages/ClinicalLanding";
import { LabLanding } from "./pages/LabLanding";
import { StudentLanding } from "./pages/StudentLanding";
import { CetasZooLanding } from "./pages/CetasZooLanding";
import { OngLanding } from "./pages/OngLanding";
import { LoginPage } from "./pages/LoginPage";
import { RecoverPasswordPage } from "./pages/RecoverPasswordPage";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { PlansPage } from "./pages/PlansPage";

const pageTransition = {
  initial: { opacity: 0, y: 14, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, filter: "blur(2px)", transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};

function AnimatedRoute({ element }: { element: React.ReactElement }) {
  return <motion.div {...pageTransition}>{element}</motion.div>;
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedRoute element={<GlobalVestris />} />} />
          <Route path="/global" element={<Navigate to="/" replace />} />
          <Route path="/clinico" element={<AnimatedRoute element={<ClinicalLanding />} />} />
          <Route path="/lab" element={<AnimatedRoute element={<LabLanding />} />} />
          <Route path="/student" element={<AnimatedRoute element={<StudentLanding />} />} />
          <Route path="/cetas-zoo" element={<AnimatedRoute element={<CetasZooLanding />} />} />
          <Route path="/ongs" element={<AnimatedRoute element={<OngLanding />} />} />
          <Route path="/planos" element={<AnimatedRoute element={<PlansPage />} />} />
          <Route path="/login" element={<AnimatedRoute element={<LoginPage />} />} />
          <Route path="/recuperar-senha" element={<AnimatedRoute element={<RecoverPasswordPage />} />} />
          <Route path="/redefinir-senha" element={<AnimatedRoute element={<ResetPasswordPage />} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
