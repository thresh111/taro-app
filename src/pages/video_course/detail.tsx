import { WebView } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";

export interface IAppProps {}

export default function App() {
  const route = useRouter();
  const url: any = route.params.url;
  return <WebView src={url}> </WebView>;
}
