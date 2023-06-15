import { useState, useEffect } from "react"
import {FaUser} from 'react-icons/fa'


const Register = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

  
    return (
        <>
            <section className="heading">
                <h4>
                    <FaUser /> Registrar
                </h4>
                <p>Crear nuevo usuario</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={name} 
                        onChange={onChange} 
                        placeholder="Ingresa tu nombre"/>            
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange} 
                        placeholder="Ingresa tu email"/>            
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder="Ingresa tu contraseña"/>            
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="form-control" 
                        id="password2" 
                        name="password2" 
                        value={password2} 
                        onChange={onChange} 
                        placeholder="Confirma tu contraseña"/>            
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block" >Registrar</button>           
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register