import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import TareaForm from '../components/TareaForm'
import Spinner from '../components/Spinner'
import {getTareas, reset} from '../features/tareas/tareaSlice'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {tareas, isLoading, isError, message} = useSelector((state) => state.tarea)

  useEffect(() => {
    if(isError){
      console.log(message)
    }
    
    if (!user) {
      navigate('/login')
    }

    dispatch(reset())

  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h2>Bienvenidx, {user && user.name}!</h2>{/* Es lo mismo que poner un if user then something */}
        
        <p>Mis Tareas:</p>
      </section>

      <TareaForm />
    </>
  )
}

export default Dashboard