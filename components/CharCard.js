import Link from "next/link";

export default function CharCard({ character }) {
    return (
        <Link href={`/characters/${character.slug}`}>
            <img src={character?.characterFields.characterPicture?.node?.mediaItemUrl} />
        </Link>
    );
}