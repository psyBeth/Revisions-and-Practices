import "./Header.css"

function Header() {
   //*   JS alani
   const message = "hello"
   console.log(message)
 
   return (
     <header className="header-main">
       {/* JSX */}
       <h1 style={{ color: "violet" }}>Header {message}</h1>
     </header>
   )
}

export default Header