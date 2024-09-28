import { FormData, schema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { Button } from "../Button";
import RegistrationForm from "../RegistrationForm";
import { Usuario } from "@/types/usuario";

interface RegisterModalProps {
  closeRegisterModal: () => void;
  editData?: Usuario;
  setIsFetching: (value: boolean) => void;
  readOnly?: boolean;
  reset?: () => void;
}

export default function RegisterModal({
  closeRegisterModal,
  editData,
  setIsFetching,
  readOnly,
  reset,
}: RegisterModalProps) {
  const defaultValues = editData
    ? {
        name: editData.name,
        email: editData.email,
        phone: editData.phone,
        age: editData.age,
        profile: editData.profile,
      }
    : { name: "", email: "", phone: "", age: "", profile: "" };

  const metodos = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  async function onSubmit(data: FormData) {
    if (!data) return;

    if (editData) {
      const resultado = await axios.put(
        `http://localhost:3001/users/${editData.id}`,
        {
          data,
        }
      );
      if (resultado)
        toast.success("Usuário editado com sucesso!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
    } else {
      const resultado = await axios.post("http://localhost:3001/users", {
        data,
      });
      if (resultado)
        toast.success("Usuário cadastrado com sucesso!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
    }

    closeRegisterModal();
    setIsFetching(true);
    reset && reset();
  }

  return (
    <div className="w-full h-screen fixed inset-0 bg-black/60 flex justify-center items-center py-5 px-10 ">
      <div className="w-full max-w-[600px] h-full max-h-[700px] rounded-xl py-5 px-6 bg-white overflow-auto flex items-center justify-center">
        <div className=" flex flex-col items-center gap-8 ">
          <h1 className="text-3xl font-semibold text-dark-20 py-2 px-4">
            {readOnly ? "Visualizar" : editData ? "Editar" : "Registrar novo"}{" "}
            usuário
          </h1>
          <FormProvider {...metodos}>
            <form
              onSubmit={metodos.handleSubmit(onSubmit)}
              className=" text-black flex flex-col gap-4"
            >
              <RegistrationForm readOnly={readOnly ?? false} />

              <div className="flex gap-4 ">
                {!readOnly && (
                  <Button variant="secondary" type="submit">
                    {editData ? "Editar" : "Registrar"}
                  </Button>
                )}
                <Button variant="tertiary" onClick={closeRegisterModal}>
                  {readOnly ? "Voltar" : "Cancelar"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
