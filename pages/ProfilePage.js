//　Profileページを表示するコンポーネント
//　Layout　contents={〇〇}　〇にMain用コンポーネントを代入して使用
//　Layout  change={〇〇}　　〇にHeader用コンポーネントを代入して使用
import Layout from "@/components/layoutCmp/layoutList/Layout"
import LowerMenu from "@/components/headerCmp/LowerMenu"
import Profile from "@/components/layoutCmp/mainCmp/mainList/Profile"
export default function Home() {
  return (
    <>

      <Layout contents={Profile} change={LowerMenu} />
    </>
  )
}
