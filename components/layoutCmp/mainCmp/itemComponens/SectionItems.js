import LinkItem from "./LinkItem";

export default function SectionItems(props) {
  return (
    <section id={props.id} className={props.className}>
      <h2>{props.title}</h2>
      <LinkItem url={props.url} name="View More" />
    </section>
  )
}