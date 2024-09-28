import axios from "axios";
import { Button } from "../Button";
import { Bounce, toast } from "react-toastify";

interface RemoveUserModalProps {
  closeRemoveModal: () => void;
  setIsFetching: (value: boolean) => void;
  id: string;
  reset: () => void;
}

export default function RemoveUserModal({
  closeRemoveModal,
  setIsFetching,
  id,
  reset,
}: RemoveUserModalProps) {
  async function removeUser() {
    const resultado = await axios.delete(`http://localhost:3001/users/${id}`);
    if (resultado) {
      toast.success("Usuário deletado com sucesso!", {
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
    closeRemoveModal();
    setIsFetching(true);
    reset();
  }

  return (
    <div className="w-full h-screen fixed inset-0 bg-black/60 flex justify-center items-center py-5 px-10 ">
      <div className="w-full max-w-[400px] h-full max-h-[300px] flex flex-col items-center justify-between rounded-xl py-14 px-6 bg-white overflow-auto ">
        <div>
          <p className="text-xl text-center">
            Você realmente deseja deletar esse usuário?
          </p>
        </div>
        <div className=" flex flex-col items-center gap-8 ">
          <div className="flex gap-4 ">
            <Button onClick={removeUser} variant="tertiary">
              Remover
            </Button>
            <Button variant="primary" onClick={closeRemoveModal}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
