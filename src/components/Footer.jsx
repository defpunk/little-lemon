import Nav from "./Nav"

function Logo (){
    return (
<img src='Logo.svg' 
                 alt='Little Lemmon Logo'
                 height={120}
                 width={148 * 3}
        />
    )}

export default function Footer() {
    return (<footer>
            <Logo/>
            <Nav/>
            <section>
                <h3>Contact Details</h3>
                <address>Little lemon address</address>
                <p>contactus@littlelemon.com</p>
                <p>0123456789</p>
            </section>
            <section>
                <h3>Socials</h3>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
            </section>
        </footer>)
}