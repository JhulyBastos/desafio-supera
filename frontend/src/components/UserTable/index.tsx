"use client";
import { Usuario } from "@/types/usuario";
import { Dispatch, SetStateAction, useState } from "react";
import RegisterModal from "../RegisterModal";
import RemoveUserModal from "../RemoveUserModal";

interface UserTableProps {
  users: Usuario[];
  setIsFetching: (value: boolean) => void;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
}

function UserTable({
  users,
  setIsFetching,
  setCurrentPage,
  currentPage,
  totalPages,
}: UserTableProps) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectUser, setSelectUser] = useState<Usuario | undefined>(undefined);
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  function reset() {
    setSelectUser(undefined);
    setReadOnly(false);
  }

  function toggleRegisterModal() {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  }
  function toggleRemoveModal() {
    setOpenRemoveModal(!openRemoveModal);
  }

  function closeRemoveModal() {
    setOpenRemoveModal(false);
    reset();
  }
  function closeRegisterModal() {
    setIsRegisterModalOpen(false);
    reset();
  }
  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className=" w-full flex flex-col p-4 mx-auto text-black">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-center  rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Nome</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Perfil</th>
              <th className="py-2 px-4 border-b">Idade</th>
              <th className="py-2 px-4 border-b">Telefone</th>
              <th className="py-2 px-4 border-b">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.profile}</td>
                <td className="py-2 px-4 border-b">{user.age}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => {
                      toggleRegisterModal();
                      setSelectUser(user);
                    }}
                    className="mr-2 px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => {
                      toggleRegisterModal();
                      setSelectUser(user);
                      setReadOnly(true);
                    }}
                    className="mr-2 px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                  >
                    Visualizar
                  </button>
                  <button
                    onClick={() => {
                      toggleRemoveModal();
                      setSelectUser(user);
                    }}
                    className="mr-2 px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-lg"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Próximo
        </button>
      </div>
      {isRegisterModalOpen && (
        <RegisterModal
          reset={reset}
          readOnly={readOnly}
          setIsFetching={setIsFetching}
          closeRegisterModal={closeRegisterModal}
          editData={selectUser}
        />
      )}
      {openRemoveModal && (
        <RemoveUserModal
          reset={reset}
          id={selectUser?.id ?? ""}
          setIsFetching={setIsFetching}
          closeRemoveModal={closeRemoveModal}
        />
      )}
    </div>
  );
}

export default UserTable;
