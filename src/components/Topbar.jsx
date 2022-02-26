import "./topbar.scss"

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#dashboard" className="logo">Home</a>
                    <div className="itemContainer">

                    </div>
                </div>
                <div className="right">
                    <a href="#login" className="login">Login </a>
                    <a href="#register" className="register">Register </a>
                </div>
                
                </div>
            </div>
    )
}