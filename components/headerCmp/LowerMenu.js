//下層ページ用のHeader コンポーネント
//li link　を作るコンポーネントを使用
import Li from "../layoutCmp/mainCmp/itemComponens/LiLinkItems"
import { slide as Menu } from "react-burger-menu";
export default function HeaderItem(props) {
  return (
    <Menu right >
    <ul className="flex">
      <Li url="/" name="Top" />
      <Li url="/ProfilePage" name="Profile" />
      <Li url="/SkillPage" name="Skill" />
      <Li url="/HistoryPage" name="History" />
      <Li url="/ProductPage" name="Product" />
  </ul>
  </Menu>
  )
}