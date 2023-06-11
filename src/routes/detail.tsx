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
      <>
        <section>
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
              <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                  <div className="relative w-full max-w-lg">
                    <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                    <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative">
                      <img className="object-cover object-center mx-auto rounded-lg shadow-2xl aspect-square opacity-50" alt="hero" src="https://source.unsplash.com/random/700×700/?people" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Support </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"> {data![0]}.</h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-500"> {data![1]}</p>
                <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                  <form action="" method="post" id="revue-form" name="revue-form" target="_blank" className="p-2 mt-8 transition duration-500 ease-in-out transform border2 bg-gray-50 rounded-xl sm:max-w-lg sm:flex">
                    <div className="flex-1 min-w-0 revue-form-group">
                      <label htmlFor="stakeamount" className="sr-only">Stake amount</label>
                      <input id="stakeamount" type="number" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Amount of stake  "/>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                      <button type="submit" value="Subscribe" name="stake" id="stake" className="block w-full px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Stake</button>
                    </div>
                  </form>
                  <div className="sm:max-w-lg sm:flex">
                    <p className="mt-3 text-xs text-gray-500">
                      By staking, you agree with 
                      <a target="_blank" href="/tos">Terms of Service</a>
                      &nbsp;and&nbsp;
                      <a target="_blank" href="/privacy">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>


    )
  );
}
