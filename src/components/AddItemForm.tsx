import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { AddItemFormProps } from "../types"

const AddItemForm = ({ setToDos }: AddItemFormProps) => {
  const [newItem, setNewItem] = useState("")
  // Add New Item
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    setToDos((prevToDos) => [
      ...prevToDos,
      {
        id: uuidv4(),
        desc: newItem,
        completed: false,
        editing: false,
      },
    ])
    setNewItem("")
  }

  return (
    <form className="add-form" onSubmit={handleAdd}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>Add Item</button>
    </form>
  )
}

export default AddItemForm
