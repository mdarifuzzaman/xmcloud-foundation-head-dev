import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export default function FormSummary() {
 const [formData, setFormData] = useState(new Array<any>());
  useEffect(() => {    
    $(document).ready(() => {   
        setTimeout(() => {
            $('.next-button').on('click', () => {
                const forms = $('form[data-formid="c1d8449269004de3bd9fb1b790bc32aa-aue"]');
                const inputs: any = Array.from(forms[0].getElementsByTagName("input")).concat(forms[0].getElementsByTagName("textarea"));
                console.log("inputs", inputs);
                const inputValues: any = [];               
                for(let i =0; i < inputs.length; i++){
                    if(inputs[i].type !== "hidden"){
                        const value = inputs[i].value;        
                        console.log("Element found ", inputs[i]); 
                        inputValues.push({name: $(inputs[i]).attr('data-label'), value});
                    }
                }
                setFormData(inputValues);
                
            });
        }, 5000)            
    });

  }, []);

  return (
    <div style={{margin: "20px"}}>
        <div id='btnSummary'>FormSummary</div>   
        <hr></hr> 
        <div className='w-1/2 p-4 mx-auto text-center border'>
        {formData && formData.length > 0 ?
           <div>
                {formData.map((data: any, index: number) => (
                   <div key={index}>
                     <b>{data.name}</b> - {data.value} <br></br>
                   </div>
                ))}
            </div>
        : <>No form data found</> }  
        </div>
    </div>
  )
}
