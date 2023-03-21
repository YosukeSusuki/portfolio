//Main　各ページの管理コンポーネント
//props.contents() はpagesの各コンテンツから値を指定
export default function Main(props) {
  return (
    <main>{props.contents()}</main>
  )
}