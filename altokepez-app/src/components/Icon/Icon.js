import React, { useEffect , useState} from 'react';
import './Icon.css';

const Icon = props => {

    const [BIcon, setBIcon] = useState();

    useEffect( () => {

        const getIcon = async () => {
            const icon = await import (`react-bootstrap-icons/dist/icons/${props.iconName}`);
            setBIcon(icon.default);
        }    

      getIcon();

    },[]);

    

    return (BIcon ? <BIcon
            className="bicon"
            color={props.color}
            alt={props.iconName} 
            size={props.size}
            // width={props.width} 
            // height={props.height} 
            title={props.iconName}/> : <div></div>);
}

export default Icon;