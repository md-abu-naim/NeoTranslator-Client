import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const TextTranslate = () => {
    const [fromDropdown, setFromDropdown] = useState(false)
    const [toDropdown, setToDropdown] = useState(false)

    const languages = ["English", "Bangla", "Hindi", "Urdu", "Arabic", "Spanish"];

    return (
        <div className="p-4">
            {/* DropDown button */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
                <div className="relative w-full">
                    <div onClick={() => setFromDropdown(!fromDropdown)} tabIndex={0} role="button" className="btn w-full">
                        Detect language ⬇️
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
                                    languages.map(lang => <li onClick={() => setFromDropdown(false)} key={lang} className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer"><a href="">{lang}</a></li>)
                                }
                            </div>
                        </ul>
                    }
                </div>

                {/* Swap Button */}
                <button
                    className="p-2 bg-gray-200 rounded-full text-xl hover:bg-gray-300 w-12 h-12 flex items-center justify-center"
                >
                    🔄
                </button>

                {/* Detect Language */}
                <div className="relative w-full">
                    <div onClick={() => setToDropdown(!toDropdown)} tabIndex={0} role="button" className="btn w-full">
                        Detect language ⬇️
                    </div>

                    {
                        toDropdown && <ul className="absolute bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-1">
                            <div className="flex items-center justify-between gap-5 mb-2">
                                <input type="search" placeholder="Search" className="input w-full p-2 border rounded" />
                                <button onClick={() => setToDropdown(false)} className="btn">
                                    <IoCloseSharp />
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {
                                    languages.map(lang => <li onClick={() => setToDropdown(false)} key={lang} className="text-center hover:bg-gray-200 rounded p-2 cursor-pointer"><a href="">{lang}</a></li>)
                                }
                            </div>
                        </ul>
                    }
                </div>
            </div>

        </div>
    );
};

export default TextTranslate;