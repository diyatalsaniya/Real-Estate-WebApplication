'use client';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Context ─────────────────────────────────────────────────────── */
const AccordionContext = React.createContext(null);
const AccordionItemContext = React.createContext(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error('Accordion components must be used inside <Accordion>');
  return ctx;
}

function useAccordionItem() {
  const ctx = React.useContext(AccordionItemContext);
  if (!ctx) throw new Error('AccordionTrigger/AccordionPanel must be inside <AccordionItem>');
  return ctx;
}

/* ─── Accordion (root) ────────────────────────────────────────────── */
function Accordion({ children, multiple = false, className, ...props }) {
  const [openValues, setOpenValues] = React.useState([]);

  const toggle = React.useCallback(
    (value) => {
      setOpenValues((prev) => {
        if (prev.includes(value)) return prev.filter((v) => v !== value);
        return multiple ? [...prev, value] : [value];
      });
    },
    [multiple]
  );

  const isOpen = React.useCallback((value) => openValues.includes(value), [openValues]);

  return (
    <AccordionContext.Provider value={{ toggle, isOpen }}>
      <div className={cn('w-full divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

/* ─── AccordionItem ───────────────────────────────────────────────── */
function AccordionItem({ children, value, className, ...props }) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn('bg-white', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

/* ─── AccordionTrigger ────────────────────────────────────────────── */
function AccordionTrigger({ children, showArrow = true, className, ...props }) {
  const { toggle, isOpen } = useAccordion();
  const { value } = useAccordionItem();
  const open = isOpen(value);

  return (
    <button
      onClick={() => toggle(value)}
      aria-expanded={open}
      className={cn(
        'flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors',
        open ? 'bg-blue-50/40' : 'hover:bg-gray-50',
        className
      )}
      {...props}
    >
      <span className="font-serif font-semibold text-[#0A1128] text-base md:text-lg">
        {children}
      </span>
      {showArrow && (
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0 text-blue-500"
        >
          <ChevronDown size={20} />
        </motion.span>
      )}
    </button>
  );
}

/* ─── AccordionPanel ──────────────────────────────────────────────── */
function AccordionPanel({ children, keepRendered = false, className, ...props }) {
  const { isOpen } = useAccordion();
  const { value } = useAccordionItem();
  const open = isOpen(value);

  return (
    <AnimatePresence initial={false}>
      {(open || keepRendered) && (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div
            className={cn('px-6 pb-5 text-gray-600 text-sm md:text-base leading-relaxed', className)}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
