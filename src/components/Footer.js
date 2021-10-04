import img from '../images/rick1.jpg';
const Footer =()=>{
    return(
        <footer className="footer">
            <section>
        <p>Evaluación final  React </p>
        <p>Sheila Arenillas González</p>
        <img src={img} alt="Rick And Morty" className="footer_img" />
        </section>
        
        </footer>
    )
}
export default Footer;