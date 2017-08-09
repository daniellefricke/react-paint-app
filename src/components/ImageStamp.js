import React, {Component} from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'umnarjdd';
const CLOUDINARY_UPLOAD_URL = '	https://api.cloudinary.com/v1_1/dkhmkbpwo/upload';

class ImageStamp extends Component {
  constructor(props){
    super(props)

    this.state = {
     uploadedFileCloudinaryUrl: ''
   };
   this.onImageDrop = this.onImageDrop.bind(this)
  }

  onImageDrop(files) {
      this.setState({
        uploadedFile: files[0]
      });

      this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);

        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }

          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }

  render(){
    return(
    <div className="imageStampDiv">
  <div>
  <h3>Image Stamp</h3>
   <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
     <p>Drop an image or click to select a file to upload.</p>
   </Dropzone>
    </div>

    <div>
       {this.state.uploadedFileCloudinaryUrl === '' ? null :
       <div>
         <p>{this.state.uploadedFile.name}</p>
         <img src={this.state.uploadedFileCloudinaryUrl} />
       </div>}
     </div>
   </div>
    )
  }
}

export default ImageStamp;
