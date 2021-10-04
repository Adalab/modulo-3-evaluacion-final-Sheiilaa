import img from '../images/rick1.jpg';
const Footer =()=>{
    return(
        <footer >
            <section className="footer">
        <p className="text">Evaluación final  React </p>
        <p className="text"> Sheila Arenillas González</p>
        <img src={img} alt="Rick And Morty" className="footer_img" />
        </section>
        
        </footer>
    )
}
export default Footer;