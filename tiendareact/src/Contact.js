import React from "react";
import { useForm } from "react-hook-form";



function Contact() {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {console.log(values);
    
        let product = values;
        fetch('http://localhost:3000/api/info',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
          })
          .then(function (response) {
            return response.json();
          })
          .then(function (datos) {
        
          })
    
    
    }
  
    return (

      
        <form className="formulario" formuonSubmit={handleSubmit(onSubmit)}>
          <input
            name="email"
            placeholder="email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && errors.email.message}
    
          <input
            name="name"
            placeholder="name"
            ref={register({
              validate: value => value !== "admin" || "Nice try!"
            })}
          />
          {errors.username && errors.username.message}

          <textarea
            name="info"
            placeholder="Contact us"
            ref={register({
              validate: value => value !== "admin" || "Nice try!"
            })}
          />
          {errors.username && errors.username.message}


          
    
          <button type="submit">Submit</button>
        </form>
      );
    };
    
export default Contact