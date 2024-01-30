import React from "react";

const Contact = () => {
  return (
    <div className="my-10">
      <div className="bg-white w-full md:w-3/4 mx-auto p-10 rounded md:shadow-xl md:border">
        <h1 className="text-center text-3xl font-semibold">
          Send a message to us!
        </h1>
        <form action="">
          <div className="flex flex-col my-3">
            <label htmlFor="" className="text-center">
              Email:
            </label>
            <div className="border-2 p-3 bg-white rounded ">
              <input type="text" className="w-full outline-none" />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="" className="text-center">
              Name:
            </label>
            <div className="border-2 p-3 bg-white rounded">
              <input type="text" className="w-full outline-none" />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="" className="text-center">
              Message Type:
            </label>
            <div className="border-2 p-3 bg-white rounded">
              <select name="" id="" className="w-full outline-none border-none">
                <option value="">Masukkan</option>
                <option value="">Penemuan Bug</option>
                <option value="">Masalah Transaksi</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="" className="text-center">
              Messages:
            </label>
            <div className="border-2 p-3 bg-white rounded">
              <input type="text" className="w-full outline-none" />
            </div>
          </div>
          <div className="flex flex-col my-3">
            <label htmlFor="" className="text-center">
              No. Telepon:
            </label>
            <div className="border-2 p-3 bg-white rounded">
              <input type="text" className="w-full outline-none" />
            </div>
          </div>
        </form>
        <button className="w-full bg-green-600 p-3 text-white  rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
