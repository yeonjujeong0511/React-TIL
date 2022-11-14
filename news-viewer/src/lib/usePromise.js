import { useState, useEffect } from "react";

export default function usePromise(promiseCreator, deps) {
  // 대기중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(true);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return [loading, resolved, error];
}

// 프로젝트의 다양한 곳에서 사용 될 수 있는 유틸 함수들을 보통 이렇게
// src 디렉터리에 lib 디렉터리르 만든 후 그 안에 작성한다.

// promise의 대기중, 완료결과, 실패결과에 대한 상태를 관리한다
// usePromise의 의존 배열 deps를 파라미터로 받아 온다
// 파라미터로 받아 온 deps 배열은 usePromise 내부에서 사용한 useEffect의 의존배열로 설정

// 이 배열을 설정하는 부분에서 ESLint경고가 나타나게 된다.

// 이 경고를 무시하려면 특정 줄에서만 ESLint 규칙을 무시할 수 있도록 주석을 작성해주어야 한다

// 에디터에 초록색 경고 줄이 그어졌을 때 그 위에 커서를 올리면 빠른 수정..이라는
// 문구가 나타나는데, 이를 클릭하면 자동으로 ESLint규칙을 비활성화 시켜주는 주석을 입력할 수 있다.
