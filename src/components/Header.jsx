import Nav from './Nav'

function Logo (){
    return (
<img src='Logo.svg' 
                 alt='Little Lemmon Logo'
        />
    )}

export default function Header() {
    return (
    <header>
        <Logo/>
        <Nav/>
    </header>
)}
