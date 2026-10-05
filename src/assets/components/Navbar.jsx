import './Navbar.css'

function Navbar() {

  return (
    <>
      <nav class="mask">
        <a href="#">LOGO</a>
        <ul class="list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Proyects</a></li>
          <li><a href="#">CV</a></li>
        </ul>
        <button class="search">Search</button>
        <button class="menu">Menu</button>
      </nav>      
    </>
  )
}

export default Navbar 
