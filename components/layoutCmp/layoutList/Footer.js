//Footer コンポーネント
export default function Footer(props) {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer>
      <div className="textCen">©{year} S.Yosuke_Portfolio</div>
    </footer>
  )
}