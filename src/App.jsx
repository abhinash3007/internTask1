import {
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
  LinkedinShareButton, LinkedinIcon
} from 'react-share';
import './App.css';

function App() {
  const shareUrl = window.location.href;
  const title = "FoodVilla - Best Indian Food Online!";
  const description = "Order from FoodVilla and enjoy delicious Indian cuisine at your doorstep.";
  const imageUrl = `${window.location.origin}/images/foodvilla-4.png`;

  return (
    <div className='flex flex-col items-center gap-4 p-8'>
      <h1 className="text-2xl font-bold">FoodVilla</h1>
      <p className="mb-4 max-w-xl text-center">{description}</p>
      <img src="/jpeg/foodvilla-4.png" alt="FoodVilla" className="w-96 rounded-lg shadow-lg" />

      <div className='flex gap-4 mt-6'>
        <FacebookShareButton url={shareUrl} quote={`${title}\n\n${description}`} hashtag="#FoodVilla">
          <FacebookIcon size={48} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={`${title} - ${description}`}>
          <TwitterIcon size={48} round />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} title={`${title} - ${description}`}>
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>

        <LinkedinShareButton url={shareUrl} title={title} summary={description} source="FoodVilla">
          <LinkedinIcon size={48} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default App;
