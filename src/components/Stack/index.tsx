import { StackCard } from "./style";
import { Text } from "@/styles/Text";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: string | IconType;
  key: number;
}

export const Stack = (
  { title, icon: Icon }: StackProps,
  key: number
): JSX.Element => {
  const isString = typeof Icon === "string";

  return (
    <StackCard className={`${key}`} key={key}>
      <Text>{title}</Text>
      {isString ? (
        <img src={Icon} alt={title} title={title} height="50px" width="50px" />
      ) : (
        <Icon size={50} color="#868E96" />
      )}
    </StackCard>
  );
};
