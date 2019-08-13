import * as React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

const ModalContent = styled.div`
  border-radius: 4px;
  border: 1px solid #fff;
  width: 600px;
  height: 400px;
  background: #fff;
`;

interface ModalProps {
  onClose: () => void;
}

export const Modal = ({ onClose }: ModalProps) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return (
    <ModalWrapper onClick={onClose}>
      <ModalBackground>
        <ModalContent />
      </ModalBackground>
    </ModalWrapper>
  );
};
