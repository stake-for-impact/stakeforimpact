"use client";

import { BaseError } from "viem";
import {
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from "wagmi";
import addProjectABI from "../utils/abi.json";

export default function AddCause() {

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: "0xCbC05354126a9bE8d87e9110e6eCa45fb85C7a78",
    abi: addProjectABI,
    functionName: "createVault",
  });
  return (
    <div className="items-center w-full max-w-7xl px-5 py-12 lg:px-20">
      <div className="flex flex-col p-10 mx-auto my-6 transition duration-500 ease-in-out bg-white rounded-lg md:mt-0">
        <div className="mt-8">
          <form
            className="mt-6 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const beneficiary = formData.get("address") as string;
              const projectname = formData.get("projectname") as string;
              const description = formData.get("description") as string;
              write({
                args: [beneficiary, projectname, description],
              });
            }}
          >
            <div className="grid grid-cols-1 gap-2">
              <label
                htmlFor="projectname"
                className="block text-sm font-medium text-neutral-600"
              >
                  Campaign name
              </label>
              <div className="mt-1">
                <input
                  id="projectname"
                  name="projectname"
                  type="text"
                  placeholder="Name of your cause"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-neutral-600"
              >
                  Beneficiary address
              </label>
              <div className="mt-1">
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Ethereum address to receive donations"
                  className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-neutral-600"
              >
                Description
              </label>
              <textarea
                className="block w-full px-5 py-3 mt-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 apearance-none autoexpand"
                id="description"
                name="description"
                placeholder="Describe your cause..."
              />
            </div>

            <div className="flex items-center justify-between" />

            <button
              disabled={!write}
              type="submit"
              className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transhtmlForm border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="100%"
                  height="100%"
                  className="w-6 h-6"
                  version="1.1"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 784.37 1277.39"
                >
                  <g id="Layer_x0020_1">
                    <g id="_1421394342400">
                      <g>
                        <polygon
                          fill="#343434"
                          fillRule="nonzero"
                          points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "
                        />
                        <polygon
                          fill="#8C8C8C"
                          fillRule="nonzero"
                          points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "
                        />
                        <polygon
                          fill="#3C3C3B"
                          fillRule="nonzero"
                          points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "
                        />
                        <polygon
                          fill="#8C8C8C"
                          fillRule="nonzero"
                          points="392.07,1277.38 392.07,956.52 -0,724.89 "
                        />
                        <polygon
                          fill="#141414"
                          fillRule="nonzero"
                          points="392.07,882.29 784.13,650.54 392.07,472.33 "
                        />
                        <polygon
                          fill="#393939"
                          fillRule="nonzero"
                          points="0,650.54 392.07,882.29 392.07,472.33 "
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                  <span className="ml-4"> Create campaign</span>
              </div>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}