import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ".././register/style/back.scss"
import "../login/style/login.scss";
import "../../styles/home.scss"
import Button from '../button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from "axios";
import * as z from "zod"


interface errorProps {
    response: {
        data: {
            errorMessage: string,
        }
    },
}



const formValidationSchema = z.object({
    name: z.string().min(6, { message: "Minimo 6 caracteres" }).nonempty({ message: "Formato invalido" }),
    email: z.string().email({ message: "Email invalido" }),
    password: z.string().min(6, { message: "Minimo 6 caracteres" }),
    birthDate: z.string().nonempty({ message: "Formato invalido" }),
})

type formValidationType = z.infer<typeof formValidationSchema>



export default () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formValidationType>(
        {
            resolver: zodResolver(formValidationSchema),
            defaultValues: {
                name: "",
                email: "",
                password: "",
                birthDate: "",
            },
        }
    );
    const [response, setReponse] = useState("");
    const handleSub = async (data: formValidationType) => {

        const requision = await axios.post("http://localhost:8080/user/create", {
            ...data
        }).then(() => {
            setReponse("Usuario cadastrado com sucesso");
        }).catch(({ response }: errorProps) => {
            setReponse(response.data.errorMessage)
        })
        return requision;

    }

    return (
        <>
            <div className='back'>
                <ArrowBackIosNewIcon />
                <a href='/'>Voltar</a>
            </div>


            <div className="Home">
                <header>
                    <h1>Crie uma conta agora</h1>
                    <span>
                        Torne-se membro e desfrute de promoções exclusivas.
                    </span>
                </header>
                <form onSubmit={handleSubmit(handleSub)}>
                    <main>
                        <div className="inputs">
                            <span>
                                Nome completo: <label>{errors.name?.message ? errors.name?.message : ""}</label>
                            </span>
                            <input {...register("name")} type="text" placeholder="Nome completo" />
                            <span>
                                Endereço de e-mail: <label>{errors.email?.message ? errors.email?.message : ""}</label>
                            </span>
                            <input {...register("email")} type="email" placeholder="Endereço de e-mail" />
                            <span>
                                Senha: <label>{errors.password?.message ? errors.password?.message : ""}</label>
                            </span>
                            <input {...register("password")} type="password" placeholder="Senha" />
                            <span>
                                Data de Nascimento: <label>{errors.birthDate?.message ? errors.birthDate?.message : ""}</label>
                            </span>
                            <input   {...register("birthDate")} pattern="dd/MM/yyyy" type="date" placeholder="Data de Nascimento" />
                        </div>
                    </main>
                    <footer>
                        <Button />
                        {
                            response.length > 0 && <p>{response}</p>
                        }

                        <p>
                            Não possue conta ? <a href='/'>Crie aqui uma conta agora</a>
                        </p>
                    </footer>
                </form>

            </div>
        </>

    )
}

