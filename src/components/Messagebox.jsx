import './Messagebox.css'

function Messagebox(){
    return(
        <div className="message-container">
            <div className="message-box">
                <div className="sender">sender</div>
                <div className="message">
                    <p className="received"> received sdfafahahhahhahahahahahahah dsfaf</p>
                    <p className="sent"> sent hehlkasklglkasgl ahglhglksgglashglasg</p>
                </div>
                <form className='msg-form'>
                    <label htmlFor="message">Message</label>
                    <input type="text" name="message" id="message" className="type-msg" />
                    <button className='send-btn on-hover'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Messagebox;