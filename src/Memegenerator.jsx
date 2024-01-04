import React from "react";
import memesData from "./memesData";

function Memegenerator() {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

  return (
    <div>
      <div className="bg-yellow-400 py-2 mb-4">
        <div className="px-12 flex items-center">
          <img
            className="w-12"
            src="https://images.vexels.com/media/users/3/143350/isolated/preview/150164edc7f28a716bfceae9dd58cf2c-coolface-trollface-meme.png"
            alt=""
          />
          <p className="text-2xl pl-4">Ultimate Meme Generator</p>
        </div>
      </div>

      <div className="px-24">
        <div className="flex justify-between gap-4 py-4">
          <input
            type="text"
            placeholder="upper text..."
            className="w-1/2 border border-gray-400 rounded-lg py-2 px-2"
          />
          <input
            type="text"
            placeholder="bottom text..."
            className="w-1/2 border border-gray-400 rounded-lg py-2 px-2"
          />
        </div>

        <button onClick={getMemeImage} className="bg-yellow-400 w-full py-2 rounded-lg">
          Get a new meme image
        </button>

        <img
          src={memeImage}
          className="w-full py-4"
        />
      </div>
    </div>
  );
}

export default Memegenerator;
