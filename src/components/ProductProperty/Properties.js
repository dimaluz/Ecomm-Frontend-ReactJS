import React from "react";
import './Properties.css';
import ProductProperty from "./ProductProperty";

const propertiesData = [
    {
        id: 1,
        propertyTitle: "COLOR",
        propertiesList: [
            {
                id: 1,
                name: "red",
                selected: false
            },
            {
                id: 2,
                name: "blue",
                selected: false
            },
            {
                id: 3,
                name: "yellow",
                selected: false
            },
            {
                id: 4,
                name: "black",
                selected: false
            },
            {
                id: 5,
                name: "green",
                selected: false
            },
            {
                id: 6,
                name: "brown",
                selected: false
            },
            {
                id: 7,
                name: "orange",
                selected: false
            },
            {
                id: 8,
                name: "white",
                selected: false
            },
        ]

    },
    {
        id: 2,
        propertyTitle: 'SIZE',
        propertiesList: [
            {
                id: 1,
                name: "32",
                selected: false
            },
            {
                id: 2,
                name: "43",
                selected: false
            },
            {
                id: 3,
                name: "41",
                selected: false
            },
            {
                id: 4,
                name: "39",
                selected: false
            },
            {
                id: 5,
                name: "40",
                selected: false
            },
            {
                id: 6,
                name: "45",
                selected: false
            },
            {
                id: 7,
                name: "42.5",
                selected: false
            },
            {
                id: 8,
                name: "45.5",
                selected: false
            },
        ]
    }
]

const Properties = () => {

    const props = propertiesData.map(property => <ProductProperty key={property.id} property={property} />)
    
    return (
        <div className='property-box'>
            {props}
        </div>
    )
}

export default Properties;