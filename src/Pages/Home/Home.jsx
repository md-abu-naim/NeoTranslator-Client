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
            <div className="p-4">
            {/* Language Select + Swap Button */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
                {/* From Language Dropdown */}
                <div className="dropdown dropdown-bottom w-full">
                    <div tabIndex={0} role="button" className="btn w-full">{fromLang} ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content grid grid-cols-3 bg-base-100 rounded-box z-10 w-full p-2 shadow-sm">
                        {languages.map(lang => (
                            <li key={lang} onClick={() => setFromLang(lang)} className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer">
                                <a>{lang}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Swap Button */}
                <button
                    onClick={swapLanguages}
                    className="p-2 bg-gray-200 rounded-full text-xl hover:bg-gray-300 w-12 h-12 flex items-center justify-center"
                >
                    🔄
                </button>

                {/* To Language Dropdown */}
                <div className="dropdown dropdown-bottom w-full">
                    <div tabIndex={0} role="button" className="btn w-full">{toLang} ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content grid grid-cols-3 bg-base-100 rounded-box z-10 w-full p-2 shadow-sm">
                        {languages.map(lang => (
                            <li key={lang} onClick={() => setToLang(lang)} className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer">
                                <a>{lang}</a>
                            </li>
                        ))}
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

                {/* Output Textarea (Real-time Preview) */}
                <textarea
                    className="w-full h-40 p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                    placeholder="Translation will appear here..."
                    value={inputText} // Input-এর সাথে সাথে আপডেট হবে
                    readOnly
                />
            </div>
        </div>

        </div>
    );
};

export default Home;