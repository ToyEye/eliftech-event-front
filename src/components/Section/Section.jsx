import Container from "../Container/Container";
import css from "./Section.module.scss";

const Section = ({ children }) => {
  return (
    <section className={css.section}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
