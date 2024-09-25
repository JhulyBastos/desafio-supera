import { Button } from "../Button";
import RegistrationForm from "../RegistrationForm";

interface RegisterModalProps {
  closeRegisterModal: () => void;
}

export default function RegisterModal({
  closeRegisterModal,
}: RegisterModalProps) {
  return (
    <div className="w-full h-screen fixed inset-0 bg-black/60 flex justify-center items-center py-5 px-10 ">
      <div className="w-full max-w-[600px] h-full max-h-[700px] rounded-xl py-5 px-6 bg-white overflow-auto flex items-center justify-center">
        <div className=" flex flex-col items-center gap-8 ">
          <h1 className="text-3xl font-semibold text-dark-20 py-2 px-4">
            Registrar novo usuário
          </h1>
          <RegistrationForm />
          <div className="flex gap-4 ">
            <Button variant="secondary">Registrar</Button>
            <Button variant="tertiary" onClick={closeRegisterModal}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
