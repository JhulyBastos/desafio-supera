import { Usuario } from "@/types/usuario";
import { useForm } from "react-hook-form";
interface ProfileFormProps {}

export default function RegistrationForm({}: ProfileFormProps) {
  return;
  const metodos = useForm({
    defaultValues: {
      nome: "",
      email: "",
      perfil: "",
      telefone: 0,
      idade: 0,
    },
  });
}

function onSubmit(payload: Usuario) {
  return <div></div>;
}
