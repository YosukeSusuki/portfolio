//Linkにurl name　をつけるコンポーネント
import Link from "next/link"

export default function LinkItem(props) {
  return (
      <Link href={props.url}>
        {props.name}
      </Link>
  )
}