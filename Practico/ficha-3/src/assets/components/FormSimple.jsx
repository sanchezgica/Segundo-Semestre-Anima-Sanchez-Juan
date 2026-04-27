import { useState } from "react";

function FormSimple(){
    const manejaSubmit = (e) => {e.prevent.default();alert("Formulario Enviado")}
    return(
        <div>
            <fieldset>
                <form></form>
            </fieldset>
        </div>
    )
};


export default FormSimple;