import fastify from "fastify";
//import supabase
import { supabase } from "./supabaseConnection";

//const (nome) = chamando o fastify
const app = fastify();

type Users = {
    name: string
    email: string
}

//construindo rotas 

app.get("/users", async () => {
    try {
        const { data: users } = await supabase.from("users").select("*")
        return { value: users }
    } catch (error) {
        console.error(error)
        throw error
    }
});

app.post("/users", async (request, response) => {

    try {
        const { name, email } = request.body as Users;
        const { data: createdUser } = await supabase.from("users").insert([{
            name,
            email
        }]).select()

        return {
            value: createdUser ? createdUser[0] : null
        }

    }
    catch (error) {
        console.error(error)
        throw error;
    }
})
app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3000,
}).then(() => {
    console.log('Server Running')
}
)
