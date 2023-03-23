import Labels from "./Labels";
import Events from "../assets/box1/events.svg";
import Loops from "../assets/box1/loops.svg"
import Logic from "../assets/box1/logic.svg"
import Math from "../assets/box1/math.svg"
import Text from "../assets/box1/text.svg"
import Objects from "../assets/box1/object.svg"
import Sounds from "../assets/box1/sound.svg"
import Variable from "../assets/box1/variable.svg"
//2nd Box
import Box from "../assets/box1/box.svg"
import Sphere from "../assets/box1/sphere.svg"
import Cylinder from "../assets/box1/cylinder.svg"
import Player from "../assets/box1/player.svg"
import Camera from "../assets/box1/camera.svg"
import Light from "../assets/box1/light.svg"

const Box1 = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-4 w-2/12 bg-[#4B4B4B]">
      <h1 className="text-white text-4xl font-semibold text-center my-3">Globals</h1>
      <Labels text="Events" iconsrc={Events} />
      <Labels text="Loops" iconsrc={Loops} />
      <Labels text="Logic" iconsrc={Logic} />
      <Labels text="Math" iconsrc={Math} />
      <Labels text="Text" iconsrc={Text} />
      <Labels text="Sound" iconsrc={Sounds} />
      <Labels text="Objects" iconsrc={Objects} />
      <Labels text="Variable" iconsrc={Variable} />
      <h1 className="text-white text-4xl font-semibold text-center my-3">Layers</h1>
      <Labels text="Box" iconsrc={Box} />
      <Labels text="Sphere" iconsrc={Sphere} />
      <Labels text="Cylinder" iconsrc={Cylinder} />
      <Labels text="Player" iconsrc={Player} />
      <Labels text="Camera" iconsrc={Camera} />
      <Labels text="Light" iconsrc={Light} />
    </div>
  );
};

export default Box1;
