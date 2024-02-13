import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { faClose } from "@fortawesome/free-solid-svg-icons"

function ComponentButton(props) {

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'flex-end', padding: '10px 15px 0 0'}}>
                {props.isOpen ? 
                    (<button onClick={props.buttonClick} className="showbutton"><FontAwesomeIcon icon={faCircle} /></button>)
                    :
                    (<button onClick={props.buttonClick} className="showbutton"><FontAwesomeIcon icon={faClose} /></button>)
                }
            </div>
        </>
    )
}

export default ComponentButton