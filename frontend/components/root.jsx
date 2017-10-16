import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: {display: 'none'} }
  }

  handleImageLoaded() {
    this.setState({imageStatus: {display: 'block'}})
  }
  render() {
    return(
      <div className="modal">
        <div className="overlay"
          onClick={() => this.props.toggleModal('off') }>
        </div>
        <div className="frame">
          <figure>
            <div className="loader"
              style={this.state.imageStatus}>
              <img className='image object' src={this.props.imageUrl} alt="portrait"/>
              <img
                className='frozen'
                src={this.props.frozenUrl}
                alt=""
                onLoad={this.handleImageLoaded.bind(this)}/>
              <div className="left"
                onClick={() => this.props.toggleModal('before', this.props.idx)}>

              </div>
              <div className='right'
                onClick={() => this.props.toggleModal('next', this.props.idx)}>

              </div>
            </div>
            <figcaption>{this.props.caption}</figcaption>
          </figure>
        </div>
      </div>
    )
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: {display: 'none'}}
  }
  handleImageLoaded() {
    this.setState({style: {display: 'block'}})
  }
  render() {
    const style = {
      background: `url(${this.props.squareUrl})`,
      backgroundSize: 'cover'
    }
    return(
      <a onClick={() => this.props.enlarge(this.props.idx)}>
        <div className='square'>
          <div className='thumbnail'
            style={this.state.style}>
            <img className='square-img'
              src={this.props.squareUrl}
              onLoad={this.handleImageLoaded.bind(this)}></img>
          </div>
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
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-1.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-2.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-3.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-4.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-5.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-6.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-7.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-8.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-9.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-10.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-11.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-12.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-13.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-14.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-15.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-16.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-17.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-18.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-19.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-20.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-21.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-22.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-23.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-24.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-25.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-26.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-27.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-28.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-29.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-30.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-31.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-32.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-33.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-34.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-35.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508114783/highland-square-400/s-36.jpg"
    ]

    this.imageUrls = [
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/1.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/2.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/3.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/4.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/5.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/6.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/7.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/8.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/9.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/10.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/11.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/12.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/13.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/14.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/15.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/16.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/17.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/18.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/19.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/20.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/21.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/22.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/23.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/24.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/25.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/26.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/27.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/28.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/29.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/30.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/31.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/32.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/33.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/34.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/35.jpg",
      "http://res.cloudinary.com/mwong9968/image/upload/v1508115243/highland-45/36.jpg",
    ]

    this.frozenUrls = [
      "/img/gallery/frozen/1.jpg",
      "/img/gallery/frozen/2.jpg",
      "/img/gallery/frozen/3.jpg",
      "/img/gallery/frozen/4.jpg",
      "/img/gallery/frozen/5.jpg",
      "/img/gallery/frozen/6.jpg",
      "/img/gallery/frozen/7.jpg",
      "/img/gallery/frozen/8.jpg",
      "/img/gallery/frozen/9.jpg",
      "/img/gallery/frozen/10.jpg",
      "/img/gallery/frozen/11.jpg",
      "/img/gallery/frozen/12.jpg",
      "/img/gallery/frozen/13.jpg",
      "/img/gallery/frozen/14.jpg",
      "/img/gallery/frozen/15.jpg",
      "/img/gallery/frozen/16.jpg",
      "/img/gallery/frozen/17.jpg",
      "/img/gallery/frozen/18.jpg",
      "/img/gallery/frozen/19.jpg",
      "/img/gallery/frozen/20.jpg",
      "/img/gallery/frozen/21.jpg",
      "/img/gallery/frozen/22.jpg",
      "/img/gallery/frozen/23.jpg",
      "/img/gallery/frozen/24.jpg",
      "/img/gallery/frozen/25.jpg",
      "/img/gallery/frozen/26.jpg",
      "/img/gallery/frozen/27.jpg",
      "/img/gallery/frozen/28.jpg",
      "/img/gallery/frozen/29.jpg",
      "/img/gallery/frozen/30.jpg",
      "/img/gallery/frozen/31.jpg",
      "/img/gallery/frozen/32.jpg",
      "/img/gallery/frozen/33.jpg",
      "/img/gallery/frozen/34.jpg",
      "/img/gallery/frozen/35.jpg",
      "/img/gallery/frozen/36.jpg"
    ]

    this.captions = [
      "Letha, March 2017",
      'Claret, March 2017',
      'Darshan, Red Victorian SF, May 2016',
      'Baraa, April 2017',
      "Catherine, August 2015",
      "Monika, April 2017",
      "Chinwendu, April 2017",
      "Ram, January 2016",
      "Alex, July 2017",
      "Wayne, February 2016",
      "Alec, August 2017",
      "Lushen, November 2015",
      "Rowena, April 2015",
      "Ricardo, December 2015",
      "Liz, January 2016",
      "Su, March 2015",
      "Tiffany, August 2016",
      "Aymeric, March 2016",
      "Enkhee, April 2016",
      "Alok, July 2016",
      "Wendy, May 2017",
      "Phil, March 2015",
      "Elsa, Red Victorian SF, May 2016",
      "Natalie, August 2016",
      "Tanay, March 2017",
      "Lara, March 2015",
      "Keaton, December 2016",
      "Susan, April 2017",
      "Sandra, August 2016",
      "Pavel, April 2017",
      "Aaron, May 2017",
      "Alejandro, April 2017",
      "Arun, May 2017",
      "John, May 2017",
      "Richard, April 2017",
      "Fabrice, April 2017"
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
      if (i == 0) {
        this.setState({modalVisible: false}, () => this.enlarge(this.squareUrls.length-1))
      } else {
        this.setState({modalVisible: false}, () => this.enlarge(i-1))
      }
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
         alt={this.captions[idx]}
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
