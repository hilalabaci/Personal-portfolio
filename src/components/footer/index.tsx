import { Container, Text } from "./styles";

function Footer() {
  return (
    <Container>
      <Text> © {new Date().getFullYear()} Hilal Abaci, London</Text>
    </Container>
  );
}
export default Footer;
