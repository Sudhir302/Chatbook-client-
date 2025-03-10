import './logo.css'

function Logo(){
    const relodePage = ()=>{
        window.location.reload();
    }

    return(
        <div className="logo-container">
            <div className="logo on-hover laptop-logo" onClick={relodePage}>
                C
            </div>
            <div className="mobile-logo on-hover" onClick={relodePage} >
                Chatbook
            </div>
        </div>
    )
}

export default Logo;