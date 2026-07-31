# 고정닉 로그인 작업 메모

- 사용자는 이메일을 보거나 입력하지 않는다. 아이디는 내부적으로 `<아이디>@fko.local`로 변환해 Supabase Auth에 전달한다.
- 가입 즉시 세션을 받으려면 Supabase Authentication 설정에서 Confirm email을 꺼야 한다.
- 사용자 아이디는 Supabase Auth의 `user_metadata.username`에 저장하고, 게시글·댓글 RPC가 JWT의 그 값을 우선 사용한다.
- 로그인하지 않은 작성 요청은 UI와 RPC 양쪽에서 `익명 1`로 처리한다.
- 공개 키로는 SQL 실행이나 Auth 설정 변경 권한이 없으므로, 운영자가 Dashboard에서 한 번 적용해야 한다.

## 2026-07-31 닉네임 수정

- 닉네임 변경은 로그인 세션의 Access Token으로 Supabase Auth의 `/auth/v1/user`에 사용자 메타데이터를 갱신한다.
- 응답의 사용자 정보를 로컬 세션에도 저장해 상단 메뉴와 이후 글·댓글 작성에 즉시 같은 닉네임을 사용한다.
- 새 로그인 세션에는 갱신 토큰도 보관하고, 닉네임 변경 직후 Access Token을 갱신한다. 기존 세션에 갱신 토큰이 없으면 한 번 다시 로그인해야 서버 JWT에도 새 이름이 반영된다.
