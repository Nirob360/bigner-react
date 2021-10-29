/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    FormContainer,
    FormField,
    Indicator,
    RegisterForm,
    SubmitButton,
    ValidText
} from './styled/FromStyled';

export default function Forms() {
    const [values,setValue] = useState({
        firstName: '',
        lastName: '',
        email: ""
    })

    const [ submited, setSubmited] =useState(false);
    const [valid,setValid] = useState(false);

 const handleFirstNameInputChange = (event)=> {
     setValue({...values, firstName:event.target.value})
 }

 const handleLastNameInputChange = (event)=> {
    setValue({...values, lastName:event.target.value})
}

const handleEmailInputChange = (event)=> {
    setValue({...values, email:event.target.value})
}

const handelSubmit = (e) => {
    e.preventDefault();
    if(values.firstName && values.lastName && values.email ){
        setValid(true)
    }
    setSubmited(true);
}


    return (        
        <>
            <FormContainer>
                <RegisterForm onSubmit={handelSubmit}>
                    <FormField type="text" name="firstName" placeholder="Frist Name" value={values.firstName} onChange={handleFirstNameInputChange} />
                    {submited && !values.firstName? <ValidText> Please enter a first name</ValidText>:null}
                    <FormField type="text" name="lastName" placeholder="Last Name" value={values.lastName}  onChange={handleLastNameInputChange}/>
                   {submited && !values.lastName ?  <ValidText> Please enter a last name</ValidText>:null}
                    <FormField type="email"name="Email" placeholder="Email" value={values.email} onChange={handleEmailInputChange} />
                    {submited && !values.email?  <ValidText> Please enter your email</ValidText>:null}
                    <SubmitButton type="submit">Register</SubmitButton>
                    {submited && valid ? <Indicator>send sucesss</Indicator> : null}                    
                </RegisterForm>
                
            </FormContainer>            
        </>
    );
}
