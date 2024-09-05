import React from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from '@radix-ui/react-tooltip';

interface TooltipProps {
  icon: React.ReactNode;
  content: string;
}

const TooltipComponent: React.FC<TooltipProps>= ({ icon, content }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{icon}</TooltipTrigger>
        <TooltipContent>
          <p className='bg-white rounded-md p-2 text-xs'>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipComponent