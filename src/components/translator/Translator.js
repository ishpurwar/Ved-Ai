import React, { useState } from 'react';
import axios from 'axios';

const Translator = () => {
  const [sanskritText, setSanskritText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const rapidApiKey = 'a55bd5e908msh553b315a5653fe6p14ccd9jsn032a57f72877';
  const rapidApiHost = 'google-translate1.p.rapidapi.com';

  const handleInputChange = (e) => {
    setSanskritText(e.target.value);
  };

  const translateSanskritToEnglish = async () => {
    try {
      const response = await axios.post(
        `https://${rapidApiHost}/language/translate/v2`,
        { q: sanskritText, target: 'en', source: 'sa' }, // 'sa' is the code for Sanskrit
        {
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': rapidApiHost,
          },
        }
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('AxiosError:', error);
      if (error.response) {
        console.error('Response Status:', error.response.status);
        console.error('Response Data:', error.response.data);
      }
    }
  };
  

  return (
    <div>
      <h1>Sanskrit to English Translator</h1>
      <div>
        <textarea
          rows="4"
          cols="50"
          value={sanskritText}
          onChange={handleInputChange}
          placeholder="Enter Sanskrit text to translate to English"
        ></textarea>
      </div>
      <div>
        <button onClick={translateSanskritToEnglish}>Translate to English</button>
      </div>
      {translatedText && (
        <div>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
