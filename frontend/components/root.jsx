import React from 'react';

class Modal extends React.Component {
  render() {
    return(
      <div className="modal">
        <div className="overlay"
          onClick={() => this.props.toggleModal('off') }>
        </div>
        <div className="frame">
          <figure
            onClick={() => this.props.toggleModal('next', this.props.idx)}>
            <div className="loader">
              <img className='image object' src={this.props.imageUrl} alt="portrait"/>
              <img className='frozen' src={this.props.frozenUrl} alt=""/>
            </div>
            <figcaption>{this.props.caption}</figcaption>
          </figure>
        </div>
      </div>
    )
  }
}

class Square extends React.Component {
  render() {
    return(
      <a onClick={() => this.props.enlarge(this.props.idx)}>
        <div className='square'>
          <div className='thumbnail'></div>
        </div>
      </a>
    )
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      idx: "",
      imageUrl: "",
      frozenUrl: "",
      caption: ""
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.enlarge = this.enlarge.bind(this);

    this.squareUrls = [
      "1",
      "2",
      "3",


    ]

    this.imageUrls = [
      "/img/gallery/45.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508023913/test_lv8yf2.jpg"
    ]

    this.frozenUrls = [
      "img/gallery/45-s.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508025584/test-smaller_l5vlad.jpg"
    ]

    this.captions = [
      "Lady in hat, thunks, Berkeley CA, May 2017",
      'cap2',
      'cap3'
    ]
    this.altTags = [

    ]
  }
  toggleModal(string, i) {
    if (string == "off") {
      this.setState({modalVisible: false});
    } else if (string == 'next') {
      if (i == this.squareUrls.length - 1) {
        this.setState({modalVisible: false}, () => this.enlarge(0))
      } else {
        this.setState({modalVisible: false}, () => this.enlarge(i+1))

      }

    } else if (string == 'before') {

    }
  }

  renderSquares() {
    return this.squareUrls.map( (url, idx) => {
      return(<Square
        key={idx}
         idx={idx}
         squareUrl={this.squareUrls[idx]}
         enlarge={this.enlarge}
         toggleModal={this.toggleModal}
         />)
    })
  }


  enlarge(id) {
    this.setState({
      idx: id,
      imageUrl: this.imageUrls[id],
      frozenUrl: this.frozenUrls[id],
      caption: this.captions[id],
      modalVisible: true
    })
  }

  render() {
    var err = 1;
    return(
      <div className="gallery">
        { this.state.modalVisible
          ? (<Modal
            idx={this.state.idx}
            imageUrl={this.state.imageUrl}
            frozenUrl={this.state.frozenUrl}
            caption={this.state.caption}
            toggleModal={this.toggleModal}/>)
          : null }
        {this.renderSquares()}
      </div>
    )
  }
}

export default Gallery;
