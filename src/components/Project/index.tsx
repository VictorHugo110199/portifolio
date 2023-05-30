import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {

  return (
    <>
      
          <ProjectWrapper>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              Lista de Contatos
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    TypeScript
                  </Text>
                </ProjectStackTech>
            </ProjectStack>

            <Text type="body1" color="grey2">
            Projeto Full-Stack de uma lista de contatos
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href="https://github.com/VictorHugo110199/lista-de-contatos-back-end">
                <FaGithub /> Github Code
              </ProjectLink>
                {/* <ProjectLink
                  target="_blank"
                  href="https://motor-shop-front.vercel.app/"
                >
                  <FaShare /> Deploy
                </ProjectLink> */}
              
            </ProjectLinks>
          </ProjectWrapper>


          <ProjectWrapper>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              ezBracket
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    TypeScript
                  </Text>
                </ProjectStackTech>
            </ProjectStack>

            <Text type="body1" color="grey2">
            Api de geração de chaveamento de campeonatos
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href="https://github.com/VictorHugo110199/ezbrackt-server">
                <FaGithub /> Github Code
              </ProjectLink>
                <ProjectLink
                  target="_blank"
                  href="https://ezbracket2.onrender.com/"
                >
                  <FaShare /> Deploy Api
                </ProjectLink>
              
            </ProjectLinks>
          </ProjectWrapper>


          <ProjectWrapper>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              Kenzie Hub
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    TypeScript
                  </Text>
                </ProjectStackTech>
            </ProjectStack>

            <Text type="body1" color="grey2">
            Aplicação de gerenciamento e listagem de linguagens de programação
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href="https://github.com/VictorHugo110199/project-kenzie-hub">
                <FaGithub /> Github Code
              </ProjectLink>
                <ProjectLink
                  target="_blank"
                  href="https://kenziehub-drab.vercel.app/"
                >
                  <FaShare /> Deploy
                </ProjectLink>
              
            </ProjectLinks>
          </ProjectWrapper>


          <ProjectWrapper>
            <ProjectTitle
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey4"
            >
              Motor-Shop
            </ProjectTitle>

            <ProjectStack>
              <Text type="body2" color="grey2">
                Primary Language:
              </Text>
                <ProjectStackTech>
                  <Text color="grey2" type="body2">
                    JavaScript
                  </Text>
                </ProjectStackTech>
            </ProjectStack>

            <Text type="body1" color="grey2">
            E-commerce de carro
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href="https://github.com/orgs/grupo24-t13-marcelo/repositories">
                <FaGithub /> Github Code
              </ProjectLink>
                <ProjectLink
                  target="_blank"
                  href="https://motor-shop-front.vercel.app/"
                >
                  <FaShare /> Deploy
                </ProjectLink>
              
            </ProjectLinks>
          </ProjectWrapper>
        
    </>
  );
};
