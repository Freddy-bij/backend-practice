import { Activity, Bell, Book, Home, Menu, Settings, User, User2, UserStar, UserStarIcon, X } from "lucide-react"
import Logo from "../Components/Logo"
import Header from "../Components/Header"
import { useState } from "react"
import { Label } from "recharts"
import { Link } from "react-router"



const Dashboard = () => {
//     const [isHidden , setIsHidden] = useState(false)
//     const [activeSection, setActiveSection] = useState("home")
//     const [siderBarOpen , setSideBarOpen] = useState(false )
    
//     const toogleSidebar = () => setSideBarOpen(!siderBarOpen)

//     const handleSideBarClick = () => {
//     setActiveSection(section)
//     setSideBarOpen(false)

//     }

// const sidebarItems = [
//     { icon:Home , label: "Home", active: activeSection === "home" , url: "/" , section: "home" },
//     { icon: Activity , label: "Activity" , active: activeSection === "activity" , url: "activity" , section: "activity"},
//     { icon: Book , label: "Course" , active: activeSection === "course" , url: "course" , section: "course"},
//     {icon: Bell , label: "Noctifications" , active: activeSection === "noctifications" , url: "noctification" , section: "noctification"},
//     {icon: Settings, label: "Settings" , active: activeSection === "settings" , url:"settings" ,section: "noctification"},
//     {icon: UserStar, label: "Student Attendance" , active: activeSection === "student attendance" , url: "student-attendance" , section: "student-attendance"}

// ]

// const renderContent = () =>{
//     switch (activeSection) {
//         case "activity":
//             return (
//                 <>
//                 <div className="animate-fade-in">
//             <h1 className="text-3xl font-bold text-[#37507E] mb-6">Here activity Stufent</h1>
//             <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-8 shadow-lg">
//               <p className="text-gray-600 text-lg">Products management interface will be displayed here.</p>
//             </div>
//           </div>
//                 </>
//             )
//             case "course" : 
//                return (
//                 <>
//                 <div className="animate-fade-in">
//             <h1 className="text-3xl font-bold text-[#37507E] mb-6">Add Your Products</h1>
//             <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-8 shadow-lg">
//               <p className="text-gray-600 text-lg">Products management interface will be displayed here.</p>
//             </div>
//           </div>
//                 </>
//                )
//             default:
//                 return (
//                     <>
//                     <div>
//                       Home
//                     </div>
//                     </>
//                 )

//     }
// }

 const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home") // New state for active section

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // Update the handleSidebarClick function to handle navigation for Change Password and Logout
  const handleSidebarClick = (section: string, url?: string) => {
    if (section === "change-password") {
      // Navigate to change password page
      window.location.href = "/change-password"
      return
    }

    if (section === "logout") {
      // Navigate to welcome page (root path)
      window.location.href = "/"
      return
    }

    // For other sections, update the active section
    setActiveSection(section)
    setSidebarOpen(false) // Close sidebar on mobile after click
  }

  const currentDate = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

  const generalOverviewData = [
    {
      title: "Total Customers",
      value: 37442,
      icon: Users,
      gradient: "from-[#FF6B6B] via-[#37507E] to-[#2a3f63]",
      change: "+12.5%",
      changeType: "positive",
      progress: 85,
    },
    {
      title: "Active Customers",
      value: 1,
      icon: UserCheck,
      gradient: "from-[#2a3f63] via-[#37507E] to-[#FF6B6B]",
      change: "+0.1%",
      changeType: "positive",
      progress: 45,
    },
    {
      title: "Cumulative Liquidations",
      value: 0,
      currency: "RWF",
      icon: Briefcase,
      gradient: "from-[#FF6B6B] via-[#37507E] to-[#2a3f63]",
      change: "0%",
      changeType: "neutral",
      progress: 0,
    },
    {
      title: "Balance To Be Liquidated",
      value: 180,
      currency: "RWF",
      icon: DollarSign,
      gradient: "from-[#2a3f63] via-[#37507E] to-[#FF6B6B]",
      change: "+5.2%",
      changeType: "positive",
      progress: 65,
    },
  ]

  const savingOverviewData = [
    {
      title: "Today",
      value: 0,
      currency: "RWF",
      icon: Activity,
      gradient: "from-[#FF6B6B] via-[#37507E] to-[#2a3f63]",
      change: "0%",
      changeType: "neutral",
      progress: 0,
    },
    {
      title: "This Month",
      value: 0,
      currency: "RWF",
      icon: TrendingUp,
      gradient: "from-[#2a3f63] via-[#37507E] to-[#FF6B6B]",
      change: "0%",
      changeType: "neutral",
      progress: 0,
    },
    {
      title: "Last Month",
      value: 0,
      currency: "RWF",
      icon: Banknote,
      gradient: "from-[#FF6B6B] via-[#37507E] to-[#2a3f63]",
      change: "0%",
      changeType: "neutral",
      progress: 0,
    },
    {
      title: "Cumulative Savings",
      value: 200,
      currency: "RWF",
      icon: DollarSign,
      gradient: "from-[#2a3f63] via-[#37507E] to-[#FF6B6B]",
      change: "+15.8%",
      changeType: "positive",
      progress: 78,
    },
  ]

  const sidebarItems = [
    { icon: Home, label: "Home", active: activeSection === "home", url: "/", section: "home" },
    
    {
      icon: Plus,
      label: "Add New Product",
      hasSubmenu: true,
      url: "new-product",
      section: "add-product",
      active: activeSection === "add-product",
    },
    {
      icon: Package,
      label: "Products",
      hasSubmenu: true,
      url: "/products",
      section: "products",
      active: activeSection === "products",
    },
    {
      icon: Building2,
      label: "Branch",
      hasSubmenu: true,
      url: "/branch",
      section: "branch",
      active: activeSection === "branch",
    },
    {
      icon: FileText,
      label: "Reports",
      hasSubmenu: true,
      url: "/reports",
      section: "reports",
      active: activeSection === "reports",
    },
    { icon: Lock, label: "Change Password", url: "/change-password", section: "change-password" },
    { icon: LogOut, label: "Logout", url: "/logout", section: "logout" },
  ]

  // Function to render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "add-product":
        return (
          <>

            <AddNewProductForm/>
          </>
        )
      case "products":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-[#37507E] mb-6">Add Your Products</h1>
            <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-8 shadow-lg">
              <p className="text-gray-600 text-lg">Products management interface will be displayed here.</p>
            </div>
          </div>
        )
      case "branch":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-[#37507E] mb-6">See Your Branch</h1>
            <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-8 shadow-lg">
              <p className="text-gray-600 text-lg">Branch information and management will be shown here.</p>
            </div>
          </div>
        )
      case "reports":
        return (
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-[#37507E] mb-6">See Your Report</h1>
            <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-8 shadow-lg">
              <p className="text-gray-600 text-lg">Reports and analytics will be displayed here.</p>
            </div>
          </div>
        )
      default:
        return (
          <>
            {/* Welcome Section */}
            <div className="animate-fade-in">
              <h1 className="text-lg sm:text-xl font-bold text-[#37507E] mb-3">Welcome back, INFINIX TEST JULIEN 👋</h1>
              <p className="text-gray-600 text-base">{currentDate}</p>
            </div>

            {/* Dashboard Title */}
            <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-lg sm:text-2xl font-bold text-[#37507E] mb-2">Dashboard Overview</h2>
              <p className="text-gray-600">Monitor your SaveDirectly platform performance</p>
            </div>

            {/* General Overview */}
            <section className="animate-slide-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-semibold text-[#37507E] mb-6 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-[#FF6B6B] to-[#37507E] rounded-full mr-4"></div>
                General Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {generalOverviewData.map((item, index) => (
                  <Card
                    key={index}
                    className="group border-0 bg-white backdrop-blur-xl border border-gray-200 hover:border-[#FF6B6B]/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#FF6B6B]/10 animate-slide-up"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <CardContent
                      className={`p-6 bg-gradient-to-br ${item.gradient} text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <ProgressRing progress={item.progress} size={50} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold">
                              <AnimatedCounter end={item.value} duration={2000 + index * 200} />
                            </span>
                            {item.currency && <span className="text-lg font-medium opacity-90">{item.currency}</span>}
                          </div>
                          <p className="text-white/80 font-medium text-sm">{item.title}</p>
                          <div className="flex items-center space-x-2 pt-2">
                            {item.changeType === "positive" ? (
                              <ArrowUpRight className="h-4 w-4 text-green-300" />
                            ) : item.changeType === "negative" ? (
                              <ArrowDownRight className="h-4 w-4 text-red-300" />
                            ) : null}
                            <span
                              className={`text-xs font-medium ${
                                item.changeType === "positive"
                                  ? "text-green-300"
                                  : item.changeType === "negative"
                                    ? "text-red-300"
                                    : "text-white/60"
                              }`}
                            >
                              {item.change}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Saving Overview */}
            <section className="animate-slide-up" style={{ animationDelay: "1000ms" }}>
              <h3 className="text-xl font-semibold text-[#37507E] mb-6 flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-4"></div>
                Saving Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {savingOverviewData.map((item, index) => (
                  <Card
                    key={index}
                    className="group border-0 bg-white backdrop-blur-xl border border-gray-200 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 animate-slide-up"
                    style={{ animationDelay: `${1200 + index * 100}ms` }}
                  >
                    <CardContent
                      className={`p-6 bg-gradient-to-br ${item.gradient} text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <ProgressRing progress={item.progress} size={50} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-baseline space-x-2">
                            <span className="text-3xl font-bold">
                              <AnimatedCounter end={item.value} duration={2000 + index * 200} />
                            </span>
                            <span className="text-lg font-medium opacity-90">{item.currency}</span>
                          </div>
                          <p className="text-white/80 font-medium text-sm">{item.title}</p>
                          <div className="flex items-center space-x-2 pt-2">
                            {item.changeType === "positive" ? (
                              <ArrowUpRight className="h-4 w-4 text-green-300" />
                            ) : item.changeType === "negative" ? (
                              <ArrowDownRight className="h-4 w-4 text-red-300" />
                            ) : null}
                            <span
                              className={`text-xs font-medium ${
                                item.changeType === "positive"
                                  ? "text-green-300"
                                  : item.changeType === "negative"
                                    ? "text-red-300"
                                    : "text-white/60"
                              }`}
                            >
                              {item.change}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="animate-slide-up" style={{ animationDelay: "1600ms" }}>
              <div className="bg-white backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-[#37507E] mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Plus, label: "Add Customer", color: "from-[#37507E] to-[#37507E]/80" },
                    { icon: FileText, label: "Generate Report", color: "from-emerald-500 to-emerald-600" },
                    { icon: Settings, label: "Settings", color: "from-[#FF6B6B] to-[#FF6B6B]/80" },
                    { icon: Activity, label: "Analytics", color: "from-purple-500 to-purple-600" },
                  ].map((action, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`h-20 bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-300 text-white border-0 rounded-xl group shadow-lg`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <action.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-medium">{action.label}</span>
                      </div>
                    </Button>
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#37507E]"></div>
      </div>
    )
  }

    return (
        // <div className="bg-gray-800 h-screen text-white">

        //     <div className="flex">
        //         {/* left side */}
                
        //         <div className="w-[20%]   bg-blue-200 h-screen">
        //             <div className="px-6 py-3 border-b">
        //                 <Logo />
        //             </div>

        //             <div className=" px-6 py-8  text-black">
        //               <div className="flex flex-col gap-2">
        //                    { sidebarItems.map( items =>(
                            
                            
        //                       <div 
        //                       onClick={() => handleSideBarClick(items.section, items.url)}
        //                       className="flex  gap-1.5"
        //                       >
        //                     <div>
        //                        < items.icon className="w-5 h-5"/>
        //                     </div>
        //                     <div>
        //                         <h1>{items.label}</h1>
        //                     </div>

                            
        //                     </div>
        //                 ))}
        //               </div>
                     
                           
                       

                       
        //             </div>

        //         </div>

        //         {/* right side */}

        //         <div>
        //        {renderContent}
        //         </div>
        //     </div>
        // </div>

           <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex relative overflow-hidden">
      <FloatingParticles />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0 shadow-xl`}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200">
          <Link to="/dashboard">
            <h1 className="text-2xl font-bold text-[#37507E]">
              Save<span className="text-[#FF6B6B]">Directly</span>
            </h1>
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
                  onClick={() => handleSidebarClick(item.section, item.url)}
                  className={`group flex items-center justify-between px-4 py-4 text-sm rounded-xl transition-all duration-300 transform hover:scale-105 w-full text-left ${
                    item.active
                      ? "bg-gradient-to-r from-[#37507E] to-[#FF6B6B] text-white shadow-lg"
                      : "text-[#37507E] hover:bg-gray-100 hover:text-[#37507E]"
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon
                      className={`h-5 w-5 mr-4 transition-all duration-300 ${
                        item.active ? "animate-pulse" : "group-hover:scale-110"
                      }`}
                    />
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
      <div className="flex-1 lg:ml-0 relative flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="lg:hidden text-[#37507E] hover:bg-gray-100 transition-all duration-300"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#37507E] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <span className="text-[#37507E] font-medium">Partner | Home</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-[#37507E] hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#37507E] hover:bg-gray-100 relative">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B6B] rounded-full animate-pulse"></div>
              </Button>
              <Button variant="ghost" size="icon" className="text-[#37507E] hover:bg-gray-100">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <span className="text-sm text-[#37507E] font-medium">INFINIX TEST JULIEN</span>
                <div className="w-10 h-10 bg-gradient-to-r from-[#37507E] to-[#FF6B6B] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">IT</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-8 flex-1">{renderContent()}</main>

        {/* Footer */}
        <footer className="p-6 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Copyright © 2025 SaveDirectly Ltd.</span>
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