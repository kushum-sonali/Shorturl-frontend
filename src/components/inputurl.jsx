import React, { useState } from 'react';
import axios from 'axios';

import UrlCover from '../animation/UrlCover';
function InputUrl() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [show, setShow] = useState(false);
  const btn= document.getElementById('btn');
  const btn2= document.getElementById('btn-2');
  const input= document.getElementById('input');
  function newTab() {
    window.open(`http://${url}`, '_blank').focus();
    btn.style.display='none';
    input.value='';
  }
  async function handleSubmit(e) {  
    e.preventDefault();
    btn.style.display='block';

    const res = await axios.post('http://localhost:3000/url', {
      url
    });
    console.log(res);
    setUrl(`localhost:3000/${res.data.shortId}`);
   
  }
  return (
    <div className='main col-12 '>
      <div className='main-1-child  col-12 col-md-6 order-md-1 order-2'>


        <div className='children-1'>
          <div className='m'>
            <h1 className="title ">Url-Shortner</h1>
          </div>
          <input id='input' type="text" placeholder="please Enter valid Url" value={url} onChange={(e) => setUrl(e.target.value)} />
          <hr />
          <button
          id='btn-2'
            type="submit"

            onClick={handleSubmit}
          >
            Generate short Url</button>


          <div className='result'>
            <h3 className=''></h3>
            {/* <h2>{url}</h2> */}
            <button 
            id='btn'
            onClick={newTab} style={{
              color: 'white', backgroundColor: 'black', border: 'none', padding: '10px', borderRadius: '10px'
            }}>{url}</button>


          </div>
        </div></div>
      <div className='main-2-child col-12 col-md-6 order-md-2 order-1'>
        <UrlCover />
      </div>
    </div>
  )
}
export default InputUrl;