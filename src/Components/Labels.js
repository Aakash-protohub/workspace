
const Labels = ({ text, iconsrc }) => {
  return (
    <div className="bg-black border-2 border-blue-700 text-white font-semibold p-1 w-[200px] rounded-md flex justify-start items-center text-[30px] shadow-[3px_3px_0px_0px_#1D4ED8]">
      <img
        src={iconsrc}
        alt="icon"
        align="middle"
        className="mx-2 h-[35px] w-[35px] flex items-center justify-center object-cover"
      />
      {text}
    </div>
  );
};

export default Labels;
// shadow-[0px_20px_20px_10px_#00000024]