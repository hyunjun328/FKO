# 게스트 커뮤니티 작업 메모

- 공개 가능한 Supabase 프로젝트 URL과 publishable key만 클라이언트에 넣었다.
- 원본 테이블의 `password_hash`는 읽기 권한을 주지 않고, 안전한 열만 가진 `community_post_feed` 뷰로 목록을 제공한다.
- 작성은 `create_guest_post` RPC가 bcrypt 해시를 생성한다. 서비스 역할 키나 데이터베이스 비밀번호는 사용하지 않는다.
- 이번 범위는 익명 게시글 작성과 조회다. 비밀번호를 이용한 수정·삭제와 댓글은 다음 기능으로 분리한다.
