export interface ToDo {
    id: string
    desc: string
    completed: boolean
    editing: boolean
  }

  export interface AddItemFormProps {
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
  }

  export interface ListProps {
    toDos: ToDo[]
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
  }

  export interface ListItemProps {
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
    item: ToDo
  }