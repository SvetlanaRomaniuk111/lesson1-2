import { styled } from 'styled-components';

export const TypographyHeader = styled('h1')(({ isOnline }) => {
  return {
    color: isOnline ? 'black' : 'red',
    textAlign: isOnline ? 'center' : 'right',
  };
});

export const TypographyText = styled('p')(({ isOnline }) => {
  return {
    color: isOnline ? 'black' : 'red',
    textAlign: isOnline ? 'center' : 'right',
  };
});
