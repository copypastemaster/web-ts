import React from 'react'
import { Home, CheckCheck, Trash2 } from 'lucide-react' 
import TooltipComponent from './Tooltip'


const Sidebar: React.FC = () => {
  return (
    <div className='flex flex-col justify-around min-h-44 min-w-10'>
      <TooltipComponent icon = { <Home className='focus:bg-slate-300'/> } content='Todos' />
      <TooltipComponent icon = { <CheckCheck /> } content='Finished todos' /> 
      <TooltipComponent icon = { <Trash2 /> } content='Deleted todos' />
    </div>
  )
}

export default Sidebar