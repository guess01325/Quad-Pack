import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function LuggageCreate(props) {
  const [   event,
    luggage,
    getAllLuggageItems,
    handleDeleteLuggage,
    getOneLuggage,
    handleUpdateLuggage,
    handleCreateLuggage,] = useOutletContext();
  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateLuggage(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
