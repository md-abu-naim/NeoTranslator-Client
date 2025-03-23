
const Home = () => {
    return (
        <div>
            <h1 className="text-center text-3xl">Translate Your Favorite Language...</h1>
            <div className="flex items-center justify-between">
                <div className="">
                    <select defaultValue="Server location" className="select select-neutral">
                        <option disabled={true}>Server location</option>
                        <option>North America</option>
                        <option>EU west</option>
                        <option>South East Asia</option>
                    </select>
                    <textarea className="textarea" placeholder="Bio"></textarea>
                </div>
                <div>
                    <select defaultValue="Server location" className="select select-neutral">
                        <option disabled={true}>Server location</option>
                        <option>North America</option>
                        <option>EU west</option>
                        <option>South East Asia</option>
                    </select>
                    <textarea className="textarea" placeholder="Bio"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Home;