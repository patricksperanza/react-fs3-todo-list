import { useState } from "react"
import { ToDo } from "../types"
import AddItemForm from "./AddItemForm"
import List from "./List"

const ToDoList = () => {
  const [toDos, setToDos] = useState<ToDo[]>([])

  return (
    <main>
      <AddItemForm setToDos={setToDos} />
      <List toDos={toDos} setToDos={setToDos} />
    </main>
  )
}

export default ToDoList
