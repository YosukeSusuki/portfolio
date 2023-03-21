//　Topページを表示するコンポーネント
//　Layout　contents={〇〇}　〇にMain用コンポーネントを代入して使用
//　Layout  change={〇〇}　　〇にHeader用コンポーネントを代入して使用
import Layout from "@/components/layoutCmp/layoutList/Layout"
import Menu from "@/components/headerCmp/Menu"
import Top from "@/components/layoutCmp/mainCmp/mainList/Top"
export default function Home() {
  return (
    <>
      <Layout contents={Top} change={Menu} />
    </>
  )
}
