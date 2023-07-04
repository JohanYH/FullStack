import getConectar from "../db/database.js";

const crud = async (req, res) =>{
    try {
        const connection = await getConectar();
        const result = await connection.query("SELECT * FROM crud");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCruds = async (req, res) =>{
    try {
        const {Nombre, Telefono} = req.body;
        const cruds = {Nombre, Telefono};
        const connection = await getConectar();
        const result = await connection.query("INSERT INTO crud SET ?", cruds)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodHTTP = {
    crud,
    addCruds
}