function LoginPage() {
   return (
      <div className="max-w-md mx-auto mt-10">
         <h2 className="font-bold text-2xl text-center">Đăng Nhập</h2>
         <form action="" className="space-y-4 mt-4">
            <div>
               <label className="block text-md font-medium">Email:</label>
               <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
               />
            </div>
            <div>
               <label className="block text-md font-medium">Password:</label>
               <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md"
               />
            </div>
            <button
               type="submit"
               className="block w-fit px-4 py-3 bg-blue-500 rounded-md text-white mx-auto cursor-pointer hover:bg-blue-700"
            >
               Đăng nhập
            </button>
         </form>
      </div>
   );
}

export default LoginPage;
