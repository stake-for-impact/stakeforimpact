import { useContractRead } from 'wagmi'
import addProjectABI from "../utils/abi.json"
import { Link } from "react-router-dom";
import { wagmiContractConfig } from './sficontract';

export function ProjectList() {
    const { data, isError, isLoading } = useContractRead({
        // address: '0xCbC05354126a9bE8d87e9110e6eCa45fb85C7a78',
        // abi: addProjectABI,
        ...wagmiContractConfig,
        functionName: 'getAllVaults',
    })
    console.log(data)
    const beneficiaries = data && (Object.values(data as object))

    return (
        beneficiaries ? (
            <section className="pb-12">
                <div className="relative">
                    <div className="relative flex justify-start">
                        <span className="pr-3 text-lg font-medium text-neutral-600 pb-2"> All Projects </span>
                    </div>
                </div>
                <div className="space-y-8 ">
                    {beneficiaries.map((b, i) =>
                        <div key={i} className="py-8 sm:flex group bg-white rounded-3xl">
                            <div className="mb-4 sm:mb-0 sm:mx-4">
                                <div className={`w-8 h-8 lg:w-32 lg:h-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl`}></div>
                            </div>
                            <div>
                                <p className="mt-3 text-lg font-medium leading-6">
                                    <Link to={`/detail/${i}`} className=" lg:px-20 text-xl text-gray-800 group-hover:underline lg:text-2xl">{b.name} </Link>
                                </p>
                                <p className="mt-2 text-lg text-gray-500 lg:px-20">{b.description}</p>
                            </div>
                        </div>)}

                </div>
            </section>) : (<>loading</>)
    )
}