import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="flex flex-col items-center">
      <img className='h-[250px]' src="/assets/QuestionMark.webp" alt="" />
      <h2 className='text-3xl my-5 font-bold'>Privacy Policy Not Available</h2>
      <Link to="/" className="font-bold bg-blue-500 hover:bg-blue-900 transition duration-300 text-white p-3 mt-3 rounded-lg" >Continue Translating</Link>
    </div>
  );
};

export default Terms;