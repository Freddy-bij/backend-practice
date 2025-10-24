
import { GraduationCap, Bell, Settings, User } from "lucide-react"

const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">EduData</h2>
            <p className="text-xs text-muted-foreground">School Management System</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button>
            <Bell className="h-5 w-5" />
          </button>
          <button>
            <Settings className="h-5 w-5" />
          </button>
          <button>
            <User className="h-5 w-5" />
          </button>



        </div>
      </div>
    </header>
  )
}

export default Header