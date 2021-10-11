import { useState, useEffect } from "react"
import { useParams } from "react-router"


export default function LuggageEdit (props) {
const [formData, setFormData] = useState ({
    name: "",
    amount: 0
})


const params = useParams();
const {id} = params

useEffect (() =>{
    const preFillFormData = () =>{
        const luggage = props.luggage.find((luggageItem)=> luggageItem.id===Number(id))
        setFormData(luggage)
    }


   if (props.luggage.length){preFillFormData()}
}, [props.luggage, id])

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      props.handleUpdateLuggage(id,formData);
  }





    return(
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