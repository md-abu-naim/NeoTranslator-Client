import { useState } from "react";

const TextTranslate = () => {
    const [dropdown, setDropdown] = useState(false)


    // handle Toggle Dropdown
    const handleToggle = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className="p-4">
            {/* DropDown button */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
                <div >
                    <div onClick={handleToggle} tabIndex={0} role="button" className="btn w-full">
                        Detect language ⬇️
                    </div>

                    {
                        dropdown && <ul className="absolute bg-base-100 rounded-box z-10 w-full p-2 shadow-sm mt-1">
                        <div className="flex items-center justify-between gap-5 mb-2">
                            <input type="search" placeholder="Search" className="input w-full p-2 border rounded" />
                            <button className="btn">
                                <IoCloseSharp />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <li>a</li>
                            <li>b</li>
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
                <div>
                    <div tabIndex={0} role="button" className="btn w-full">
                        Detect language ⬇️
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextTranslate;