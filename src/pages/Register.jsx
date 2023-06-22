import { useState, useEffect } from "react"
import {useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast } from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner"


const Register = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {

        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/login')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error('Las contraseñas no son iguales!')
        }else{
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }

    }

    if(isLoading) {
        return <Spinner />
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
                            placeholder="Ingresa tu nombre"
                        />            
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
                        <button type="submit" className="btn btn-block">Registrar</button>           
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register