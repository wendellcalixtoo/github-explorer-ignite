export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "valueDefault"}</strong>
      <p>{props.repository?.description ?? "descrição default"}</p>

      <a href={props.repository?.link}>Acessar repositório</a>
    </li>
  );
}
