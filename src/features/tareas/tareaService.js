import axios from 'axios'

const API_URL = 'https://worried-seal-leg-warmers.cyclic.app/api/tareas/'

//Crear una tarea

const createTarea = async(tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, tareaData, config)

    return response.data
}

const getTareas = async(tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}


const tareaService = {
    createTarea,
    getTareas
}

export default tareaService