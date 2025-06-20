import { useState } from "react"
import bars from "../assets/bars.svg"
import arrow_left from "../assets/arrow_left.svg"

const NavbarView = () => {
    const [burgerOpen, setBurgerOpen] = useState(false)

    return (
        <nav>
            <div className="title-block">
                <h1>Lucas Hoggan</h1>
                <h2 >Cybersecurity Student</h2>
            </div>
            <div className="link-block">
                <a href="https://github.com/lucashoggan" target="_blank">
                    <h2>GitHub</h2>
                </a>
                <a href="https://www.linkedin.com/in/lucas-hoggan-859aa734a/" target="_blank">
                    <h2>LinkedIn</h2>
                </a>
                <button className="burger-btn" onClick={() => setBurgerOpen(true)}><img src={bars}/>
                </button>
                {burgerOpen ? <div className="burger-dropdown">
                    <button className="back-btn" onClick={() => setBurgerOpen(false)}><img src={arrow_left} /></button>
                    <a href="https://github.com/lucashoggan">
                        <h2>GitHub</h2>
                    </a><a href="https://www.linkedin.com/in/lucas-hoggan-859aa734a/">
                        <h2>LinkedIn</h2>
                    </a>
                </div> : null}
            </div>
        </nav>
    )
}

export default NavbarView