import React from 'react';
import './ProductProperty.css';
import PropertyItem from '../PropertyItem/PropertyItem';
// import propertiesData from './propertiesData';


class ProductProperty extends React.Component {
    constructor(props){
        super();
        this.props = props
        this.state = {
            title: this.props.property.propertyTitle,
            properties: this.props.property.propertiesList
        };
        this.handleSelected = this.handleSelected.bind(this);
        console.log(this.state.title);
    }

    handleSelected(id){
        this.setState(prevState => {
            const updatedProps = prevState.properties.map(property => {
                if(property.selected){
                    property.selected = !property.selected;
                }

                if(property.id === id){
                    property.selected = !property.selected;
                }
                
                return property;
            })
            return {
                properties: updatedProps
            }
        })
    }

    render(){
        const propertyItems = this.state.properties.map(property =>
            <PropertyItem key={property.id} property={property} handleSelected={this.handleSelected} />
        )

        return (
            <div className='property-box-container'>
                <div className='property-title'>{this.state.title}</div>
                <div className='properties'> 
                    {propertyItems}
                </div>
            </div>
        )
    }
}

export default ProductProperty;
