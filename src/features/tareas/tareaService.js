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

//Obtener tarea
const getTareas = async(tareaData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

//Borrar tarea
const delteTarea = async(id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + tareaId, config)

    return response.data
}


const tareaService = {
    createTarea,
    getTareas,
    delteTarea
}

export default tareaService