//　Topページ用のコンポーネント
//　スクロールライブラリを使用
import {Link as Scroll} from "react-scroll"
import { slide as Menu } from "react-burger-menu";
export default function HeaderItem(props) {
  return (
    <Menu right >
      <ul className="flex">
        <li ><Scroll to="topPage" smooth={true} duration={600} offset={-30}>Top</Scroll></li>
        <li><Scroll to="topProfile" smooth={true} duration={600} offset={-30}>Profile</Scroll></li>
        <li><Scroll to="topSkill" smooth={true} duration={600} offset={-30}>Skill</Scroll></li>
        <li><Scroll to="topHistory" smooth={true} duration={600} offset={-30}>History</Scroll></li>
        <li><Scroll to="topProduct" smooth={true} duration={600} offset={-30}>Product</Scroll></li>
      </ul>
    </Menu>
  )
}