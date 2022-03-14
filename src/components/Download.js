import { saveAs } from 'file-saver'

function Download(props) {
  const downloadImage = () => {
    saveAs(props.url, `meme${props.name}`);
  }

  return (
    <button className='download-btn' onClick={downloadImage}>
      Download Meme!
    </button>
  )
}

export default Download;