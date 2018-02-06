import React from 'react'

class Item extends React.Component{
    render(){
        return(
            <div id="Item" className="columns">
                <div className="column">
                    <div className="columns">
                        <div className="column details">
                            {this.props.name}
                        </div>
                        <div className="column details">
                            {this.props.qty}
                        </div>
                    </div>
                </div>
                
                <div className="column">
                    <button className="button is-primary" onClick={()=>this.props.qtyUpdate(this.props.index, 1)}>Add Qty</button>
                    <button className="button is-warning" onClick={()=>this.props.qtyUpdate(this.props.index, -1)}>Substract Qty</button>
                    <button className="button is-danger" onClick={()=>this.props.deleteItem(this.props.index)}>Delete Item</button>
                </div>
                
            </div>
        )
    }
}

export default Item