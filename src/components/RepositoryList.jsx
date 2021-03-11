import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Meu Repositorio",
  description: "Uma descrição supimpa",
  link: "https://github.com/",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  );
}
