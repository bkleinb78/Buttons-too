import Image from "next/image";
import Text from "./api/components/Text";
import Button from "./api/components/Button";
import {
  faCalendar,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const buttonStates = ["Default", "Hover", "Focus", "Disabled"];

const SubButtonCardGroup = (props) => {
  const { color, textColor, leftIcon, rightIcon, value } = props;
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
        <div className="flex h-[70px]">
          <Text className="py-2 px-4 my-auto">Default</Text>
        </div>
        <div className="flex h-[70px]">
          <Text className="py-2 px-4 my-auto">Hover</Text>
        </div>
        <div className="flex h-[70px]">
          <Text className="py-2 px-4 my-auto">Focus</Text>
        </div>
        <div className="flex h-[70px]">
          <Text className="py-2 px-4 my-auto">Disabled</Text>
        </div>
      </div>
      <SubButtonCardGroup value="Button CTA" />
      <SubButtonCardGroup value="Button CTA" leftIcon={faPlus} />
      <SubButtonCardGroup value="Button CTA" rightIcon={faPlus} />
      <SubButtonCardGroup rightIcon={faPlus} />
    </div>
  );
};

export default function Home() {
  return (
    <div className="p-2 bg-red-500">
      <ButtonCardGroup />
      {/* <ButtonCardGroup leftIcon={faPlus} />
        <ButtonCardGroup color={"white"} leftIcon={faPlus} textColor={"gray"} />
        <ButtonCardGroup color={"white"} textColor={"gray"} />
        <ButtonCardGroup color={"red"} /> */}
    </div>
  );
}
