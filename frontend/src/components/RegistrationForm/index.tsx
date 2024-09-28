import { useFormContext } from "react-hook-form";
import Input from "../Input";
import SelectProfileType from "../SelectProfileType";

interface RegistrationFormProps {
  readOnly: boolean;
}

export default function RegistrationForm({ readOnly }: RegistrationFormProps) {
  const metodos = useFormContext();
  return (
    <div>
      <div className="flex flex-col gap-1">
        <p>Nome:</p>
        <Input
          {...metodos.register("name")}
          placeholder="Ana Maria"
          disabled={readOnly}
        />
        {metodos.formState.errors.name ? (
          <p className="text-red-600 text-sm">
            {metodos.formState.errors.name.message as string}
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p>E-mail:</p>
        <Input
          {...metodos.register("email")}
          className="placeholder:text-[8px]"
          placeholder="anamaria@exemplo.com"
          disabled={readOnly}
        />
        {metodos.formState.errors.email ? (
          <p className="text-red-600 text-sm">
            {metodos.formState.errors.email.message as string}
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p>Telefone:</p>
        <Input
          {...metodos.register("phone")}
          placeholder="12345-6789"
          disabled={readOnly}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Idade:</p>
        <Input
          {...metodos.register("age")}
          placeholder="0"
          disabled={readOnly}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Perfil:</p>

        <SelectProfileType readOnly={readOnly} />
        {metodos.formState.errors.profile ? (
          <p className="text-red-600 text-sm">
            {metodos.formState.errors.profile.message as string}
          </p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
