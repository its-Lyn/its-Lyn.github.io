import "../styles/ProjectCard.css"

export type Item = {
  name: string;
  description: string;
	delay: number;
};

type ItemProps = {
  item: Item;
};

const ProjectCard: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="card p-4 flex flex-col rounded-xl">
      <p className="title font-bold text-xl mb-2">{item.name}</p>
      <p className="opacity-40">{item.description}</p>
    </div>
  );
};

export default ProjectCard;