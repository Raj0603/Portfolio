import "./Footer.css"
import { Link } from "react-router-dom"

const Footer=()=>{
    return (
        <>
            <div className="Footer-Container">
                <span>
                ©2023 Raj Srivastav
                </span>

                <span id="cls">
                    |
                </span>

                <Link to="/Credit">
                <span>
                    credits
                </span>
                
                </Link>
            </div>
        </>
    )
}

export default Footer