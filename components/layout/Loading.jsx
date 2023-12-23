import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [letters, setLetters] = useState(["Y", "Ü", "K", "L", "E", "N", "İ","Y","O","R"]);
  const [images, setImages] = useState(["l", "o", "a", "d", "i", "n", "g","g","g","g"]);
  const [showImages, setShowImages] = useState(Array(letters.length).fill(false));
  const [animationComplete, setAnimationComplete] = useState(false);

  const letterContainerVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
  };

  const exitVariants = {
    hidden: { opacity: 0, y: "100%", transition: { duration: 0.1, ease: "easeInOut" } },
  };

  useEffect(() => {
    const timeoutIds = letters.map((letter, index) => {
      return setTimeout(() => {
        setShowImages((prevShowImages) => {
          const updatedShowImages = [...prevShowImages];
          updatedShowImages[index] = true;

          // Set the previous image to false
          if (index > 0) {
            updatedShowImages[index - 1] = false;
          }

          // If it's the last letter, set animationComplete to true
          if (index === letters.length - 1) {
            // After the last image, reset showImages after a delay
            setTimeout(() => {
              setShowImages(Array(letters.length).fill(false));
              // Set animationComplete to true after a delay
              setTimeout(() => {
                setAnimationComplete(true);
              }, 300); // Adjust the delay as needed
            }, 400); // Delay after the last image
          }

          return updatedShowImages;
        });
      }, (index + 1) * 300); // Add 1 second delay before each letter starts

      return () => clearTimeout(timeoutIds[index]);
    });

    return;
  }, [letters]);

  return (
    <AnimatePresence>
      {!animationComplete && (
        <motion.div
          key="loading"
          style={{
            background: "white",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            zIndex: 999,
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              variants={letterContainerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden" // Exit animation for the container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                fontSize: "12vw",
                margin: "0 5px", // Adjust the spacing between letters
              }}
            >
              {showImages[index] && (
                <motion.img
                  key={letter}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ width: "140px", height: "140px", objectFit: "cover" }}
                  src={require(`@assets/images/loading/${images[index]}.jpg`).default.src}
                />
              )}
              {!showImages[index] && letter}
            </motion.div>
          ))}
        </motion.div>
      )}
      {animationComplete && (
        <motion.div
          variants={exitVariants}
          initial="hidden"
          animate="hidden"
          exit="hidden" // Exit animation for the container
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
