import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Link from "next/link";

const GET_CHAR_DETAILS = gql`
query GetChar {
    characters {
      nodes {
        characterFields {
          characterName
          bio
          weapons
          characterPicture {
            node {
              databaseId
              mediaItemUrl
            }
          }
        }
        databaseId
        slug
      }
    }
  }
  `;


  export default function CHARS_DETAILS() {
    const { query = {} } = useRouter();
    const { charSlug } = query;


    const { loading, error, data } = useQuery(GET_CHAR_DETAILS, {
        variables: { charSlug }
    });

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <Layout>
            <Link href="/characters">
                <p>View All Characters</p>
            </Link>
            <img src={characterName?.characterFields.characterPicture?.node?.mediaItemUrl} />
            <h1>{characterData.charactertitle}</h1>
            <p>Character Bio {characterData.character.bio}</p>
            <h3>Characters Weapons</h3>
            <ol>
                {characterData?.nodes?.characterFields?.weapons.map((weapons) => (
                    <li key={weapons.id}></li>
                ))}
            </ol>
        </Layout>
    );
  }