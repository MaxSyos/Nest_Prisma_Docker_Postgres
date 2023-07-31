
import { prismaClient } from "../src/database/prismaClient";

async function main() {


    const user = {
        name: "admin",
        email: "admin@example.com",
        password: "passwordHash",
    }

    await prismaClient.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: user.password,
        }
    })

}

main()