import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
  LinkedinShareButton, LinkedinIcon
} from 'react-share'
import './App.css'

function App() {
  const currentUrl = window.location.href; 
  const imageUrl = `${window.location.origin}/jpeg/foodvilla-4.png`;

  const shareMessage = "Check out this awesome content!";

  return (
    <div className='flex flex-col items-center gap-4 p-4'>
    <FacebookShareButton url={currentUrl} quote={shareMessage} hashtag={'#learn'}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={currentUrl} title={shareMessage}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <WhatsappShareButton url={imageUrl} title={shareMessage}>
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={currentUrl} title={shareMessage}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>
    </div>
  )
}

export default App
