import BlueButton from "../Components/BlueButton";
import code from "../assets/Code.svg"
import cube from "../assets/Cube.png"

const Box2 = () => {
  return (
    <div className="min-h-screen p-2 pt-4 w-5/12 bg-gradient-to-br from-black via-neutral-500 to-neutral-400">
      <div className="flex justify-around">
        <BlueButton text="Blockly Workspace" iconsrc={cube}/>
        <BlueButton text="Source Code" iconsrc={code}/>
      </div>
    </div>
  );
};

export default Box2;
