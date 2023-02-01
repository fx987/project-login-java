import Button from "../button/Button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import "../../styles/home.scss"
import "./style/login.scss"
import axios from "axios"
import { useState } from "react"


interface errorProps {
    response: {
        data: {
            errorMessage: string,
        }
    },
}


const formValidationSchema = z.object({
    email: z.string().email({ message: "Email invalido" }),
    password: z.string().min(6, { message: "Minimo 6 caracteres" }),

})

type formValidationType = z.infer<typeof formValidationSchema>


export default () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formValidationType>(
        {
            resolver: zodResolver(formValidationSchema),
            defaultValues: {
                email: "",
                password: "",
            },
        }
    );
    const [response, setReponse] = useState("");

    const handleSub = async (data: formValidationType) => {
        const requision = await axios.post("http://localhost:8080/user/", {
            ...data
        }).then(() => {
            setReponse("Login com sucesso");
        }).catch(({ response: { data } }: errorProps) => setReponse(data.errorMessage))
        return requision;

    }

    return (
        <div className="Home">
            <header>
                <h1>FAÇA LOGIN</h1>
                <span>
                    Se você já é um membro, você pode fazer o login com seu endereço de e-mail e senha.
                </span>
            </header>
            <form onSubmit={handleSubmit(handleSub)}>
                <main>
                    <div className="inputs">
                        <span >
                            Endereço de e-mail: <span>{errors.email?.message ? errors.email?.message : ""}</span>
                        </span>
                        <input {...register("email")} type="email" placeholder="Email" />
                        <span>
                            Senha: <span>{errors.password?.message ? errors.password?.message : ""}</span>
                        </span>
                        <input {...register("password")} type="password" placeholder="Senha" />
                    </div>
                </main>
                <footer>
                    <Button />
                    {
                        response.length > 0 && <p>{response}</p>
                    }

                    <p>
                        Não possue conta ? <a href="/Register">Crie aqui uma conta agora</a>
                    </p>
                </footer>
            </form>
        </div>
    )
}


