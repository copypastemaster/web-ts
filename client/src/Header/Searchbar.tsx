import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

const Searchbar: React.FC = () => {
  return (
    <div className="flex w-full max-w-2xl m-3 mx-auto justify-between">
      <Input 
        className="mx-20 bg-secondary-foreground text-white border-none"   placeholder="Look for todo..."/>
      <Button 
        className="text-lg text-white bg-primary">
              +
      </Button>      
    </div>
  )
}

export default Searchbar