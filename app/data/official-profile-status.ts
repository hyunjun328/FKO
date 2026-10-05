// UFC 공식 선수 프로필에서 자동 수집한 전적과 신체 정보를 제공한다.
export type OfficialProfileStatus = { record?: string; heightCm?: number; reachCm?: number; division?: string; status?: string; knockoutWins?: number; submissionWins?: number; firstRoundFinishes?: number; checkedAt: string; sourceUrl: string };

export const OFFICIAL_PROFILE_STATUS: Record<string, OfficialProfileStatus> = {
  "Aleksandar Rakić": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 9,
    "record": "15-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/aleksandar-rakic",
    "status": "Actif"
  },
  "Alex Pereira": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 11,
    "record": "13-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/alex-pereira",
    "status": "Actif"
  },
  "Alistair Overeem": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 25,
    "record": "47-19-0",
    "sourceUrl": "https://www.ufc.com/athlete/alistair-overeem",
    "status": "Ne se bat pas"
  },
  "Amanda Lemos": {
    "checkedAt": "2026-10-05",
    "division": "Poids paille féminins Division",
    "knockoutWins": 8,
    "record": "15-7-1",
    "sourceUrl": "https://www.ufc.com/athlete/amanda-lemos",
    "status": "Actif"
  },
  "Amanda Nunes": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq féminins Division",
    "knockoutWins": 13,
    "record": "23-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/amanda-nunes",
    "status": "Actif"
  },
  "Anderson Silva": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 22,
    "record": "34-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/anderson-silva"
  },
  "Anthony Hernandez": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 3,
    "record": "15-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/anthony-hernandez",
    "status": "Actif"
  },
  "Anthony Pettis": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 11,
    "record": "24-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/anthony-pettis",
    "status": "Ne se bat pas"
  },
  "Benson Henderson": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "record": "23-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/benson-henderson",
    "status": "Ne se bat pas"
  },
  "Brock Lesnar": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "record": "6-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/brock-lesnar",
    "status": "Retraité"
  },
  "Cain Velasquez": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 12,
    "record": "14-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/cain-velasquez",
    "status": "Retraité"
  },
  "Carla Esparza": {
    "checkedAt": "2026-10-05",
    "division": "Poids paille féminins Division",
    "knockoutWins": 4,
    "record": "20-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/carla-esparza",
    "status": "Ne se bat pas"
  },
  "Carlos Condit": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 15,
    "record": "32-14-0",
    "sourceUrl": "https://www.ufc.com/athlete/carlos-condit",
    "status": "Retraité"
  },
  "Chan Sung Jung": {
    "checkedAt": "2026-10-05",
    "division": "Poids plume Division",
    "record": "17-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/chan-sung-jung",
    "status": "Actif"
  },
  "ChangHo Lee": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 6,
    "record": "11-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/chang-ho-lee",
    "status": "Actif"
  },
  "Chris Weidman": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 6,
    "record": "16-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/chris-weidman",
    "status": "Ne se bat pas"
  },
  "Chuck Liddell": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "record": "21-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/chuck-liddell",
    "status": "Ne se bat pas"
  },
  "Conor McGregor": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 19,
    "record": "22-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/conor-mcgregor",
    "status": "Actif"
  },
  "Da Woon Jung": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "knockoutWins": 11,
    "record": "15-6-1",
    "sourceUrl": "https://www.ufc.com/athlete/da-woon-jung",
    "status": "Ne se bat pas"
  },
  "Dan Henderson": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "record": "32-15-0",
    "sourceUrl": "https://www.ufc.com/athlete/dan-henderson",
    "status": "Retraité"
  },
  "Daniel Cormier": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 10,
    "record": "22-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/daniel-cormier",
    "status": "Retraité"
  },
  "Daniel Rodriguez": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 9,
    "record": "20-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/daniel-rodriguez",
    "status": "Actif"
  },
  "Demetrious Johnson": {
    "checkedAt": "2026-10-05",
    "division": "Poids mouche Division",
    "record": "27-3-1",
    "sourceUrl": "https://www.ufc.com/athlete/demetrious-johnson",
    "status": "Ne se bat pas"
  },
  "Demian Maia": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 3,
    "record": "28-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/demian-maia",
    "status": "Ne se bat pas"
  },
  "Diego Sanchez": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 10,
    "record": "32-13-0",
    "sourceUrl": "https://www.ufc.com/athlete/diego-sanchez",
    "status": "Ne se bat pas"
  },
  "Dominick Cruz": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 7,
    "record": "24-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/dominick-cruz",
    "status": "Retraité"
  },
  "Donald Cerrone": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 10,
    "record": "36-17-0",
    "sourceUrl": "https://www.ufc.com/athlete/donald-cerrone",
    "status": "Retraité"
  },
  "DongHun Choi": {
    "checkedAt": "2026-10-05",
    "division": "Poids mouche Division",
    "knockoutWins": 3,
    "record": "3-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/donghun-choi",
    "status": "Actif"
  },
  "Dooho Choi": {
    "checkedAt": "2026-10-05",
    "division": "Poids plume Division",
    "knockoutWins": 14,
    "record": "17-5-1",
    "sourceUrl": "https://www.ufc.com/athlete/dooho-choi",
    "status": "Actif"
  },
  "Dustin Poirier": {
    "checkedAt": "2026-10-05",
    "division": "Poids légers Division",
    "knockoutWins": 16,
    "record": "30-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/dustin-poirier",
    "status": "Actif"
  },
  "Duško Todorović": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 8,
    "record": "13-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/dusko-todorovic",
    "status": "Actif"
  },
  "Eddie Alvarez": {
    "checkedAt": "2026-10-05",
    "division": "Poids légers Division",
    "knockoutWins": 18,
    "record": "29-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/eddie-alvarez",
    "status": "Ne se bat pas"
  },
  "Erin Blanchfield": {
    "checkedAt": "2026-10-05",
    "division": "Poids mouche féminins Division",
    "knockoutWins": 2,
    "record": "14-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/erin-blanchfield",
    "status": "Actif"
  },
  "Fabricio Werdum": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 6,
    "record": "24-8-1",
    "sourceUrl": "https://www.ufc.com/athlete/fabricio-werdum",
    "status": "Ne se bat pas"
  },
  "Francis Ngannou": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 12,
    "record": "17-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/francis-ngannou",
    "status": "Ne se bat pas"
  },
  "Frankie Edgar": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 6,
    "record": "23-11-1",
    "sourceUrl": "https://www.ufc.com/athlete/frankie-edgar",
    "status": "Retraité"
  },
  "Georges St-Pierre": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "record": "26-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/georges-st-pierre",
    "status": "Retraité"
  },
  "Germaine de Randamie": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq féminins Division",
    "knockoutWins": 4,
    "record": "10-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/germaine-de-randamie",
    "status": "Ne se bat pas"
  },
  "Gilbert Urbina": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 3,
    "record": "8-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/gilbert-urbina",
    "status": "Actif"
  },
  "Gillian Robertson": {
    "checkedAt": "2026-10-05",
    "division": "Poids paille féminins Division",
    "knockoutWins": 3,
    "record": "17-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/gillian-robertson",
    "status": "Actif"
  },
  "Glover Teixeira": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "knockoutWins": 18,
    "record": "33-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/glover-teixeira",
    "status": "Retraité"
  },
  "Gray Maynard": {
    "checkedAt": "2026-10-05",
    "division": "Poids plume Division",
    "knockoutWins": 2,
    "record": "14-8-1",
    "sourceUrl": "https://www.ufc.com/athlete/gray-maynard",
    "status": "Ne se bat pas"
  },
  "Henry Cejudo": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 8,
    "record": "16-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/henry-cejudo",
    "status": "Ne se bat pas"
  },
  "Holly Holm": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq féminins Division",
    "knockoutWins": 8,
    "record": "15-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/holly-holm",
    "status": "Ne se bat pas"
  },
  "Hyun Gyu Lim": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "record": "13-7-1",
    "sourceUrl": "https://www.ufc.com/athlete/hyun-gyu-lim",
    "status": "Ne se bat pas"
  },
  "HyunSung Park": {
    "checkedAt": "2026-10-05",
    "division": "Poids mouche Division",
    "knockoutWins": 4,
    "record": "10-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/hyunsung-park",
    "status": "Actif"
  },
  "Ian Machado Garry": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 7,
    "record": "17-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/ian-machado-garry",
    "status": "Actif"
  },
  "Ilia Topuria": {
    "checkedAt": "2026-10-05",
    "division": "Poids légers Division",
    "knockoutWins": 7,
    "record": "17-1-0",
    "sourceUrl": "https://www.ufc.com/athlete/ilia-topuria",
    "status": "Actif"
  },
  "Islam Makhachev": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 5,
    "record": "29-1-0",
    "sourceUrl": "https://www.ufc.com/athlete/islam-makhachev",
    "status": "Actif"
  },
  "Jan Błachowicz": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "knockoutWins": 9,
    "record": "29-12-2",
    "sourceUrl": "https://www.ufc.com/athlete/jan-blachowicz",
    "status": "Actif"
  },
  "JeongYeong Lee": {
    "checkedAt": "2026-10-05",
    "division": "Poids plume Division",
    "knockoutWins": 4,
    "record": "11-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/jeongyeong-lee",
    "status": "Actif"
  },
  "Joanna Jędrzejczyk": {
    "checkedAt": "2026-10-05",
    "division": "Poids paille féminins Division",
    "knockoutWins": 4,
    "record": "16-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/joanna-jedrzejczyk",
    "status": "Retraité"
  },
  "Jon Jones": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 11,
    "record": "28-1-0",
    "sourceUrl": "https://www.ufc.com/athlete/jon-jones",
    "status": "Actif"
  },
  "JooSang Yoo": {
    "checkedAt": "2026-10-05",
    "division": "Poids plume Division",
    "knockoutWins": 4,
    "record": "9-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/joo-sang-yoo",
    "status": "Actif"
  },
  "José Aldo": {
    "checkedAt": "2026-10-05",
    "division": "Poids plume Division",
    "knockoutWins": 17,
    "record": "32-10-0",
    "sourceUrl": "https://www.ufc.com/athlete/jose-aldo",
    "status": "Retraité"
  },
  "JunYong Park": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 5,
    "record": "19-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/jun-yong-park",
    "status": "Actif"
  },
  "Justin Gaethje": {
    "checkedAt": "2026-10-05",
    "division": "Poids légers Division",
    "knockoutWins": 21,
    "record": "28-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/justin-gaethje",
    "status": "Actif"
  },
  "Khabib Nurmagomedov": {
    "checkedAt": "2026-10-05",
    "division": "Poids légers Division",
    "knockoutWins": 8,
    "record": "29-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/khabib-nurmagomedov",
    "status": "Retraité"
  },
  "Kyung Ho Kang": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 2,
    "record": "19-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/kyung-ho-kang",
    "status": "Ne se bat pas"
  },
  "Luke Rockhold": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 6,
    "record": "16-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/luke-rockhold",
    "status": "Ne se bat pas"
  },
  "Lyoto Machida": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "record": "24-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/lyoto-machida",
    "status": "Ne se bat pas"
  },
  "Mackenzie Dern": {
    "checkedAt": "2026-10-05",
    "division": "Poids paille féminins Division",
    "record": "17-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/mackenzie-dern",
    "status": "Actif"
  },
  "Marcin Tybura": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 10,
    "record": "27-12-0",
    "sourceUrl": "https://www.ufc.com/athlete/marcin-tybura",
    "status": "Actif"
  },
  "Mark Hunt": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 10,
    "record": "13-14-1",
    "sourceUrl": "https://www.ufc.com/athlete/mark-hunt",
    "status": "Ne se bat pas"
  },
  "Mateusz Gamrot": {
    "checkedAt": "2026-10-05",
    "division": "Poids légers Division",
    "knockoutWins": 8,
    "record": "26-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/mateusz-gamrot",
    "status": "Actif"
  },
  "Matt Hughes": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "record": "46-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/matt-hughes",
    "status": "Retraité"
  },
  "Matt Serra": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "record": "17-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/matt-serra",
    "status": "Retraité"
  },
  "Mauricio Rua": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "knockoutWins": 21,
    "record": "27-14-1",
    "sourceUrl": "https://www.ufc.com/athlete/mauricio-rua",
    "status": "Ne se bat pas"
  },
  "Michael Bisping": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "record": "31-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/michael-bisping",
    "status": "Retraité"
  },
  "Mirko Cro Cop": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "record": "31-11-2",
    "sourceUrl": "https://www.ufc.com/athlete/mirko-cro-cop",
    "status": "Ne se bat pas"
  },
  "Nate Diaz": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 5,
    "record": "22-13-0",
    "sourceUrl": "https://www.ufc.com/athlete/nate-diaz",
    "status": "Ne se bat pas"
  },
  "Navajo Stirling": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "knockoutWins": 7,
    "record": "11-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/navajo-stirling",
    "status": "Actif"
  },
  "Nick Diaz": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 13,
    "record": "26-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/nick-diaz",
    "status": "Actif"
  },
  "Randy Couture": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "record": "19-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/randy-couture",
    "status": "Retraité"
  },
  "Rashad Evans": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "record": "24-8-1",
    "sourceUrl": "https://www.ufc.com/athlete/rashad-evans",
    "status": "Retraité"
  },
  "Renan Barao": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 8,
    "record": "36-9-0",
    "sourceUrl": "https://www.ufc.com/athlete/renan-barao",
    "status": "Ne se bat pas"
  },
  "Rich Franklin": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "record": "29-7-0",
    "sourceUrl": "https://www.ufc.com/athlete/rich-franklin",
    "status": "Retraité"
  },
  "Robert Valentin": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 3,
    "record": "13-6-0",
    "sourceUrl": "https://www.ufc.com/athlete/robert-valentin-frey",
    "status": "Actif"
  },
  "Ronda Rousey": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq féminins Division",
    "record": "12-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/ronda-rousey",
    "status": "Retraité"
  },
  "Rory MacDonald": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "record": "18-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/rory-macdonald",
    "status": "Ne se bat pas"
  },
  "Rose Namajunas": {
    "checkedAt": "2026-10-05",
    "division": "Poids mouche féminins Division",
    "knockoutWins": 2,
    "record": "15-8-0",
    "sourceUrl": "https://www.ufc.com/athlete/rose-namajunas",
    "status": "Actif"
  },
  "Seokhyeon Ko": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 6,
    "record": "13-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/seokhyeon-ko",
    "status": "Actif"
  },
  "Song Yadong": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 10,
    "record": "24-9-1",
    "sourceUrl": "https://www.ufc.com/athlete/song-yadong",
    "status": "Actif"
  },
  "Stipe Miocic": {
    "checkedAt": "2026-10-05",
    "division": "Poids lourds Division",
    "knockoutWins": 15,
    "record": "20-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/stipe-miocic",
    "status": "Retraité"
  },
  "SuYoung You": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 3,
    "record": "16-4-0",
    "sourceUrl": "https://www.ufc.com/athlete/suyoung-yu",
    "status": "Actif"
  },
  "TJ Dillashaw": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 8,
    "record": "18-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/tj-dillashaw",
    "status": "Retraité"
  },
  "Tito Ortiz": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-lourds Division",
    "record": "0-0-0",
    "sourceUrl": "https://www.ufc.com/athlete/tito-ortiz",
    "status": "Ne se bat pas"
  },
  "Tony Ferguson": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 13,
    "record": "26-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/tony-ferguson",
    "status": "Ne se bat pas"
  },
  "Umar Nurmagomedov": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 2,
    "record": "20-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/umar-nurmagomedov",
    "status": "Actif"
  },
  "Urijah Faber": {
    "checkedAt": "2026-10-05",
    "division": "Poids coq Division",
    "knockoutWins": 10,
    "record": "35-11-0",
    "sourceUrl": "https://www.ufc.com/athlete/urijah-faber",
    "status": "Ne se bat pas"
  },
  "Uroš Medić": {
    "checkedAt": "2026-10-05",
    "division": "Poids mi-moyens Division",
    "knockoutWins": 12,
    "record": "14-3-0",
    "sourceUrl": "https://www.ufc.com/athlete/uros-medic",
    "status": "Actif"
  },
  "Yan Xiaonan": {
    "checkedAt": "2026-08-11",
    "division": "Women's Strawweight Division",
    "firstRoundFinishes": 8,
    "heightCm": 165,
    "knockoutWins": 8,
    "reachCm": 160,
    "record": "19-5-0",
    "sourceUrl": "https://www.ufc.com/athlete/xiaonan-yan",
    "status": "Active",
    "submissionWins": 1
  },
  "YiSak Lee": {
    "checkedAt": "2026-10-05",
    "division": "Poids moyens Division",
    "knockoutWins": 4,
    "record": "8-2-0",
    "sourceUrl": "https://www.ufc.com/athlete/yi-sak-lee",
    "status": "Actif"
  }
};
