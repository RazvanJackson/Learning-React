import React from 'react'

class ListHeader extends React.Component{
    render(){
         return (
            <div className="columns" id="List-Header">
                <div className="column">
                    <div className="columns">
                        <div className="column details-title">
                            Name
                        </div>
                        <div className="column details-title">
                            Quantity
                        </div>
                    </div>
                </div>
                <div className="column">

                </div>
            </div>
        )
    }
}

export default ListHeader