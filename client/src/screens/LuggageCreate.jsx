import { useState } from "react"

export default function LuggageCreate(props) {

    const [formData, setFormData] = useState ({
        name: "",
        amount: 0
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
          e.preventDefault();
          props.handleCreateLuggage(formData);
      }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange} />
                </label>
                <label>
                    Amount
                    <input type="number" 
                    name="amount" 
                    value={formData.amount}
                    onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}