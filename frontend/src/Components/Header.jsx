
import { GraduationCap, Bell, Settings, User } from "lucide-react"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Logo/>
        <div className="flex items-center gap-2">
          <button className="hover:bg-blue-400 hover:p-1 hover:rounded hover:text-white">
            <Bell className="h-5 w-5" />
          </button>
          <button className="hover:bg-blue-400 hover:p-1 hover:rounded hover:text-white">
            <Settings className="h-5 w-5" />
          </button>
          <button className="hover:bg-blue-400 hover:p-1 hover:rounded hover:text-white">
            <User className="h-5 w-5" />
          </button>



        </div>
      </div>
    </header>
  )
}

export default Header