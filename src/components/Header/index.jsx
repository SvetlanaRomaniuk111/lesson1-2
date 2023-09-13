import { TypographyHeader, TypographyText } from './Header.styled';

// const TypographyHeader = styled.h1`
//   margin: 0;
//   color: ${({ isOnline }) => (isOnline ? '#00fbff' : 'black')};
// `;

// const color = '#000';
// const TypographyHeader = styled('h1')({
//   boxShadow: ({ isOnline }) => `0 0 12px 12px ${isOnline ? color : '#00fbff'}`,
// });

const Header = () => {
  const isOnline = false;
  return (
    <div>
      <TypographyHeader $isOnline={isOnline}>Hello React</TypographyHeader>
      <TypographyText>qwrety</TypographyText>
    </div>
  );
};

export default Header;
