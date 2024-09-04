import { Separator } from "@radix-ui/react-separator"
import Sidebar from "./Sidebar/Sidebar"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

function App() {
  return (
    <div className='flex bg-slate-400 max-w-screen-md mx-auto mt-48 p-4 rounded-md'>
      <Sidebar />
      <Separator orientation="vertical" className='bg-black border-blue-600 p-0.5'/>
      <aside className="flex w-full max-w-2xl m-3 mx-auto justify-between">
        <Input className="mx-20 bg-secondary-foreground text-white border-none" placeholder="Look for todo..."/>
        <Button className="text-lg text-white bg-primary">
            +
        </Button>
      </aside>
    </div>
  )
}

export default App
