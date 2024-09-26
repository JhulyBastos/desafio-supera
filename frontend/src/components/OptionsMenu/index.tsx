"use client";
import { useState } from "react";
import { Button } from "../Button";
import RegisterModal from "../RegisterModal";

export default function OptionsMenu() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  function toggleRegisterModal() {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  }

  return (
    <>
      <div className="w-1/4 h-screen bg-white flex flex-col items-start px-4 rounded-r-2xl ">
        <h1 className="w-full text-dark-20 font-bold text-6xl py-10 px-4">
          C<span className="text-black/80 text-[45px]">RUD</span>
        </h1>
        <div className=" flex flex-col gap-4">
          <Button onClick={toggleRegisterModal}>
            Cadastrar um novo usuário
          </Button>
        </div>
      </div>
      {isRegisterModalOpen && (
        <RegisterModal closeRegisterModal={toggleRegisterModal} />
      )}
    </>
  );
}
