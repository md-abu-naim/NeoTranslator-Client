
const Contact = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-lg">Name</label>
                    <input type="text" id="name" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-lg">Email</label>
                    <input type="email" id="email" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-lg">Message</label>
                    <textarea id="message" className="w-full p-3 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;