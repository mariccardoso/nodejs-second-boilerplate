import { Router } from "express";  // Importando a função Router do express
import UsersRepository from "../models/users/UsersRepository.js"; // Importando a classe UsersRepository

const usuariosRoutes = Router(); // Instanciando a classe Router
const usersRepository = new UsersRepository(); // Instanciando a classe UsersRepository


usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getAllUsers();    

    return res.status(200).json({
        message: 
        usuarios.length == 0 
        ? "Nenhum usuário encontrado" : 
        `Total de usuários: ${usuarios.length}`, usuarios,
    });
});

usuariosRoutes.post("/", (req, res) => {
const { name, email, password } = req.body;

const usuario = usersRepository.addUser(name, email, password);

return res.status(201).json({
    message: "Usuário criado com sucesso", usuario,
});



});

usuariosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = usersRepository.getUserById(id);

    if (!user) {
        return res.status(404).json({ message:  `Usuário com id ${id} não encontrado` });
    }

    return res.status(200).json({ message: `Usuário com id ${id} encontrado`, user });
});

export default usuariosRoutes;