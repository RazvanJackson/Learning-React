import React from 'react'

import AddItem from './components/AddItem'
import Item from './components/Item'
import ListHeader from './components/ListHeader'

class ShoppingList extends React.Component{
    constructor(){
        super()
        this.state = {
            items: []
        }
    }

    

    newItem(name,qty){
        if(name !== '' && qty !== 0){
            let item = {name:name, qty:parseInt(qty,10)}
            let newItems = this.state.items;
            newItems.push(item);
            this.setState({
                items : newItems
            })
        }
    }

    qtyUpdate(index, value){
        if(this.state.items[index].qty + value >= 0){
            let newItems = this.state.items;
            newItems[index].qty += value;

            this.setState({
                items : newItems
            })
        }
    }

    deleteItem(index){
        let newItems = this.state.items;
        newItems.splice(index,1);
        this.setState({
            items:newItems
        })
    }

    renderList(){
        let qtyUpdate = this.qtyUpdate.bind(this)
        let deleteItem = this.deleteItem.bind(this)

        return this.state.items.map(function(item, index){
            return <Item 
                    key={index}
                    index={index} 
                    name={item.name} 
                    qty={item.qty}
                    qtyUpdate={qtyUpdate}
                    deleteItem={deleteItem}
                    />
        })
    }

    render(){
        if(this.state.items.length>0) return(
            <div id="Shopping-List">
                <AddItem newItem={this.newItem.bind(this)}/>
                <ListHeader/>
                {this.renderList()}
            </div>
        )
        else return(
            <div id="Shopping-List">
                <AddItem newItem={this.newItem.bind(this)}/>
                {this.renderList()}
            </div>
        )
    }
}

export default ShoppingList