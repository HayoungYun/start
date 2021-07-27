/*
'skipper',0
'kowalski',1
'rico',2
'private',3
*/

const qnaList = [
  {
    q: '1. 출동 임무가 떨어졌다! 어떤 것을 탈까?',
    a: [
      { answer: 'a. 번쩍번쩍 스포츠카', type: ['0'] },
      { answer: 'b. 직접 개발한 로켓', type: ['1'] },
      { answer: 'c. 코끼리', type: ['2', '3' ] },
    ]
  },
  {
    q: '2. 가장 좋아하는 생선은? ',
    a: [
      { answer: 'a. 고등어', type: ['0'] },
      { answer: 'b. 참다랑어', type: ['2'] },
      { answer: 'c. 꽁치.', type: ['1', '3'] },
    ]
  },
  {
    q: '3. 누군가 기지에 침입했다! 어떻게 처리할까?',
    a: [
      { answer: 'a. 즉시 침입자 경보를 발동시킨다', type: ['0', '1'] },
      { answer: 'b. 이웃일 수도 있으니 일단 인사한다', type: ['3'] },
      { answer: 'c. 정체가 탄로날 수 있으니 기지를 폭파한다.', type: ['2'] }
    ]
  },
  {
    q: '4. 선물을 받게된다면?',
    a: [
      { answer: 'a. 신분을 변경할 수 있는 변장용품 ', type: ['0'] },
      { answer: 'b. 말하는 기능이 탑재된 장난감 ', type: ['3', '2'] },
      { answer: 'c. 최신식 개발도구 ', type: ['1'] },
    ]
  },
  {
    q: '5. TV를 틀었더니 좋아하는 채널이 나왔다.',
    a: [
      { answer: 'a. 호신술을 알려주는 닌자무비', type: ['1', '2'] },
      { answer: 'b. 꿈과 희망이 가득한 만화영화', type: ['3']},
      { answer: 'c. 9시 뉴스', type: ['0'] },
    ]
  },

  {
    q: '6. 다가온 크리스마스 축제! 어떤 역할을 맡을까?',
    a: [
      { answer: 'a. 산타 옷을 입고 아이들에게 선물을 나눠줄래', type: ['3'] },
      { answer: 'b. 노래와 춤으로 크리스마스 분위기를 띄울래', type: ['0', '2'] },
      { answer: 'c. 맛있는 간식들을 준비할게', type: ['1']},
    ]
  },
  {
    q: '7. 신입 요원을 뽑을 때의 기준은?',
    a: [
      { answer: 'a. 똑똑한 두뇌', type: ['1'] },
      { answer: 'b. 순발력', type: ['0', '2']},
      { answer: 'c. "공감능력', type: ['3',] },
    ]
  },
  {
    q: '8. 오랜 앙숙이 나타났다! 어떻게 할까?',
    a: [
      { answer: 'a. 정정당당하게 1 대 1 승부를 본다', type: ['0', '1'] },
      { answer: 'b. 없는 척 하고 슬쩍 피한다.', type: ['3'] },
      { answer: 'c. 무기를 사용한다', type: ['2'] },
    ]
  },
  {
    q: '9. 예방접종의 날! 당신의 반응은? ',
    a: [
      { answer: 'a. 주사 싫어! 도망간다.', type: ['0' ] },
      { answer: 'b. 매도 먼저 맞는 게 낫다, 첫 번째로 맞는다.', type: ['1', '2'] },
      { answer: 'c. 처음은 무섭고.. 두 번째나 세 번째로 맞을래', type: ['3'] },
    ]
  },
  {
    q: '10. 단종 된 초콜릿을 구했다, 보관 방법은? ',
    a: [
      { answer: 'a. 바로 입 속으로 직행한다', type: ['0', '2'] },
      { answer: 'b. 창고에 아껴둔다', type: ['1'] },
      { answer: 'c. 이웃들과 나눠먹는다', type: ['3'] },
    ]
  },
  {
    q: '11. 나에게 장난을 치는 친구에게 어떻게 반응할까? ',
    a: [
      { answer: 'a. 정색하며 하지 말라고 한다.', type: ['0', '3'] },
      { answer: 'b. 똑같이 되갚아준다.', type: ['1'] },
      { answer: 'c. 같이 장난을 즐긴다.', type: ['2'] },
    ]
  },
  {
    q: '12. 꿈을 꾸고 있다. 무슨 꿈일까?',
    a: [
      { answer: 'a. 유니콘이 춤추는 환상적인 꿈', type: ['3'] },
      { answer: 'b. 다이너마이트 터뜨리는 꿈', type: ['2'] },
      { answer: 'c. 적과 싸우는 꿈', type: ['0', '1'] },
    ]
  }
]

const infoList = [
  {
    name: '리더 <스키퍼>',
    desc: '카리스마 '
  },
  {
    name: '과학자 <코왈스키>',
    desc: '브레인 담당 '
  },
  {
    name: '폭파 전문 <리코>',
    desc: '무기 보관소'
  },
  {
    name: '따뜻한 마음씨 <프라이빗>',
    desc: '귀여운 막내'
  }]