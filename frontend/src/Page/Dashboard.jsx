import {
  Activity,
  Bell,
  Building2,
  ChevronRight,
  FileText,
  Home,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  X,
  ActivityIcon,
} from "lucide-react"
import Logo from "../Components/Logo"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HomePage from "./Home"

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-[#37507E]/20 rounded-full opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home") // New state for active section

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const handleSidebarClick = (section) => {
    setActiveSection(section)
    setSidebarOpen(false)
  }

  const sidebarItems = [
    { icon: Home, label: "Home", active: activeSection === "home", url: "/", section: "home" },
    {
      icon: Plus,
      label: "Add Student",
      hasSubmenu: true,
      url: "new-student",
      section: "add-student",
      active: activeSection === "add-student",
    },
    {
      icon: Package,
      label: "Attendance Students",
      hasSubmenu: true,
      url: "/student",
      section: "student",
      active: activeSection === "students",
    },
    {
      icon: Building2,
      label: "Courses",
      hasSubmenu: true,
      url: "/courses",
      section: "courses",
      active: activeSection === "courses",
    },
    {
      icon: FileText,
      label: " Gade Reports",
      hasSubmenu: true,
      url: "/reports",
      section: "reports",
      active: activeSection === "reports",
    },
    {
      icon: ActivityIcon,
      label: "Activities",
      hasSubmenu: true,
      url: "/activities",
      section: "activities",
      active: activeSection === "activities",
    },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "add-student":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">Add New Student</h1>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600">Student registration form will go here</p>
            </div>
          </div>
        )
      case "students":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">Student Attendance</h1>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600">Student attendance tracking will go here</p>
            </div>
          </div>
        )
      case "branch":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">See Your Branch</h1>
          </div>
        )
      case "reports":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">Academic Reports</h1>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600">Student reports and analytics will go here</p>
            </div>
          </div>
        )
      case "courses":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">Courses Management</h1>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600">Course list and management will go here</p>
            </div>
          </div>
        )
      case "activities":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">School Activities</h1>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600">School activities and events will go here</p>
            </div>
          </div>
        )
      default:
        return (
          <>
            {/* Welcome Section */}
            <div className="animate-fade-in">
              <h1 className="text-lg sm:text-xl font-bold text-white mb-3">Welcome back, Freddy BIJANJA 👋</h1>
            </div>

            {/* Dashboard Title */}
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">Dashboard Overview</h2>
              <p className="text-gray-300">Monitor your school performance and student data</p>
            </div>

            {/* General Overview */}
            <section className="animate-slide-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-[#FF6B6B] to-[#37507E] rounded-full mr-4"></div>
                General Overview
              </h3>
            </section>

            <div>
              <HomePage />
            </div>

            {/* Quick Actions */}
            <section className="animate-slide-up" style={{ animationDelay: "1600ms" }}>
              <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#37507E] mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Plus, label: "Add Student", color: "from-[#37507E] to-[#37507E]/80" },
                    { icon: FileText, label: "Grade Report", color: "from-emerald-500 to-emerald-600" },
                    { icon: Activity, label: "Attendance", color: "from-[#FF6B6B] to-[#FF6B6B]/80" },
                    { icon: Settings, label: "Settings", color: "from-purple-500 to-purple-600" },
                  ].map((action, index) => (
                    <button
                      key={index}
                      variant="ghost"
                      className={`h-20 bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-300 text-white border-0 rounded-xl group shadow-lg`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <action.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">{action.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </>
        )
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-500/50 to-purple-500 via-blue-400 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#37507E]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex relative overflow-hidden">
      <FloatingParticles />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 h-screen bg-blue-400 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-out lg:translate-x-0 shadow-xl`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200">
          <Link to="/dashboard">
            <Logo />
          </Link>
          <button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden text-[#37507E] hover:bg-gray-100 transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-3">
            {sidebarItems.map((item, index) => (
              <li key={index} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => handleSidebarClick(item.section)}
                  className={`group flex items-center justify-between px-4 py-4 text-sm rounded-xl transition-all duration-300 transform hover:scale-105 w-full text-left ${
                    item.active
                      ? "bg-gradient-to-r from-gray-500/50 to-purple-500 via-blue-500 text-white shadow-lg"
                      : "text-[#37507E] hover:bg-gray-100 hover:text-[#37507E]"
                  }`}
                >
                  <div className="flex items-center">
                    {item.icon && (
                      <item.icon
                        className={`h-5 w-5 mr-4 transition-all duration-300 ${
                          item.active ? "animate-pulse" : "group-hover:scale-110"
                        }`}
                      />
                    )}
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
            <p className="text-xs text-gray-500 mb-2">System Status</p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-[#37507E]">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-72 relative flex flex-col h-screen overflow-y-auto">
        {/* Header */}
        <header className="border-b border-gray-200 sticky top-0 z-30 bg-white">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="lg:hidden text-[#37507E] hover:bg-gray-100 transition-all duration-300"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-500/50 to-purple-500 via-blue-400 rounded-lg flex items-center justify-center">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <span className="text-[#37507E] font-medium"> Home</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button variant="ghost" size="icon" className="text-[#37507E] hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </button>
              <button variant="ghost" size="icon" className="text-[#37507E] hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B6B] rounded-full animate-pulse"></div>
              </button>
              <button variant="ghost" size="icon" className="text-[#37507E] hover:bg-gray-100">
                <Settings className="h-5 w-5" />
              </button>
              <div className=" hidden sm:flex items-center space-x-3 pl-4 border-l border-gray-200">
                <span className="text-sm text-[#37507E] font-medium">Freddy BIJANJA</span>
                <div className="w-10 h-10 bg-gradient-to-r from-gray-500/50 to-purple-500 via-blue-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">FB</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8 flex-1 bg-gray-800">{renderContent()}</main>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Copyright © 2025 schoolData.</span>
            <div className="flex items-center space-x-4">
              <span>v1.0.0</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Dashboard
