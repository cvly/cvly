"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, memo } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import TallyDialog from "@/components/TallyDialog";

// Animation variants for consistent animations
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay }
  })
};

// Memoized avatar group component
const AvatarGroup = memo(() => (
  <motion.div 
    className="flex -space-x-3"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.6 }}
  >
    <Avatar className="border-2 border-background">
      <AvatarImage src="/images/avatar-1.png" alt="User avatar" />
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarImage src="/images/avatar-2.png" alt="User avatar" />
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarImage src="/images/avatar-3.png" alt="User avatar" />
    </Avatar>
  </motion.div>
));

// Main component
export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  // Handle dialog close with useCallback to prevent unnecessary re-renders
  const handleDialogChange = useCallback((open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setShowThankYou(true);
      // Reset back to original text after 3 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between py-12 lg:py-20 gap-8">
          {/* Hero Animation - Shows first on mobile */}
          <motion.div 
  className="flex-1 w-full max-w-[1000px] lg:max-w-[1200px] overflow-hidden"
  initial="hidden"
  animate="visible"
  variants={fadeInUpVariants}
>
  <DotLottieReact
    src="https://lottie.host/958e4124-a211-4331-9337-2af1fd9c7c14/ZkguB8xRva.lottie"
    loop
    autoplay
    style={{ width: '150%', height: '150%', marginLeft: '-25%' }}
  />
</motion.div>
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              className="font-['Instrument_Serif'] text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
            >
              Ditch Boring Resumes,<br />
              Showcase Your Skills
            </motion.h1>
            <motion.p 
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              className="text-muted-foreground text-lg mb-8"
            >
              Effortlessly craft professional portfolios that highlight your best work and impress recruiters in minutes.
            </motion.p>
            <motion.div
              custom={0.5}
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              className="flex flex-col gap-6 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className={`relative overflow-hidden h-12 w-full lg:w-[343px] ${
                  showThankYou 
                    ? 'bg-white text-primary hover:bg-white/90 border border-primary' 
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
                onClick={() => setDialogOpen(true)}
              >
                <AnimatePresence mode="wait">
                  {showThankYou ? (
                    <motion.span
                      key="thank-you"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      Thank you 🫶🏻 we&apos;ll stay in touch
                    </motion.span>
                  ) : (
                    <motion.span
                      key="cta"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      Get Exclusive Early Access
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
              <div className="flex flex-col lg:flex-row items-center lg:items-center gap-2">
                <AvatarGroup />
                <motion.span 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  Join 2k+ Professionals
                </motion.span>
              </div>
              <Features />
            </motion.div>
          </div>
        </div>
      </main>
      <TallyDialog open={dialogOpen} onOpenChange={handleDialogChange} />
    </div>
  );
}

AvatarGroup.displayName = "AvatarGroup";
