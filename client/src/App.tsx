import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react"

function App() {
 
  return (
    
    <>
      <header>
      <SignedOut>
        <SignInButton>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    </>
  )
}

export default App
