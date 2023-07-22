import { CardItemProps } from "./types";
import { Container, WorkImg, Title, Techno, Details, Link } from "./styles";
import { useInView } from "react-intersection-observer";
function Card(props: CardItemProps) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <Container ref={ref} inView={inView}>
      <WorkImg src={props.imgUrl} />
      <Title>{props.title}</Title>
      <Techno>{props.techno}</Techno>
      <Details>{props.details}</Details>
      <Link href={props.link} target="_blank">
        check this out
      </Link>
    </Container>
  );
}
export default Card;
