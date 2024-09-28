interface TableSearchesProps {
  setNameEmailFilter: (value: string) => void;
  nameEmailFilter: string;
  profileFilter: string;
  setProfileFilter: (value: string) => void;
}

export default function TableSearches({
  setNameEmailFilter,
  nameEmailFilter,
  profileFilter,
  setProfileFilter,
}: TableSearchesProps) {
  return (
    <div className=" mb-4 flex items-center space-x-4">
      <input
        type="text"
        placeholder="Filtrar por nome ou e-mail"
        value={nameEmailFilter}
        onChange={(e) => setNameEmailFilter(e.target.value)}
        className="w-full h-[40px]  bg-dark-10/10 p-4 rounded-lg placeholder:text-sm outline-none"
      />
      <select
        value={profileFilter}
        onChange={(e) => setProfileFilter(e.target.value)}
        className="h-[40px]  px-3 py-2 bg-dark-10/10 rounded-lg  focus:outline-none"
      >
        <option value="" className=" bg-white">
          Todos os Perfis
        </option>
        <option value="admin" className=" bg-white">
          Admin
        </option>
        <option value="user" className=" bg-white">
          User
        </option>
      </select>
    </div>
  );
}
