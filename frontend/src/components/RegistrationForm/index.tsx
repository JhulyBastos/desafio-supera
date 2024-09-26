import { useFormContext } from "react-hook-form";
import Input from "../Input";
import SelectProfileType from "../SelectProfileType";

export default function RegistrationForm() {
  const metodos = useFormContext();
  return (
    <div>
      <div className="flex flex-col gap-1">
        <p>Nome:</p>
        <Input {...metodos.register("name")} placeholder="Ana Maria" />
      </div>
      <div className="flex flex-col gap-1">
        <p>E-mail:</p>
        <Input
          {...metodos.register("email")}
          className="placeholder:text-[8px]"
          placeholder="anamaria@exemplo.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Telefone:</p>
        <Input {...metodos.register("phone")} placeholder="12345-6789" />
      </div>
      <div className="flex flex-col gap-1">
        <p>Idade:</p>
        <Input {...metodos.register("age")} placeholder="0" />
      </div>
      <div className="flex flex-col gap-1">
        <p>Perfil:</p>
        <SelectProfileType />
      </div>
    </div>
  );
}
