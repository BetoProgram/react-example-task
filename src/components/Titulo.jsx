import { useState } from "react";
import PropTypes from "prop-types";
import './titulo.css';

function Tutulo({titulo}) {
    const [ married, setMarriet ] = useState(false);

    return(
        <>
            <h2>{titulo}</h2>
            <button onClick={() => setMarriet(!married)}>Accion</button>
            <div className="card">
                <h2 className={ married ? 'color-red': 'color-purple' }>
                    { married ? 'Estoy casado': 'No estoy casado' }
                </h2>
            </div>
            
        </>
        
    );
}

Tutulo.propTypes = {
    titulo: PropTypes.string
}

export default Tutulo;