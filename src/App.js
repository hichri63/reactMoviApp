import React from 'react';
import './App.css';
import Search from './search';
import Movies from './movies';
import AddModal from './modal';
import Rating from './rating';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [{
        name: 'apocalypto',
        date: '2006',
        image: "https://fr.web.img5.acsta.net/medias/nmedia/18/36/26/80/18837905.jpg",
        rating: '4'
      },
      {
        name: '300',
        date: '2006',
        image: "https://i.pinimg.com/originals/6d/db/4d/6ddb4d9e9cfa507ad58f4e5cf26a5c19.jpg",
        rating: '4'
      },
      {
        name: 'Avatar',
        date: '2009',
        image: 'https://gold-n-blog.fr/wp-content/uploads/2018/01/avatar_2_poster.jpg',
        rating: '3',

      },
      ],
      keyWord: "",
      star: 1,
      isLoading : true,
    }







  }
  searchMovies = keyWord => {
    this.setState({ keyWord: keyWord })
  }
  searchStar = x => {
    this.setState({ star: x })
  }
componentDidMount(){
setTimeout(()=>this.setState({
  isLoading:false
}),5000)
}
  add = movie => {
    this.setState({ movies: this.state.movies.concat(movie) })
  }
  
  render() {
    return (<div>
      <Search searchMovies={x => this.searchMovies(x)} />
      <AddModal add={x => this.add(x)} />
      <Movies isLoading={this.state.isLoading}   movies={this.state.movies.filter(el => el.rating >= this.state.star && el.name.toLowerCase().includes(this.state.keyWord.toLowerCase().trim()))} />
      <Rating rating={star => this.searchStar(star)} star={this.state.star} />

    </div>


    );
  }

}

export default App;
