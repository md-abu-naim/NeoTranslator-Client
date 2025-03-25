import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const TextTranslate = () => {
    const [fromDropdown, setFromDropdown] = useState(false)
    const [toDropdown, setToDropdown] = useState(false)
    const [fromLang, setFromLang] = useState('Detect language ⬇️')
    const [toLang, setToLang] = useState('English')
    const [inputText, setInputText] = useState('')
    const [translatedText, setTranslatedText] = useState('')
    const [rows, setRows] = useState(5)

    const languages = ["English", "Bangla", "Hindi", "Urdu", "Arabic", "Spanish"];

    // handle swap language
    const handleSwapLanguage = () => {
        setToLang(fromLang)
        setFromLang(toLang)
        setInputText(translatedText)
        setTranslatedText(inputText)
    }

    const selectToLanguage = (lang) => {
        setToLang(lang)
        setToDropdown(false)
    }

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        const lines = e.target.value.split("\n").length;
        setRows(lines < 5 ? 5 : lines);

    }
    return (
        <div className="">
            {/* DropDown button */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-2">
                <div className="md:relative md:w-full">
                    <div onClick={() => setFromDropdown(!fromDropdown)} tabIndex={0} role="button" className="btn w-full">
                        {fromLang}
                    </div>

                    {
                        fromDropdown && <ul className="absolute bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-1">
                            <div className="flex items-center justify-between gap-5 mb-2">
                                <input type="search" placeholder="Search" className="input w-full p-2 border rounded" />
                                <button onClick={() => setFromDropdown(false)} className="btn">
                                    <IoCloseSharp />
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {
                                    languages.map(lang => <li onClick={() => { setFromDropdown(false), setFromLang(lang) }} key={lang} className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer"><a>{lang}</a></li>)
                                }
                            </div>
                        </ul>
                    }
                </div>

                {/* Swap Button */}
                <button
                    onClick={handleSwapLanguage}
                    className="p-2 bg-gray-200 rounded-full text-xl hover:bg-gray-300 md:w-12 md:h-12 flex items-center justify-center"
                >
                    🔄
                </button>

                {/* Detect Language */}
                <div className="md:relative md:w-full">
                    <div onClick={() => setToDropdown(!toDropdown)} tabIndex={0} role="button" className="btn w-full">
                        {toLang}
                    </div>

                    {
                        toDropdown && <ul className="absolute left-0 md:left-auto bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-1">
                            <div className="flex items-center justify-between gap-5 mb-2">
                                <input type="search" placeholder="Search" className="input w-full p-2 border rounded" />
                                <button onClick={() => setToDropdown(false)} className="btn">
                                    <IoCloseSharp />
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {
                                    languages.map(lang => <li onClick={() => selectToLanguage(lang)} key={lang} className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer"><a>{lang}</a></li>)
                                }
                            </div>
                        </ul>
                    }
                </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
                <textarea
                    onChange={handleInputChange}
                    className="w-full  p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                    placeholder="Type or paste text here..."
                    rows={rows}
                />

                <textarea
                    className="w-full p-4 text-lg focus:outline-none resize-none bg-gray-100 rounded"
                    placeholder="Translation will appear here..."
                    value={inputText}
                    rows={rows}
                    readOnly
                />
            </div>
        </div>
    );
};

export default TextTranslate;