import React, { FunctionComponent, useMemo, useState } from "react";
import Table from "./Table";
import { createColumnHelper } from "@tanstack/react-table";
import { InputText } from "./InputText";
import { Modal } from "./Modal";
import { Result } from "../interfaces/usersInterfaces";
import Image from "next/image";
import CardUser from "./CardUser";

type User = {
  users: Result[];
};

const UserTable: FunctionComponent<User> = ({ users }) => {
  const [filter, setFilter] = useState<string>("");
  const [isModalDetails, setIsModalDetails] = useState<boolean>(false);
  const [detailsUser, setDetailsUser]= useState<Result>()
  const [listUser] = useState<Result[]>(users)


const handleCloseModal = () => {
      setIsModalDetails(!isModalDetails);
    };

  const columnHelper = createColumnHelper<Result>();
  const columns = useMemo(() => {

    const handleDetailsUser = (user: Result) => {
      setIsModalDetails(!isModalDetails);
      setDetailsUser(user)
    };


    return [
      columnHelper.accessor((row) => row.picture?.medium, {
        id: "img",
        enableSorting: false,
        header: () => "Foto",
        cell: (info) => (
          <div id="img" className="flex items-center justify-center cursor-pointer" onClick={() => handleDetailsUser(info.row.original)}>
            <Image
              src={`${info.row.original.picture?.medium}`}
              width={40}
              height={40}
              alt="imagen"
              className="rounded-full"
            />
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.dob?.age, {
        id: "age",
        enableSorting: false,
        header: () => "Edad",
        cell: (info) => (
          <div
            className="flex justify-center text-[#AFAFAF] items-center p-5 cursor-pointer"
            onClick={() => handleDetailsUser(info.row.original)}
          >
            <p>{info.row.original.dob?.age}</p>
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.gender, {
        id: "gender",
        enableSorting: true,
        header: () => "Genero",
        cell: (info) => (
          <div className="flex justify-center text-[#AFAFAF] items-center p-5 cursor-pointer" onClick={() => handleDetailsUser(info.row.original)}>
            <p>{info.row.original.gender}</p>
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.name?.first, {
        id: "name",
        enableSorting: true,
        header: () => "Nombre",
        cell: (info) => (
          <div className="flex justify-center text-[#AFAFAF] items-center p-5 cursor-pointer" onClick={() => handleDetailsUser(info.row.original)}>
            <p>{info.row.original.name?.first}</p>
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.name?.last, {
        id: "last",
        enableSorting: false,
        header: () => "Apellido",
        cell: (info) => (
          <div className="flex justify-center text-[#AFAFAF] items-center p-5 cursor-pointer" onClick={() => handleDetailsUser(info.row.original)}>
            <p>{info.row.original.name?.last}</p>
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.location?.country, {
        id: "country",
        enableSorting: true,
        header: () => "Pais",
        cell: (info) => (
          <div className="flex justify-center text-[#AFAFAF] items-center p-5 cursor-pointer" onClick={() => handleDetailsUser(info.row.original)}>
            <p>{info.row.original.location?.country}</p>{" "}
          </div>
        ),
      }),
      columnHelper.accessor((row) => row.location?.city, {
        id: "city",
        enableSorting: false,
        header: () => "Ciudad",
        cell: (info) => (
          <div className="flex justify-center text-[#AFAFAF] items-center p-5 cursor-pointer" onClick={() => handleDetailsUser(info.row.original)}>
            <p>{info.row.original.location?.city}</p>
          </div>
        ),
      }),
    ];
  }, [columnHelper, isModalDetails]);

  return (
    <div className="flex flex-col gap-8">
      <Modal
        isOpen={isModalDetails}
        onClose={() => {
          setIsModalDetails(!isModalDetails);
        }}
        bg="bg-[#94ccf6]"
      >
        <div className="w-full flex flex-col items-center gap-4 rounded-sm">
          {detailsUser && <CardUser details={detailsUser} onCloseModal={handleCloseModal}/>}
        </div>
      </Modal>
      <h1 className="text-2xl font-bold">Lista de usuarios</h1>
      <article className="w-full flex items-center justify-between">
        <InputText
          value={filter}
          id="Search"
          label="Buscar"
          onChange={(e) => setFilter(e.target.value)}
          inputClassName="rounded-[3px]"
          containerClassName="flex items-center gap-2"
        />
       
      </article>

      <Table data={listUser} columns={columns} filter={filter} />
    </div>
  );
};

export default UserTable;
