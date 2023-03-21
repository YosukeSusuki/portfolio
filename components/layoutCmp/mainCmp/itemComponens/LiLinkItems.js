//　liとlinkを作るコンポーネント
import Link from "next/link"

export default function LinkItem(props) {
  return (
    <li>
      <Link href={props.url}>
        {props.name}
      </Link>
    </li>
  )
}