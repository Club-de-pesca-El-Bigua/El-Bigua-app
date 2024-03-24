import { UserModel } from "@/models/users";
import { NextResponse } from "next/server";

const getLastUserNumber = async (res, req) => {
    try {
        const lastUser = await UserModel.findOne({}, {}, { sort: { 'userNumber': -1 } });
        console.log("esto es Ultimo numero de socio en la BD", lastUser.userNumber);

        // Verifica si hay un usuario existente
        if (lastUser) {
            // Convertimos el último número de usuario a un número entero
            const lastUserNumber = parseInt(lastUser.userNumber, 10);
            
            // Sumamos 1 al último número de usuario
            const nextUserNumber = lastUserNumber + 1;

            // Convertimos el siguiente número de usuario a string
            const nextUserNumberString = nextUserNumber.toString();

            // Retornamos el siguiente número de usuario como string
            return nextUserNumberString;
        } else {
            return "10000"; // Si no hay usuarios, retorna "10000" o cualquier valor por defecto que desees como string
        }
    } catch (error) {
        // Manejo de errores
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
};

module.exports = getLastUserNumber;



