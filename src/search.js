import React from 'react';
import Movies from './movies';





class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
         name:""
        }
    }

    
    render(){
        return(<div> <input onChange={e =>this.props.searchMovies(e.target.value)} /> </div>
           
           
    
        )
}
}
export default Search