import { TransactionContext } from '../context/TransactionContext';
import { animate, motion, useMotionTemplate, useMotionValue, useTransform} from 'framer-motion';
import { useEffect, useRef, useContext } from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
  position: relative;
  width: 500px;
  height: 380px;
  overflow: hidden;
  perspective: 1000px;
`;

const RotationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
`;

const CardWrapper = styled(motion.div)`
  border-radius: 20px;
  backdrop-filter: blur(4px) brightness(120%);
`;


const CreditCard = () => {
  const { currentAccount } = useContext(TransactionContext);
  // mouse position
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0
  );
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0
  );

  // a reference for our animated card element
  const cardRef = useRef(null);

  // rotation
  const dampen = 20;
  const rotateX = useTransform (mouseY, (newMouseY) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateX = newMouseY - rect.top - rect.height / 2;
    return -newRotateX / dampen;
  });
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const newRotateY = newMouseX - rect.left - rect.width / 2;
    return newRotateY / dampen;
  });

  // sheen
  const diagonalMovement = useTransform (
    [rotateX, rotateY],
    ([newRotateX, newRotateY]) => {
      const position = newRotateX + newRotateY;
      return position;
    }
  );
  const sheenPosition = useTransform(diagonalMovement, [-5, 5], [-100, 200]);
  const sheenOpacity = useTransform(
    sheenPosition,
    [-250, 50, 250],
    [0, 0.05, 0]
  );
  const sheenGradient = useMotionTemplate`linear-gradient(
  55deg,
  transparent,
  rgba(255 255 255 / ${sheenOpacity}) ${sheenPosition}%,
  transparent)`;

  // handle mouse move on document
  useEffect(() => {
    const handleMouseMove = (e) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    if (typeof window === 'undefined') return;
    // recalculate grid on resize
    window.addEventListener('mousemove', handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <Container>
      <RotationWrapper style={{ rotateX, rotateY }}>
        <CardWrapper ref={cardRef} style={{ backgroundImage: sheenGradient }}>
          <motion.div
            className="credit-card rounded-box relative w-full max-w-sm shadow-2xl"
          >
            <div className="absolute left-5 top-5">
              <img
                className="h-16"
                src="../public/images/chip.png"
                alt="credit card chip"
              />
            </div>
            <div className="absolute right-3 top-3">
              <img
                className="h-20"
                src="../public/images/EthereumLogo.svg"
                alt="Ethereum logo"
              />
            </div>
            <div className="absolute bottom-12 left-5">
              <label className="text-white opacity-50">Card holder</label>
            </div>
            <div className="absolute bottom-5 left-5">
              <label className="text-white text-base">
                {currentAccount.slice(0, 6) + '...' + currentAccount.slice(-4)}
              </label>
            </div>
          </motion.div>
        </CardWrapper>
      </RotationWrapper>
    </Container>
  );
};

export default CreditCard;
