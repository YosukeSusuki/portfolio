import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Link from 'next/link'


//Head & body 要素の作成コンポーネント
//Header Main Footer コンポーネントを管理　
//props.〇〇にはpagesの各コンテンツから値を指定
export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="description" content="ReactとNext.jsを使用して実装されたポートフォリオサイトです。" />
        <title>Susuki Yosuke_Portfolio</title>
      </Head>
      <div id='wrapper'>
          <Header change={props.change} />
          <Main contents={props.contents} />
          <Footer />
      </div>
    </div>
  )
}