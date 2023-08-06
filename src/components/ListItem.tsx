import { useState } from "react"
import { ListItemProps } from "../types"
import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash3 } from "react-icons/bs"

const ListItem = ({ setToDos, item }: ListItemProps) => {
  const [editItem, setEditItem] = useState("")
  // Delete Item
  const handleDelete = (id: string) => {
    setToDos((prevToDos) => prevToDos.filter((item) => item.id !== id))
  }

  // Toggle Edit
  const toggleEdit = (id: string, desc: string) => {
    setToDos((prevToDos) =>
      prevToDos.map((item) => {
        return item.id === id ? { ...item, editing: !item.editing } : item
      })
    )
    setEditItem(desc)
  }

  // Handle Edited Item
  const handleEdit = (e: React.FormEvent, id: string) => {
    e.preventDefault()
    setToDos((prevToDos) =>
      prevToDos.map((item) => {
        return item.id === id
          ? { ...item, desc: editItem, editing: false }
          : item
      })
    )
    setEditItem("")
  }

  // Toggle Completed
  const toggleCompleted = (id: string) => {
    setToDos((prevToDos) =>
      prevToDos.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      })
    )
  }

  return (
    <li key={item.id}>
      {item.editing ? (
        <form className="edit-form" onSubmit={(e) => handleEdit(e, item.id)}>
          <input
            type="text"
            value={editItem}
            onChange={(e) => setEditItem(e.target.value)}
          />
          <button>Submit</button>
        </form>
      ) : (
        <p
          className={`list-text ${item.completed ? "strike" : ""}`}
          onClick={() => toggleCompleted(item.id)}
        >
          {item.desc}
        </p>
      )}

      <p>
        <span className="icon" onClick={() => toggleEdit(item.id, item.desc)}>
          <AiOutlineEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(item.id)}>
          <BsTrash3 />
        </span>
      </p>
    </li>
  )
}

export default ListItem
