"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import TenacitasLogo from "../icons/tenacitas-logo";

export function Header() {
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prevBodyOverflowRef = useRef<string | null>(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      if (prevBodyOverflowRef.current === null) {
        prevBodyOverflowRef.current = document.body.style.overflow || "";
      }
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBodyOverflowRef.current ?? "";
        prevBodyOverflowRef.current = null;
      };
    }

    document.body.style.overflow = prevBodyOverflowRef.current ?? "";
    prevBodyOverflowRef.current = null;
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  // portal overlay (render only in browser)
  const overlay = (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          key="mobile-overlay"
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMenu} // clicking overlay closes it
        >
          {/* semi transparent background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* the actual drawer */}
          <motion.nav
            className="absolute top-0 right-0 w-80 max-w-[80vw] h-full bg-background border-l border-border p-6 flex flex-col space-y-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.28 }}
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside drawer
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center space-x-2"
              >
                <TenacitasLogo />
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="hover:bg-primary"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/"
                className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-18">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            >
              <Link href="/" className="flex items-center space-x-1">
                <TenacitasLogo size={70} />
              </Link>
            </motion.div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 * 0.06 }}
              >
                {/* <Link
                  href={"/"}
                  className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link> */}
              </motion.div>
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild className="p-6 rounded-xl">
                <a href="#waitlist">Join Waitlist</a>
              </Button>
              {/* mobile menu toggle */}
              {/* <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover:bg-primary"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {overlay}
    </>
  );
}
