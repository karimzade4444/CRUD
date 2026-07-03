import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../api/api"


const Bottom = () => {
    const { data } = useQuery({
        queryFn:getUsers,
        queryKey:["getUsers"]
    });

  return (
    <div className=" flex justify-around flex-wrap gap-10 mt-10">
     {data?.map((el)=>(
        <div key={el.id} className="w-100 h-80 bg-white rounded-2xl">
           
        </div>
     ))}
    </div>
  )
}

export default Bottom