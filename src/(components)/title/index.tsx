import { TitleProps } from "@/interfaces";
import { Container } from "./styled";

export default function Title({ title, border }: TitleProps) {
  return (
    <Container $color={border}>
      <h1>
        {title}
        <hr />
      </h1>
    </Container>
  );
}
