import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // 프로젝트가 호스팅되는 GitHub Pages의 저장소 이름으로 경로를 설정합니다.
    // 예를 들어, 저장소 이름이 'my-project'라면 다음과 같이 설정합니다.
    base: "/snu/",
    outDir: 'docs',
  },
});