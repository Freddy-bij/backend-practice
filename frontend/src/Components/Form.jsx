

const Form = () => {
  return (
    <div className="flex gap-10 bg-gray-800/30">
        <div>
            <h1>Welcome to school Data</h1>
        </div>
        <div>

            <h2>Create your account here</h2>
            <form className="flex flex-col">
                <input  placeholder="Enter your first name"/>
                <input  placeholder="Enter your last name"/>
                <input  placeholder="Enter your email"/>
                <input  placeholder="Enter your password"/>
                <button>signUp</button>
            </form>
               
        </div>
    </div>
  )
}

export default Form