import { Container } from '@chakra-ui/react';

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container as='main' maxW='container' my='4' minH='calc(100vh - 115px - 2rem)'>
      {children}
    </Container>
  );
}
