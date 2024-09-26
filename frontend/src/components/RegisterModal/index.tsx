import { Usuario } from "@/types/usuario";
import { Button } from "../Button";
import RegistrationForm from "../RegistrationForm";
import { Form, FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

interface RegisterModalProps {
  closeRegisterModal: () => void;
}

export default function RegisterModal({
  closeRegisterModal,
}: RegisterModalProps) {
  const metodos = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: 0,
      profile: "",
    },
  });
  async function onSubmit(data: any) {
    if (!data) return;
    const resultado = await axios.post("http://localhost:3001/users", { data });

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
    closeRegisterModal();
  }

  return (
    <div className="w-full h-screen fixed inset-0 bg-black/60 flex justify-center items-center py-5 px-10 ">
      <div className="w-full max-w-[600px] h-full max-h-[700px] rounded-xl py-5 px-6 bg-white overflow-auto flex items-center justify-center">
        <div className=" flex flex-col items-center gap-8 ">
          <h1 className="text-3xl font-semibold text-dark-20 py-2 px-4">
            Registrar novo usuário
          </h1>
          <FormProvider {...metodos}>
            <form
              onSubmit={metodos.handleSubmit(onSubmit)}
              className=" text-black flex flex-col gap-4"
            >
              <RegistrationForm />

              <div className="flex gap-4 ">
                <Button variant="secondary" type="submit">
                  Registrar
                </Button>
                <Button variant="tertiary" onClick={closeRegisterModal}>
                  Cancelar
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
