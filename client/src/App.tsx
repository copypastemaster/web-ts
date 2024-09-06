import { Separator } from "@radix-ui/react-separator"
import Sidebar from "./Sidebar/Sidebar"
import MainContent from "./Content/MainContent"

function App() {
  return (
    <div className='flex bg-slate-400 max-w-screen-md mx-auto mt-48 p-4 rounded-md'>
      <Sidebar />
      <Separator orientation="vertical" className='bg-black border-blue-600 p-0.5'/>
      <div className="w-full flex-col">
        <MainContent />
      </div>
    </div>
  )
}

export default App
