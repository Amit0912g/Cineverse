import loader from "/Loaders.gif";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen select-none">
      <img className="w-[20%]" src={loader} alt="" />
    </div>
  );
};

export default Loader;
