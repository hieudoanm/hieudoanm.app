import Container from '@mui/material/Container';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="border-t py-8">
        <Container>
          <p>&copy; 2023 Solid</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
