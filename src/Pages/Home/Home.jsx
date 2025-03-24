import { useState } from "react";

const Home = () => {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [fromLang, setFromLang] = useState("English");
    const [toLang, setToLang] = useState("Bangla");

    const languages = ["English", "Bangla", "Hindi", "Urdu", "Arabic", "Spanish"];

    // Swap the languages
    const swapLanguages = () => {
        setFromLang(toLang);
        setToLang(fromLang);
        setInputText(translatedText);
        setTranslatedText(inputText);
    };

    return (
        <div>
            <h1 className="text-center text-3xl">Translate Your Favorite Language...</h1>
            <div className=" mt-10 p-4">
                {/* Language Select + Swap Button */}
                <div className="grid grid-cols-3 gap-4 items-center mb-4">
                    {/* From Language Dropdown */}
                    {/* <select
                        value={fromLang}
                        onChange={(e) => setFromLang(e.target.value)}
                        className="border p-2 rounded bg-white w-full"
                    >
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}


                    </select> */}

                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1">{fromLang} ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content grid grid-cols-3 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {languages.map(lang => <li onClick={() => setFromLang(lang)} key={lang}><a>{lang}</a></li>)}
                        </ul>
                    </div>

                    {/* Swap Button */}
                    <button
                        onClick={swapLanguages}
                        className="p-2 bg-gray-200 rounded-full text-xl hover:bg-gray-300 mx-auto"
                    >
                        🔄
                    </button>

                    {/* To Language Dropdown */}
                    {/* <select
                        value={toLang}
                        onChange={(e) => setToLang(e.target.value)}
                        className="border p-2 rounded bg-white w-full"
                    >
                        {languages.map((lang) => (
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select> */}
                    <div className="dropdown dropdown-bottom">
                        <div  tabIndex={0} role="button" className="btn m-1">{fromLang} ⬇️</div>
                        <ul tabIndex={0} className="dropdown-content grid grid-cols-3 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {languages.map(lang => <li onClick={() => setToLang(lang)} key={lang}><a>{lang}</a></li>)}
                        </ul>
                    </div>
                </div>


                {/* Translation Textareas */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Input Textarea */}
                    <textarea
                        className="w-full h-40 p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                        placeholder="Type or paste text here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />

                    {/* Output Textarea (Translated) */}
                    <textarea
                        className="w-full h-40 p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                        placeholder="Translation will appear here..."
                        value={translatedText}
                        readOnly
                    />
                </div>
            </div>

        </div>
    );
};

export default Home;