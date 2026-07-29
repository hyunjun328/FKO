# 파이트 캘린더 코리아

UFC 대회 일정과 대진을 한국시간으로 보여주는 독립 일정 안내 웹사이트다.

## 1차 기능

- 다음 UFC 대회와 남은 시간.
- 일정 목록과 일요일부터 시작하는 월간 캘린더.
- 대회별 메인카드, 언더카드, 발표된 대진.
- 한국시간 변환과 출처·확인 시각 표시.
- 위키미디어 공개 API 기반 예정 대회 검수 수집기.

## 로컬 실행

```powershell
npm run dev
```

## 검증

```powershell
npm test
python scripts/collect_wikipedia.py
```

수집 결과는 `review/pending-events.json`에 저장되며 운영자 확인 전에는 화면 데이터에 자동 반영되지 않는다.
