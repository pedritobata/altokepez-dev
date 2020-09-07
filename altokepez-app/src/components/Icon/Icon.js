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

    

    return (
      BIcon ? <div className={`bicon px-3 ${props.hidden ? 'disapear' : ''}
      ${props.hiddenMobile ? 'disapear-mobile' : ''}`}
      onClick={props.clicked}>
      <BIcon
      color={props.color}
      alt={props.iconName} 
      size={props.size}
      // width={props.width} 
      // height={props.height} 
      title={props.iconName}/></div> : <div></div>);
}

export default Icon;