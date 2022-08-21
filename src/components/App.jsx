import Contacts from "./Contacts";
import React, {Component} from 'react';
import axios from "axios";
import Loader from "./Loader";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import SearchBar from "./SearchBar";

const key = process.env.REACT_APP_API_KEY
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[],
      loader: false,
      page: 1,
      search: 'cat'
    }
    this.handleLoadMore = this.handleLoadMore.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async getData() {
    const page = this.state.page
    const search = this.state.search
    let data
    await axios.get(`https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
      if(response.status === 200) {
        this.setState({loader: false})
        data = response.data
      }
    })
      .catch((error) => {
        console.log(error)
        this.setState({loader: false})
      });
    return data
  }
  async componentDidMount() {
    this.setState({loader: true})
    const data = await this.getData()
    this.setState({images: data.hits})
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.page !== prevState.page) {
      const data = await this.getData()
      this.setState({images: this.state.images.concat(data.hits)})
    }
    if(this.state.search !== prevState.search) {
      const data = await this.getData()
      this.setState({images: data.hits})
    }
  }

  handleLoadMore () {
    this.setState((prevState) => {
      return {page: prevState.page + 1}
    })
  }

  handleSubmit (e, value) {
    e.preventDefault()
    this.setState({page: 1})
    this.setState({search: value})
  }

  render() {
    const isLoading = this.state.loader
    const imagesArr = this.state.images.length > 0
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          margin: "0 auto",
        }}
      >
        <Contacts/>
        <SearchBar onSubmit={this.handleSubmit} />
        {imagesArr && <ImageGallery images={this.state.images}  />}
        {isLoading && <Loader/> }
        {imagesArr && <Button handleLoadMore={this.handleLoadMore}/>}
      </div>
    );
  }
}

export default App;
