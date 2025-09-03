import { FaSearchLocation } from "react-icons/fa";

export const SearchInput = () => {
  return (
    <div className='flex flex-row items-center'>
        <input type="text" placeholder='search for city...' className='w-[250px] mr-4 px-2 outline-none rounded-xl h-8 flex items-center text-[18px]'/>
        <button>
            <FaSearchLocation size={30} className='text-white cursor-pointer'/>
        </button>
    </div>
  )
}
