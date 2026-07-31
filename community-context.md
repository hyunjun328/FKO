# 고정닉 로그인 작업 메모

- 사용자는 이메일을 보거나 입력하지 않는다. 아이디는 내부적으로 `<아이디>@fko.local`로 변환해 Supabase Auth에 전달한다.
- 가입 즉시 세션을 받으려면 Supabase Authentication 설정에서 Confirm email을 꺼야 한다.
- 사용자 아이디는 Supabase Auth의 `user_metadata.username`에 저장하고, 게시글·댓글 RPC가 JWT의 그 값을 우선 사용한다.
- 로그인하지 않은 작성 요청은 UI와 RPC 양쪽에서 `익명 1`로 처리한다.
- 공개 키로는 SQL 실행이나 Auth 설정 변경 권한이 없으므로, 운영자가 Dashboard에서 한 번 적용해야 한다.
