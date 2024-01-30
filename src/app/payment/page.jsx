"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Payment = () => {
  const { user } = useAuth();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleTransaction = async (amount) => {
    setIsloading(true);
    const data = {
      id:
        "MS-" +
        user.id +
        Math.floor(Math.random() * (1000000 - 100000 + 1)) +
        100000,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
      amount: amount,
    };

    const response = await fetch("/api/tokenizer", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const requestData = await response.json();
    window.snap.pay(requestData.token);
    setIsloading(false);
  };
  return (
    <div className="px-8 md:px-20">
      {isLoading ? (
        <div className="flex justify-center items-center mt-60">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-6">Nama Akun</h1>
          <p className="uppercase text-xl font-bold mb-6 text-gray-800">
            {user ? user.fullname : ""}
          </p>
          <h2 className="text-2xl font-semibold mb-6 ">Saldo </h2>
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 md:p-10 rounded-2xl text-white">
            <p className="text-3xl md:text-6xl">
              Rp {user ? user.balance : "0"}
            </p>
          </div>
          {/* <h1 className="text-2xl font-semibold my-10 ">Rencana Tabungan</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        <button className="transition-transform duration-300 bg-gradient-to-r from-indigo-500 to-indigo-400 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-300 p-3 md:p-8 rounded-2xl text-white flex justify-center">
        <FaPlus size={35} />
        </button>
      </div> */}
          <h2 className="my-10 text-2xl font-semibold">Pilih Tabungan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 mb-10">
            <button
              className="transition-all duration-500 bg-teal-500 hover:bg-teal-600 p-3 md:p-8 rounded-2xl text-white flex justify-center text-2xl"
              onClick={() => handleTransaction(300000)}
            >
              300.000
            </button>
            <button
              className="transition-all duration-500 bg-teal-500 hover:bg-teal-600 p-3 md:p-8 rounded-2xl text-white flex justify-center text-2xl"
              onClick={() => handleTransaction(500000)}
            >
              500.000
            </button>
            <button
              className="transition-all duration-500 bg-teal-500 hover:bg-teal-600 p-3 md:p-8 rounded-2xl text-white flex justify-center text-2xl"
              onClick={() => handleTransaction(700000)}
            >
              700.000
            </button>
            <button
              className="transition-all duration-500 bg-teal-500 hover:bg-teal-600 p-3 md:p-8 rounded-2xl text-white flex justify-center text-2xl"
              onClick={() => handleTransaction(1000000)}
            >
              1.000.000
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
