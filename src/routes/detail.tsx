import { Form, useLoaderData } from "react-router-dom";
import { useContractRead } from "wagmi";
import addProjectABI from "../utils/abi.json";
import { wagmiContractConfig } from "../components/sficontract";

export async function loader(req: { params: any }) {
  //console.log(req.params.id)
  return req.params.id;
}

export default function Detail() {
  const id = useLoaderData();
  const { data, isError, isLoading } = useContractRead({
    // address: '0xCbC05354126a9bE8d87e9110e6eCa45fb85C7a78',
    // abi: addProjectABI,
    ...wagmiContractConfig,
    functionName: "vaults",
    args: [id as bigint],
  });

  //console.log(data)

  return (
    data && (
      <section className="w-full">
        <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="flex w-full mx-auto text-left">
            <div className="relative flex-col items-center mx-auto">
              <div className="inline-flex items-center text-left w-full">
                <div className="relative items-center mx-auto lg:inline-flex">
                  <div className="items-start text-left lg:inline-flex">
                    <div className="lg:pr-16">
                      <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 lg:text-5xl lg:max-w-7xl">
                        {data![0]}
                      </h1>
                    </div>
                    <div>
                      <p className="max-w-md mt-4 text-base text-gray-500 md:max-w-xl lg:mt-0">
                        {data![1]}
                      </p>
                      <form
                        action=""
                        method="post"
                        id="revue-form"
                        name="revue-form"
                        target="_blank"
                        className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex"
                      >
                        <div className="flex-1 min-w-0 revue-form-group">
                          <label htmlFor="stakeamount" className="sr-only">
                            amount to stake
                          </label>
                          <input
                            id="stakeamount"
                            type="email"
                            className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            placeholder="Enter amount to stake  "
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                          <button
                            type="submit"
                            value="Subscribe"
                            name="member[subscribe]"
                            id="member_submit"
                            className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                          >
                            Stake
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center py-24 mx-auto rounded-lg max-w-7xl">
                <img
                  className="object-cover object-center w-full rounded-xl"
                  alt="hero"
                  src="https://source.unsplash.com/random/900×700/?people"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
