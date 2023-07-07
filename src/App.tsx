import './App.css';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { MeaningView } from './views/MeaningView';
import { ReactComponent as NewWindow } from './common/assets/icons/icon-new-window.svg';
import { ReactComponent as Play } from './common/assets/icons/icon-play.svg';
import { Search } from './components/Search';
import { Header } from './components/Header';
import useFetch from './common/hooks/useFetch';

function App() {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("hello");
  const { result, error } = useFetch(searchValue)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(value);
    setValue("");
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  const handleAudioPlay = () => {
    const audio = new Audio(result?.phonetics?.[1]?.audio);
    audio.play();
  }

  return (
    <div data-theme={Boolean(toggle)} className="App" >
      <div className="App__container">
        <Header handleToggle={handleToggle} toggle={toggle} />
        <Search handleSubmit={handleSubmit} handleChange={handleChange} value={value} toggle={toggle} />
        <div className="App__title-section">
          <div className="App__title-section-title-container">
            <h3 data-theme={Boolean(toggle)} className="App__title-section-title">{result?.word}</h3>
            <p className='App__title-section-title-phonetics'>{result?.phonetics?.[1]?.text}</p>
          </div>
          <button className="App__title-section-title-phonetics-audio" data-error={Boolean(error)} type="button" onClick={handleAudioPlay} >
            <Play />
          </button>

        </div>
        <div className="App__meanings-section">
          {
            result?.meanings?.map((element: any, index: number) => {
              return (
                <React.Fragment key={index + 1}>
                  <MeaningView toggle={toggle} partOfSpeech={element?.partOfSpeech} definitions={element?.definitions} key={index + 1} />
                  <p className="App__meanings-section-synonyms">Synonyms
                    <span className="App__meanings-section-synonyms-content">{element?.synonyms}</span>
                  </p>
                </React.Fragment>
              )
            })
          }
        </div>

        <div className="App__horizontal-line"></div>
        <p className="App__source-section"><span className="App__source-section-title">Source</span>
          <span className="App__source-section-title-urls">
            {
              result?.sourceUrls?.map((element: any, index: number) => {
                return (
                  <span className='App__source-section-title-urls-box ' key={index + 1}>
                    <a href={element} target="_self" className='App__source-section-title-urls-content' key={index + 1}>{element} </a><a href={element} rel="noreferrer" target="_blank"><NewWindow /></a>
                  </span>
                )

              })
            }
          </span>
        </p>
      </div>
    </div >
  );
}

export default App;
