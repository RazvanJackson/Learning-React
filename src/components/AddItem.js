import React from 'react'

class AddItem extends React.Component{
    render(){
         return (
            <div className="columns" id="Add-Item">
                <div className="column">
                    <label className="label" htmlFor="name"><span className="label-text">Name</span></label>
                    <input className="input" type="text" name="name" ref="name"/>
                </div>
                <div className="column">
                    <label className="label" htmlFor="qty"><span className="label-text">Quantity</span></label>
                    <input className="input" type="text" name="qty" ref="qty"/>
                </div>
                <div className="column">
                    <button className="button is-primary" id="add-item-button" onClick={()=>this.props.newItem(this.refs.name.value,this.refs.qty.value)}>Add Item</button>
                </div>
            </div>
        )
    }
}

export default AddItem