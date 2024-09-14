import { keyframes } from '@chakra-ui/react';

// Spin animation definition
export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Bounce animation
export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Scale animation
export const scale = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;