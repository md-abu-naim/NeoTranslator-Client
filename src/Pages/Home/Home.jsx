// import { useState } from "react";
// import { IoCloseSharp } from "react-icons/io5";

import TextTranslate from "./TextTranslate";

const Home = () => {
    // const [inputText, setInputText] = useState("");
    // const [translatedText, setTranslatedText] = useState("");
    // const [fromLang, setFromLang] = useState("English");
    // const [toLang, setToLang] = useState("Bangla");
    // const [fromDropdown, setFromDropdown] = useState(false);
    // const [toDropdown, setToDropdown] = useState(false);

    // const languages = ["English", "Bangla", "Hindi", "Urdu", "Arabic", "Spanish"];

    // Swap the languages
    // const swapLanguages = () => {
    //     setFromLang(toLang);
    //     setToLang(fromLang);
    //     setInputText(translatedText);
    //     setTranslatedText(inputText);
    // };

    // Close dropdown when language is selected
    // const selectFromLanguage = (lang) => {
    //     setFromLang(lang);
    //     setFromDropdown(false);
    // };

    // const selectToLanguage = (lang) => {
    //     setToLang(lang);
    //     setToDropdown(false);
    // };

    return (
        <div>
            <h1 className="text-center text-3xl mb-4">Translate Your Favorite Language...</h1>
            <TextTranslate />
            {/* <div className="p-4">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
                    <div className="relative w-full">
                        <div tabIndex={0} role="button" onClick={() => setFromDropdown(!fromDropdown)} className="btn w-full">
                            {fromLang} ⬇️
                        </div>

                        {fromDropdown && (
                            <ul className="absolute bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-1">
                                <div className="flex items-center justify-between gap-5 mb-2">
                                    <input type="search" placeholder="Search" className="input w-full p-2 border rounded" />
                                    <button onClick={() => setFromDropdown(false)} className="btn">
                                        <IoCloseSharp />
                                    </button>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {languages.map((lang) => (
                                        <li
                                            key={lang}
                                            onClick={() => selectFromLanguage(lang)}
                                            className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer"
                                        >
                                            <a>{lang}</a>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        )}
                    </div>

                    <button
                        onClick={swapLanguages}
                        className="p-2 bg-gray-200 rounded-full text-xl hover:bg-gray-300 w-12 h-12 flex items-center justify-center"
                    >
                        🔄
                    </button>

                    <div className="relative w-full">
                        <div tabIndex={0} role="button" onClick={() => setToDropdown(!toDropdown)} className="btn w-full">
                            {toLang} ⬇️
                        </div>

                        {toDropdown && (
                            <ul className="absolute bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-1">
                                <div className="flex items-center justify-between gap-5 mb-2">
                                    <input type="search" placeholder="Search" className="input w-full p-2 border rounded" />
                                    <button onClick={() => setToDropdown(false)} className="btn">
                                        <IoCloseSharp />
                                    </button>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {languages.map((lang) => (
                                        <li
                                            key={lang}
                                            onClick={() => selectToLanguage(lang)}
                                            className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer"
                                        >
                                            <a>{lang}</a>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <textarea
                        className="w-full h-40 p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                        placeholder="Type or paste text here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />

                    <textarea
                        className="w-full h-40 p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                        placeholder="Translation will appear here..."
                        value={inputText} 
                        readOnly
                    />
                </div>
            </div> */}
        </div>
    );
};

export default Home;
