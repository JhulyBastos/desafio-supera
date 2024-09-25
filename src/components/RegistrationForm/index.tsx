import { Usuario } from "@/types/usuario";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import SelectProfileType from "../SelectProfileType";

interface ProfileFormProps {}

export default function RegistrationForm({}: ProfileFormProps) {
  const metodos = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: 0,
      idade: 0,
      perfil: "",
    },
  });

  return (
    <div>
      <form action="" className=" text-black flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p>Nome:</p>
          <Input placeholder="Ana Maria" />
        </div>
        <div className="flex flex-col gap-1">
          <p>E-mail:</p>
          <Input
            className="placeholder:text-[8px]"
            placeholder="anamaria@exemplo.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p>Telefone:</p>
          <Input placeholder="12345-6789" />
        </div>
        <div className="flex flex-col gap-1">
          <p>Idade:</p>
          <Input placeholder="0" />
        </div>
        <div className="flex flex-col gap-1">
          <p>Perfil:</p>
          <SelectProfileType />
        </div>
      </form>
    </div>
  );
}
