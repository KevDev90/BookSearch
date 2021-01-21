import React from 'react';
import './App.css';
import Header from './header/Header';
import SearchBar from './searchBar/SearchBar';
import FilterBar from './filterBar/FilterBar';
import BookList from './bookList/BookList';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      books: [],
      searchTerm: 'books#volumes',
      printType: 'all',
      bookType: 'noFilter'
    }
  }

  componentDidMount(){
   this.fetchingData();
  }
  
  
  fetchingData = () => {
    let url = '';
    if(this.state.bookType === 'noFilter'){
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}`;
    } else {
      url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${this.state.bookType}&printType=${this.state.printType}`;
    }
    
    const apiKey = 'AIzaSyAQqT3LxLnRzC6F37LOXv3IwPO6Mk5cYNk';
    const searchURL = `${url}&key=${apiKey}`
    
    fetch(searchURL)
      .then(res => {
        if(!res.ok){
          throw new Error('something went wrong')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data,
          error: null,
        })
      })
      .catch(err => {
        console.log(err)
        this.setState({
          error: err.message
        })
      })
  }
  
  
  handleSearchTerm = (newTerm) =>{
    console.log(newTerm)
    this.setState({
      searchTerm: newTerm,
    })  
  }

  handleFilterByPrint = (selection) => {
    this.setState({ printType: selection},
      this.fetchingData)
  
}

  handleFilterByBookType = (selection) => {
    console.log(selection)
    this.setState({ bookType: selection},
      this.fetchingData)
  }
  
  render(){
    console.log(this.state.bookType , 'book type')
    console.log(this.state.books, 'bottom of app')
    return (
      <div className="App">
        {this.state.error}
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm} 
          handleSearchTerm={(newTerm)=> this.handleSearchTerm(newTerm)} updateSearchResults={this.fetchingData}/>
        <FilterBar 
          handlePrintType={(selection) => this.handleFilterByPrint(selection)} 
          handleBookType={(selection) => this.handleFilterByBookType(selection)}/>
        <BookList books={this.state.books.items} />
      </div>
  );
  }
  
}
