function Header() {
   //*   JS alani
   const mesaj = "hello"
   console.log(mesaj)
 
   return (
     <header className="header-main">
       {/* JSX */}
       <h1 style={{ color: "violet" }}>Header {mesaj}</h1>
     </header>
   )
}

export default Header