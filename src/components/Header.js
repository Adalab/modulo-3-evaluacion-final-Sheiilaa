import '../styles/layout/_header.scss'
import title from '../images/Rick_and_Morty_-_logo_(English).png';
const Header =()=>{
    return(
        <header>
        <img src={title} alt="rick and morty" className="header_title" />
        
        </header>
    )
}
export default Header;