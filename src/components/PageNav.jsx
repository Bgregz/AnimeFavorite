import { Link } from 'react-router-dom';
function PageNav() {
  return (
    <header className='navBar'>
      <h1>AnimeBuddy</h1>
      <nav className='redirectLinks'>
        
        <Link to='/'>Homepage</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/login'>Login</Link>
        
      </nav>
    </header>
  );
}

export default PageNav;
