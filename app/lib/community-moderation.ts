// 커뮤니티 글과 댓글의 광고·욕설·반복 도배를 제출 전에 걸러 낸다.
const ADVERTISEMENT_PATTERN = /https?:\/\/|www\.|bit\.ly|t\.me|telegram|텔레그램|카카오톡|오픈채팅|바카라|카지노|대출|\d{2,3}[-.\s]\d{3,4}[-.\s]\d{4}/iu;
const PROFANITY_PATTERN = /씨발|시발|ㅅㅂ|병신|ㅂㅅ|개새끼|좆|fuck|bitch|nigger/iu;
const REPEATED_PATTERN = /(.)\1{7,}/u;

export function validateCommunityContent(...parts: string[]) {
  const content = parts.join(" ").trim();
  if (ADVERTISEMENT_PATTERN.test(content)) {
    return { ok: false, message: "광고·연락처 유도 문구와 외부 링크는 작성할 수 없습니다." };
  }
  if (PROFANITY_PATTERN.test(content)) {
    return { ok: false, message: "욕설이나 혐오 표현은 작성할 수 없습니다." };
  }
  if (REPEATED_PATTERN.test(content)) {
    return { ok: false, message: "같은 글자를 반복한 도배 문구는 작성할 수 없습니다." };
  }
  return { ok: true as const };
}
