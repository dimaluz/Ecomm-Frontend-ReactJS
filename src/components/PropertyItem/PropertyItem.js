import React from 'react';
import './PropertyItem.css';

// class PropertyItem extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             isSelected: false,
//         };
//         this.ClickProperty = this.ClickProperty.bind(this);
//     }
    


//     render(){
//         return (
//             <div className="outer-property-button" onClick={ClickProperty}>
            
//                 <div className="property-button-item">
//                     <div className="property-container">{this.props.property_name}</div>
//                 </div>
                
//             </div>
//         )
//     }
// }
// export default PropertyItem;

// const ClickProperty = () => {
//     const property_selected = document.querySelector(".outer-property-button");
//     property_selected.classList.toggle("selected");
// }

const PropertyItem = (props) => {

    const selectedStyle = {
        border: "none",
        backgroundColor: "rgba(111, 3, 244, 0.9)"
    }

    return (
        <div className="outer-property-button" style={props.property.selected ? selectedStyle: null} onClick={()=>props.handleSelected(props.property.id)}>
            
            <div className="property-button-item">
                <div className="property-container">{props.property.name}</div>
            </div>
                
        </div>
     );
}

export default PropertyItem;