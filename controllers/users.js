import { response , request} from "express"

const usersGet = (req = request, res = response) => {
    const { q, name = 'No name', apikey} = req.query;
    res.json({
        message: 'get API - controlador',
        q,
        name,
        apikey
    });
}

const usersPost = (req, res = response) => {
    const body = req.body;
    console.log(body)
    res.json({
        message: 'post API - controlador',
        body
    });
}

const usersPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        message: 'put API - controlador',
        id : id
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        message: 'delete API - controlador'
    });
}
export const users = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}