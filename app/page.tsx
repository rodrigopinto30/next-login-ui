import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Company</span>name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className='flex justify-center my-2'>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaFacebook className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaLinkedin className='text-sm'/>
                </a>
                <a href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm'/>
                </a>
              </div>
              <p className='text-gray-400 my-3'>or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='flex items-center bg-gray-100 w-64 p-2 mb-3'>
                  <FaRegEnvelope className='m-2 text-gray-400'/>
                  <input 
                    className='bg-gray-100 outline-none text-sm flex-1'
                    type='email'
                    name='email'
                    placeholder='Email'
                    />
                </div>
                <div className='flex items-center bg-gray-100 w-64 p-2'>
                  <MdLockOutline className='m-2 text-gray-400'/>
                  <input 
                    className='bg-gray-100 outline-none text-sm flex-1'
                    type='password'
                    name='password'
                    placeholder='Password'
                    />
                </div>

                <div className='flex justify-between w-64 mb-5 mt-3'>
                  <label className='flex items-center text-xs'>
                    <input type="checkbox" name='remember' className='mr-1'/>Remember me</label>
                    <a href='#' className='text-xs'>Forgot Password?</a>
                </div>

                <a href="#" 
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                    Sign In
                  </a>    
              </div>
            </div>
            </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up personal information and start journey with us.</p>
            <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  );
}
