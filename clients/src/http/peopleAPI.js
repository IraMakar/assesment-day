import {$host} from "./index";


export const createPeople = async (people) => {
    const {data} = await $host.post('api/people', people)
    return data
}

export const fetchPeople = async () => {
    const {data} = await $host.get('api/people?limit=5')
    return data
}

export const fetchOnePeople = async (id) => {
    const {data} = await $host.get('api/people/'+ id)
    return data
}

export const updatePeople = async () => {
    const {data} = await $host.put('api/people/update')
    return data
}

export const updateOnePeople = async (id) => {
    const {data} = await $host.put('api/people/update/'+ id)
    return data
}

export const deleteOnePeople = async (id) => {
    const {data} = await $host.put('api/people/delete/'+ id)
    return data
}