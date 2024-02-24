import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

export default function LuggageEdit(props) {
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

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const preFillFormData = () => {
      const luggages = luggage.find(
        (luggageItem) => luggageItem.id === Number(id)
      );
      setFormData(luggages);
    };

    if (luggage.length) {
      preFillFormData();
    }
  }, [luggage, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateLuggage(id, formData);
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
