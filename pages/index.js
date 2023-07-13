import Image from "next/image";
import Text from "./api/components/Text";
import Button from "./api/components/Button";
import {
  faCalendar,
  faDotCircle,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({ subsets: ["latin"] });

const buttonStates = ["Default", "Hover", "Focus", "Disabled"];

const SubButtonCardGroup = (props) => {
  const { color, textColor, leftIcon, rightIcon, value, clear, className } =
    props;
  return (
    <div className=" border-solid border-blue-500 border rounded-md text-center w-max">
      <div className="grid grid-cols-5">
        <Text className="p-1 text-center"> Small </Text>
        <Text className="p-1 text-center"> Medium </Text>
        <Text className="p-1 text-center"> Large </Text>
        <Text className="p-1 text-center"> XL </Text>
        <Text className="p-1 text-center"> XXL </Text>
      </div>
      {buttonStates.map((item, index) => {
        const disabled = item === "Disabled";
        return (
          <div className="grid grid-cols-5" key={index}>
            <div className="p-1">
              <Button
                sm
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                color={color}
                textColor={textColor}
                disabled={disabled}
                clear={clear}
                className={className}
              >
                {value}
              </Button>
            </div>
            <div className="p-1">
              <Button
                md
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                color={color}
                textColor={textColor}
                disabled={disabled}
                clear={clear}
                className={className}
              >
                {value}
              </Button>
            </div>
            <div className="p-1">
              <Button
                lg
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                color={color}
                textColor={textColor}
                disabled={disabled}
                clear={clear}
                className={className}
              >
                {value}
              </Button>
            </div>
            <div className="p-1">
              <Button
                xlg
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                color={color}
                textColor={textColor}
                disabled={disabled}
                clear={clear}
                className={className}
              >
                {value}
              </Button>
            </div>
            <div className="p-1">
              <Button
                xxlg
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                color={color}
                textColor={textColor}
                disabled={disabled}
                clear={clear}
                className={className}
              >
                {value}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ButtonCardGroup = (props) => {
  const { color, textColor, leftIcon } = props;
  return (
    <div className="bg-white border-dashed border p-3 border-blue-500 flex w-max">
      <div>
        <div className="flex h-[30px]"></div>
        <div className="flex h-[61px]">
          <Text className="py-2 px-4 my-auto">Default</Text>
        </div>
        <div className="flex h-[61px]">
          <Text className="py-2 px-4 my-auto">Hover</Text>
        </div>
        <div className="flex h-[61px]">
          <Text className="py-2 px-4 my-auto">Focus</Text>
        </div>
        <div className="flex h-[61px]">
          <Text className="py-2 px-4 my-auto">Disabled</Text>
        </div>
      </div>
      <SubButtonCardGroup {...props} value="Button CTA" />
      <SubButtonCardGroup {...props} value="Button CTA" leftIcon={faPlus} />
      <SubButtonCardGroup {...props} value="Button CTA" rightIcon={faPlus} />
      <SubButtonCardGroup {...props} rightIcon={faPlus} />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className="p-2 bg-red-500">
        <ButtonCardGroup />
        <ButtonCardGroup
          className="bg-[#306cfe26] hover:bg-[#306cfe38]"
          color="blue-200"
          textColor={"blue"}
          clear
        />
        <ButtonCardGroup className="bg-white hover:bg-white focus:bg-white drop-shadow-sm  border-gray-300 text-gray-800 " />
        <ButtonCardGroup
          clear
          className="bg-white hover:bg-[#306CFE26] focus:bg-[#306CFE38] drop-shadow-sm text-blue-800 "
        />
        <ButtonCardGroup
          clear
          className="bg-white hover:bg-gray-100 focus:bg-gray-200 text-gray-800 "
        />

        <ButtonCardGroup
          clear
          className="bg-white hover:bg-white hover:underline focus:bg-white text-blue-800 "
        />

        <ButtonCardGroup
          clear
          className="bg-white hover:bg-white hover:underline focus:bg-white text-gray-800 "
        />

        <ButtonCardGroup
          clear
          className="bg-red-500 hover:bg-red-600 ring-red-300 focus:bg-red-500 text-white"
        />

        <ButtonCardGroup
          clear
          className="bg-red-100 hover:bg-red-200 ring-red-50 focus:bg-red-100 text-red-500"
        />

        <ButtonCardGroup className="bg-white hover:bg-red-300 ring-red-50 focus:bg-white border-red-300 drop-shadow-sm text-red-500" />

        <ButtonCardGroup
          clear
          className="bg-white hover:bg-red-100 ring-red-50 focus:bg-red-200 border-red-300  text-red-700"
        />

        <ButtonCardGroup
          clear
          className="bg-white hover:bg-white hover:underline ring-red-50 focus:bg-white  border-red-300  text-red-600"
        />

        <ButtonCardGroup
          clear
          className="bg-white hover:bg-white  ring-red-50 ring-0 focus:underline focus:bg-white  border-red-300  text-red-600"
        />

        {/* <ButtonCardGroup
          className=" hover:bg-[#306cfe26] focus:bg-[#306cfe38]"
          color={"white"}
          textColor={"blue"}
          clear={true}
        />
        <ButtonCardGroup color={"white"} textColor={"blue"} clear={true} />
        <ButtonCardGroup color={"red"} />
        <ButtonCardGroup
          color={"white"}
          textColor={"red"}
          className="hover:bg-red-300 text-red-900 border-red-500"
        />
        <ButtonCardGroup
          color={"white"}
          textcolor={"red"}
          className="text-red-"
        />
        <ButtonCardGroup
          color={"white"}
          textcolor={"red"}
          className="hover:bg-red-400 text-red-500 border-red-300"
        /> */}
      </div>
    </>
  );
}
