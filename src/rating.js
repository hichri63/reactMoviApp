import React from 'react';





class Rating extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }

    }
    render(){
        let tab=[];
        for (let i=0;i<4;i++){
            if(this.props.star > i){
              tab.push(<i onClick={()=>this.props.rating(i+1)}  class="fas fa-star color"></i>)
            }
            else tab.push(<i onClick={()=>this.props.rating(i+1)} class="far fa-star color"></i>)  
        }
        return(
            <div>
                {tab}
            </div>
        )

    }
}
export default Rating