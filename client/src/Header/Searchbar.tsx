import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

interface ShouldHide { 
  shouldHide: boolean;
}

const Searchbar: React.FC<ShouldHide> = ({ shouldHide }) => {
  return (
    <div className="flex w-full max-w-2xl m-3 mx-auto justify-between">
      <Input 
        className="mx-20 bg-secondary-foreground text-white border-none"   placeholder="Look for todo..."/>
      <Button 
        className="text-lg text-white bg-primary"
        hidden={shouldHide}>
              +
      </Button>      
    </div>
  )
}

export default Searchbar