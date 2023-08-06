import { ListProps } from "../types";

import ListItem from "./ListItem";

const List = ({ toDos, setToDos }: ListProps) => {
  return (
    <div className="list">
      <ul>
        {toDos.map((item) => (
          <ListItem item={item} setToDos={setToDos} />
        ))}
      </ul>
    </div>
  );
};

export default List;
