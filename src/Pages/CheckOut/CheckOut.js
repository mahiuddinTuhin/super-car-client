import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const {  facility, img, price, title, _id} =
    useLoaderData();
  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const name = fName + " " + lName;
    const email = form.email.value || "unregistered";
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const zip = form.zip.value;
    const note = form.note.value;
    const order = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      email,
      zip,
      state,
      city,
      note,
      address,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("order placed");
        }
        console.log(data);
      });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-10 gap-4">
      <img src={img} alt="" className="rounded-xl shadow" />
      <form onSubmit={handleCheckOut}>
        <fieldset className="flex flex-col gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
          <div className="space-y-2 ">
            <p className="text-3xl text-center">{title}</p>
            <p className="font-medium text-rose-600 text-center">
              Price: ${price}
            </p>
            <h3 className="text-2xl text-slate-400 text-center">Facilities</h3>
            <ul className="font-medium grid grid-cols-2 justify-items-center">
              {facility.map((a) => (
                <li key={facility.indexOf(a)}>{a.name}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
              ></input>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                name="lastName"
                required
                id="lastname"
                type="text"
                placeholder="Last name"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                defaultValue={`${user?.email}` || "unregistered"}
                readOnly
                name="email"
                required
                id="email"
                type="email"
                placeholder="Email"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                data-temp-mail-org="0"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                name="address"
                required
                id="address"
                type="text"
                placeholder=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                name="city"
                required
                id="city"
                type="text"
                placeholder=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                name="state"
                required
                id="state"
                type="text"
                placeholder=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                name="zip"
                required
                id="zip"
                type="text"
                placeholder=""
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="note" className="text-sm">
                note:
              </label>
              <textarea
                name="note"
                id="note"
                type="text"
                placeholder="what's on your mind"
                className="resize-x w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-900 text-slate-200 w-full hover:bg-green-500 hover:text-slate-900 rounded-md py-1 text-xl"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CheckOut;
