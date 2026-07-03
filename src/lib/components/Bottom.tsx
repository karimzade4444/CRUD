import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../api/api"
import { Button } from "antd";


const Bottom = () => {
    const { data } = useQuery({
        queryFn:getUsers,
        queryKey:["getUsers"]
    });

  return (
    <div className=" flex justify-around flex-wrap gap-10 mt-10">
      {data?.map((el) => (
        <div key={el.id} className="w-100 h-80 bg-neutral-800/70 rounded-2xl">
          <img src={el.img} alt="" className="w-full h-[65%] rounded-2xl" />
          <p className=" text-xl pl-3">{el.name}</p>
          <p className="pl-3 text-xs text-white/60 truncate">{el.title}</p>
          <div className="p-3 flex justify-between items-center">
            <Button>Просмотр</Button>
            <Button type="primary" danger>Удалить</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bottom