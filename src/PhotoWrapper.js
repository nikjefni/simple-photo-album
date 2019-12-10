//Child component of the app 
//Returns all the captured images
import React, { Component } from 'react'
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import FadeIn from "react-lazyload-fadein";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap'
class PhotoWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            album: []
        }
    }
    //Generate the id to get image info 
    randNumGen = (max) => {
        const num = Math.floor(Math.random() * Math.floor(max));
        return num;
      }
      //Get the image info from the picsum API
      getPhoto = () => {
        const albums = this.state.album;
        const id = this.randNumGen(1000);
        Axios.get(`https://picsum.photos/id/${id}/info`)
          .then((resp) => {
            const data = resp.data;
            const photoObj = {
              source: data.download_url,
              author: data.author
            };
            albums.push(photoObj);
            this.setState({ ...this.state }, () => {
            })
          })
          .catch((e) => {
            const nid = this.randNumGen(1000);
            this.getPhoto(nid)
          });
      }
      //Check wheither the album array has value before 
      // and remove any excessive images
      photoRand = () => {
        if (this.state.album.length != 0) {
          this.state.album = []
          this.setState({ ...this.state.album });
        }
        var i;
        const photoInfo = async () => {
          for (i = 0; i <= 5; i++) {
            const photo = this.getPhoto()
          }
        }
        photoInfo().then(data => {
          const newAlbum = this.state.album;
          if (newAlbum.length > 5) {
            newAlbum.pop()
            this.setState({ ...this.state.album });
          }
        })
      }
      //adds more images into the array
      addPhoto = () =>{
        var i;
        for(i=0;i<=2;i++){
          this.getPhoto();
        }
      }
      componentDidMount() {
        this.photoRand();
      }
    render() {
      const state = this.state;
      console.log(state);
        return (
            <div>
              <div className="sticky">
              <button onClick={this.photoRand}>
                <FontAwesomeIcon icon={faRedo} />
              </button>
            </div>
                <div className="inner-content">
                    <div className="photo-wrap">
                        {
                            state.album.map((photoSrc, index) => {
                                return (<Col lg="4" md="6" sm="8" className="img-pad">
                                    <FadeIn height={400}>
                                        {onload => (
                                            <img src={photoSrc.source} alt="" onLoad={onload} />
                                        )}
                                    </FadeIn>
                                    <h5>{photoSrc.author}</h5></Col>)
                            })
                        }
                    </div>
                    <button className="more-btn" onClick={this.addPhoto}>Load More</button>
                </div>
            </div>
        )
    }
}
export default PhotoWrapper