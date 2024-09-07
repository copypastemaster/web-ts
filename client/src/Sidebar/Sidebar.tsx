import React from 'react'
import { Home, CheckCheck, Trash2 } from 'lucide-react' 
import TooltipComponent from './Tooltip'
import { Link } from 'react-router-dom'


const Sidebar: React.FC = () => {
  return (
    <div className='flex flex-col justify-around min-h-44 min-w-10'>
      <Link to='/'>
        <TooltipComponent icon = { <Home className='focus:bg-slate-300'/> } content='Todos' />
      </Link>

      <Link to ='/finished'>
        <TooltipComponent icon = { <CheckCheck /> } content='Finished todos' /> 
      </Link>

      <Link to ='/deleted'>
        <TooltipComponent icon = { <Trash2 /> } content='Deleted todos' />
      </Link>
    </div>
  )
}

export default Sidebar