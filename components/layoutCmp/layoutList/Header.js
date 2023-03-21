//Header コンポーネント
//props.change　pages内の各ページから値を取得
export default function Header(props) {
  return (
    <header className="flex">
      <p className="flex"><img src="/images/logo2.svg" alt="logo" /></p>
      <nav>{props.change()}</nav>
    </header>
  )
}