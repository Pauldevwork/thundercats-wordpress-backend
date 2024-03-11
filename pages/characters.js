import { gql, useQuery } from "@apollo/client";
import CharCard from "../components/CharCard";
import Layout from "../components/Layout";

const GET_CHARS = gql`
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

  export default function CHARS() {
    const { loading, error, data } = useQuery(GET_CHARS);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <Layout>
            <ul className="gallery">
                {data.characters.nodes.map((character) => (
                    <li className="galleryItem" key={character.databaseId}>
                        <CharCard character={character} />
                    </li>
                ))}
            </ul>
        </Layout>
    );
  }