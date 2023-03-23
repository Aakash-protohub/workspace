const BlueButton = ({ text, iconsrc }) => {
  return (
    <div className="bg-blue-700 text-white font-semibold p-3 w-[250px] rounded-full flex justify-center items-center text-[18px]">
      <div className="mx-2 rounded-full h-[33px] w-[33px] flex justify-center items-center p-1 shadow-[0px_3px_20px_2px_#1a202c]">
        <img
          src={iconsrc}
          alt="icon"
          className="h-[25px] w-[25px] flex items-center justify-around object-cover"
        />
      </div>
      {text}
    </div>
  );
};

export default BlueButton;
