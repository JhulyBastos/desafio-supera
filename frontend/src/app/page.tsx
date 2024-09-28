"use client";
import OptionsMenu from "@/components/OptionsMenu";
import TableSearches from "@/components/TableSearches";
import UserTable from "@/components/UserTable";
import { Usuario } from "@/types/usuario";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nameEmailFilter, setNameEmailFilter] = useState("");
  const [profileFilter, setProfileFilter] = useState("");

  const fetchUsers = async (page: number) => {
    try {
      const res = await axios.get("http://localhost:3001/users", {
        params: {
          page: page,
          search: nameEmailFilter,
          profile: profileFilter,
        },
      });
      setUsers(res.data.users);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage, isFetching, nameEmailFilter, profileFilter]);

  return (
    <div className="w-full h-screen bg-brand-color/20">
      <div className="flex">
        <div className="w-1/4">
          <OptionsMenu setIsFetching={setIsFetching} />
        </div>
        <div className="w-full">
          <div className="w-full h-screen flex flex-col p-10">
            <TableSearches
              setProfileFilter={setProfileFilter}
              nameEmailFilter={nameEmailFilter}
              profileFilter={profileFilter}
              setNameEmailFilter={setNameEmailFilter}
            />
            <UserTable
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              setIsFetching={setIsFetching}
              users={users}
            />
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
