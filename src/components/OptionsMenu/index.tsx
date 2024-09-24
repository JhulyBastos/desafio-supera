"use client";
import { Button } from "../Button";
import { useRouter } from "next/navigation";

export default function OptionsMenu() {
  const router = useRouter();
  return (
    <div>
      <div className="w-1/4 h-screen bg-white flex flex-col items-start px-4 rounded-r-2xl ">
        <h1 className="w-full text-dark-20 font-bold text-6xl py-10 px-4">
          C<span className="text-black/80 text-[45px]">RUD</span>
        </h1>
        <div className=" flex flex-col gap-4">
          <Button onClick={() => router.push("/UserRegistration")}>
            Cadastrar um novo usuário
          </Button>

          <Button onClick={() => router.push("/UserList")}>
            Visualizar lista de usuários
          </Button>
        </div>
      </div>
    </div>
  );
}
