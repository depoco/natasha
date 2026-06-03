import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronRight } from "lucide-react";

interface Chapter {
  id: number;
  title: string;
  text: string;
  image: string;
  effect?: "candle" | "heart" | "crack" | "sparkle" | "scandi";
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "De små sakerna",
    text: "Du är världens bästa på att få små saker att kännas stora. Allt ska vara cozy! Alltid tända ljus, lite vin medan vi lagar mat.",
    image: "images/natashabirds.JPG",
    effect: "candle",
  },
  {
    id: 2,
    title: "Fin!",
    text: "Din ärlighet är något fint och som du ska ta vara på. Skulle inte vilja ändra någonting på dig, inte ens dina fötter, kanske dina surfisar.",
    image: "images/natashahappy.JPG",
    effect: "candle",
  },
  {
    id: 3,
    title: "Ett öppet hjärta",
    text: "Du möter alla med ett öppet hjärta. Du är en person som alla gillar direkt. Du utstrålar massa värme.",
    image: "images/hyttakos.JPG",
    effect: "heart",
  },
  {
    id: 4,
    title: "Att lita",
    text: "Jag vet att du kämpar med att lita på människor och att du försöker så gott du kan.",
    image: "images/hyttanyckelfryst.JPG",
    effect: "crack",
  },
  {
    id: 5,
    title: "Diamanter & Svart",
    text: "Du älskar saker som glittrar, men något så enkelt som ett vanlig guldörhänge är också en favorit. Din favoritfärg är utan tvekan svart, men när du provar andra färger är du lika sexy beast.",
    image: "images/natashachanel.JPG",
    effect: "sparkle",
  },
  {
    id: 6,
    title: "Neste Sommer",
    text: "Du hatar att läsa, men älskar skandinaviska serier. Speciellt Neste Sommer och Solsidan. Neste Sommer är din absoluta favorit, speciellt om du känner dig lite nere. Sex and the City är en god tvåa.",
    image: "images/hytta1.JPG",
    effect: "scandi",
  },
  {
    id: 7,
    title: "Världens bästa",
    text: "Du är världens bästa och finaste och jag uppskattar dig som person.",
    image: "images/geiloafterski.JPG",
    effect: "heart",
  },
  {
    id: 8,
    title: "",
    text: "",
    image: "images/hyttaanimals.JPG",
    effect: "heart",
  },
  {
    id: 9,
    title: "",
    text: "",
    image: "images/hyttagran.JPG",
    effect: "heart",
  },
  {
    id: 10,
    title: "",
    text: "",
    image: "images/hyttasnow.JPG",
    effect: "heart",
  },
  {
    id: 11,
    title: "",
    text: "",
    image: "images/hyttajul.JPG",
    effect: "heart",
  },
  {
    id: 12,
    title: "",
    text: "",
    image: "images/hyttatuva.JPG",
    effect: "heart",
  },
  {
    id: 13,
    title: "",
    text: "",
    image: "images/InaNatasha1.JPG",
    effect: "heart",
  },
  {
    id: 14,
    title: "",
    text: "",
    image: "images/inanatasha2.JPG",
    effect: "heart",
  },
  {
    id: 15,
    title: "",
    text: "",
    image: "images/inanatasha3.JPG",
    effect: "heart",
  },
  {
    id: 16,
    title: "",
    text: "",
    image: "images/inanatasha4.JPG",
    effect: "heart",
  },
  {
    id: 17,
    title: "",
    text: "",
    image: "images/natashachanel.JPG",
    effect: "heart",
  },
  {
    id: 18,
    title: "Massa fin jente!",
    text: "",
    image: "images/natashasvamp.JPG",
    effect: "heart",
  },
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 is the start screen
  const [direction, setDirection] = useState(0);

  const nextChapter = () => {
    if (currentIndex < chapters.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevChapter = () => {
    if (currentIndex > -1) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTap = (e: React.MouseEvent | React.TouchEvent) => {
    const x =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const width = window.innerWidth;
    if (x < width * 0.3) {
      prevChapter();
    } else {
      nextChapter();
    }
  };

  return (
    <div className="story-container" onClick={handleTap}>
      <AnimatePresence initial={false} custom={direction}>
        {currentIndex === -1 ? (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-hygge-offwhite p-12 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="mb-8"
            >
              <Heart className="w-16 h-16 text-red-500 fill-current" />
            </motion.div>
            <h1 className="font-serif text-4xl mb-4 italic text-hygge-black">
              För Natasha
            </h1>
            <p className="font-sans text-sm tracking-widest uppercase text-gray-500">
              En berättelse om varför du är unik
            </p>
            <motion.div
              className="mt-12 flex flex-col items-center gap-2 text-gray-400 text-[10px] tracking-wider uppercase"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <div className="flex items-center gap-2">
                <span>Tap right to start</span>
                <ChevronRight size={10} />
              </div>
              <span className="mt-1 opacity-60">(Tap left to go back)</span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key={chapters[currentIndex].id}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute inset-0 bg-hygge-offwhite"
          >
            <div className="chapter-content">
              {/* Image Frame */}
              <motion.div
                className="image-wrapper"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={chapters[currentIndex].image}
                  alt={chapters[currentIndex].title}
                  className="chapter-image"
                />
              </motion.div>

              {/* Text Area */}
              <div className="text-content text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {chapters[currentIndex].title && (
                    <h2 className="font-serif text-3xl text-hygge-black mb-4 italic">
                      {chapters[currentIndex].title}
                    </h2>
                  )}
                  {chapters[currentIndex].text && (
                    <p className="font-sans text-lg text-gray-700 leading-relaxed px-2">
                      {chapters[currentIndex].text}
                    </p>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Special Effects */}
            {chapters[currentIndex].effect === "sparkle" && (
              <div className="absolute inset-0 pointer-events-none">
                <SparklesEffect />
              </div>
            )}
            {chapters[currentIndex].effect === "candle" && (
              <div className="absolute inset-0 pointer-events-none bg-orange-500/5 animate-pulse mix-blend-multiply" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bars */}
      {currentIndex >= 0 && (
        <div className="progress-bar-container">
          {chapters.map((_, idx) => (
            <div key={idx} className="progress-bar-bg !bg-black/10">
              <div
                className="progress-bar-fill !bg-hygge-black"
                style={{
                  width:
                    idx < currentIndex
                      ? "100%"
                      : idx === currentIndex
                        ? "100%"
                        : "0%",
                  transition:
                    idx === currentIndex ? "width 0.1s linear" : "none",
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SparklesEffect: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden relative">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default App;
