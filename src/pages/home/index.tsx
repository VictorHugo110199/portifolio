// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/VictorHugo110199`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Olá eu sou o{" "}
              <Text as="span" type="heading1" color="brand1">
                Victor,
              </Text>{" "}
              <br />
              desenvolvedor{" "}
              <Text as="span" type="heading1" color="brand1">
                Full-Stack.
              </Text>{" "}
              
            </Text>
            <Text type="body1" color="grey2">
              Apaixonado por tecnologia e programação, eu crio aplicações Web e Server Side, confira abaixo algumas teclogias que domino!
            </Text>
            <HeaderButtonsArea>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
              <Button
                className="linkedin"
                type="circle"
                as="a"
                target="_blank"
                href={`https://linkedin.com/in/${userData.linkedinUser}`}
              >
                <FaLinkedinIn />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns exemplos{" "}
                <Text as="span" color="brand5">
                  legais de se explorar e testar!
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
