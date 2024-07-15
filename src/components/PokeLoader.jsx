import { Container, Spinner } from "react-bootstrap";

const PokeLoader = () => {
  return (
    <Container className="text-center mt-5">
      <Spinner animation="border">
        <output className="visually-hidden">Loading...</output>
      </Spinner>
    </Container>
  );
};

export default PokeLoader;
