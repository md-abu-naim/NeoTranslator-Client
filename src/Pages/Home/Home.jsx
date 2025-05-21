

import TextTranslate from "./TextTranslate";

const Home = () => {
    return (
        <div className="p-3 md:px-28">
            <h1 className="text-center text-3xl mb-4">Translate Your Favorite Language...</h1>
            <TextTranslate />
        </div>
    );
};

export default Home;
