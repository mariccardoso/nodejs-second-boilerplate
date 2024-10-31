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

export default usuariosRoutes;