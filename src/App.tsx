import { useState } from "react";
import Bottom from "./lib/components/Bottom"
import Top from "./lib/components/Top"


const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Top search={search} setSearch={setSearch}/>
      <Bottom search={search}/>
    </div>
  )
}

export default App