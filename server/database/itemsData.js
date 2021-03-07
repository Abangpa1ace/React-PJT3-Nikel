let itemsData = [];

const randomer = (src) => {
  if (typeof(src) === 'object') {
    return src[Math.floor(Math.random() * src.length)]
  }
  else {
    return Math.floor(Math.random() * src) + 1;
  }
}

const imageArr = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0pYouXNFBCF_p_pdvDClhNQFffyakJKBKKg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Y0oVqzYRA2vzQK4Mj6LeK7MidJWQ-aAmVh4AkcEinM5396sXCIx73dCFIYtKzNe5AYdODdfs&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ymDkbGl6SH19TWVTKWxWjy5Ywbwc0pWYY17ztFRgDs4zr13gdYk6aqhBlMne9tGSVXvj9fIW&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kzXGVgIv32_9NUqHFwLDon4s0okB8LVUX2XcKap0FTQ20INCrQkuN2o337BkmKoHLvtrTXzg&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70DAJQnvZ8ItTaTXvZm-2nGIFlgzLyf1Low&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QnhhjVTx78fA0PWdVUJxq6762XugPHy5Hw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBN6pRlyaW0ONLm6bch_vFUaQVy_kSzuieAA&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXcs30RG-HUGnzkMon71GohB68A6hoFp2nkHEWzqiZqRws40iEIiwF_EKhOKA_-0Qca4Oql0&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZom_u_vs1y6oX2-N1YLfOuT7NVy67lO4zg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdy7mlIJmAZont9upD2oNYDS00RqU5APVGiuFyEWeFY0ZhOM3xQmmBTeP6ZPBYO3Lraefk03ff&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-N8C_bEgp875fl4kCQo8t73qif1YzwkD1nu6Z6WgTqTCtQHeGx-CG-_ARyoNau13ngwPdMtx&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabqzYFtr5TZTKeYwaOp8CwM_XSKzX3FqTI8iAmUzY9LpLKdrfyVIFGnzx2OFhiAn4u0DeJ8tl&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRteU998hZC-8Qz6Nym80k47jwTIXXmUbm7eHV7vKzhfbnRwpmt4LmnQLR6ytcTNDo33A3DQ&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhQmXdibA6WoxUbTG4gxyAOsLf4qNCeTxnpJuxNp5GRfzKsIuKZoB5mYQPlrFW26DS2-7K8onvw&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZa0OHewV7CnlMZg9sE5JWpPKWaMfP_0DbzN-wo57KgdKgm6mtWEOPrd8ukRvGOncWEl4nWwtl&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqL_1e9WRIpUu4xmzC9S8IThpL8B2UYv4BVxg3eMlQ6_x90hj7cJ2_SiBtMIVs1ZPRNqd54fwoBg&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvUf5pUfaRCPRxehoJJ_3GfRBgivSGuLug1oe6EFbArkRG77HOWXRA7kkWBKz_BHqmhxDdneXM&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqbUvExQ4JjkpVz7b_F4_OONLlX27ea2Msw&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeDkmCC83isWk_9ji16wTD2WuUODM1nUJMg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTlngKAliGUbhsAO1x3WIUGj0wPW8bWXiFQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKk8jBQ10P2ht2jWO2hDfBhAwLxw-n6FAVlj4EihQgbvQeW2wfGfrfZXo0NtaL_uhqQ0D-1w&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqQauXjtXhgJBI78cgwnpsn4iyZ4X1OJFT_B4yWSj3aJvjobau6AKjLw8av6JxTln-qO44Bsw&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZR1Im4cAzJMCZuS36VOUbqzas85193wFmpgZSbmIYjad4S4pdtNh1EpOiQ4owUACWmsZBX5xV&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9hJ4vGICxdLyUFvLenjLtwtlb3MWxjFzeua0LzHjhH3Jv-JPUKq3EIZse8C3LvVzhqmK4j8t&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbhvm-7jA_hJAfVXWey6BWKvpB-ehdxjM5pYeNzF8G_tn5eAsz47ZSckHtRupKH4fTy79Me1g&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0LJqt5_ZKiXq1cqhnxsdT9hHbVN89nGJaRqhb76CLjhe7h5PapfSvyp_pbl4j5ceShd06mU&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5nI3CJ8LzX2quO8lWQxSgB2FNJdmYBot7IATmFFB--qr89Qx-br7cy0Jo4YW55wM_TB_SWM&usqp=CAc',
]

const nameArr = [
  '나이켈 에어맥스 테일 윈드 5SP',
  '나이켈 에어 베이퍼 1402',
  '나이켈 트레이닝 수트 상의',
  '나이켈 트레이닝 수트 하의',
  '나이켈 페가수스 트레일5',
  '나이켈 SB 줌 블레이저',
  '나이켈 에어맥스 테일윈드 7',
  '나이켈 코스믹 유니티',
  '나이켈 헤어밴드 리미티드',
  '나이켈 줌 프릭 르브론F',
  '나이켈 트릴비온 유니온',
  '나이켈 스포티 레깅스 블랙',
  '나이켈 에어 줌 테라 카이거9',
  '나이켈 에어맥스 블로퍼 S',
  '나이켈 트레이닝 팬츠 볼로바',
]

const categoryArr = {
  primary: [['male', '남성']],
  secondary: [['shoes', '신발'], ['clothes', '의류']],
  tertiary: [['lifestyle', '라이프스타일'], ['running', '러닝'], ['training', '트레이닝 & 짐']],
}

const categoryObj = () => {
  let obj = {};
  for (let key in categoryArr) {
    let nowCat = randomer(categoryArr[key]);
    obj[key] = {
      code: nowCat[0],
      title: nowCat[1],
    };
  }
  return obj;
}

const sizeObj = () => {
  let obj = {};
  for (let i = 230 ; i <= 290 ; i += 5) {
    obj[i] = randomer(15) - 1;
  }
  return obj;
}

const colorArr = [
  ['beige', '베이지'],
  ['black', '검정색'],
  ['blue', '파란색'],
  ['brown', '갈색'],
  ['gold', '금색'],
  ['gray', '회색'],
  ['green', '녹색'],
  ['navy', '남색'],
  ['pink', '분홍색'],
  ['purple', '보라색'],
  ['red', '빨간색'],
  ['white', '흰색'],
  ['yellow', '노란색'],
]

const colorObj = () => {
  let obj = {
    code: '',
    title: '',
    otherColors: [],
  };
  let count = randomer(5);
  for (let i = 0 ; i < count ; i++) {
    const nowColor = randomer(colorArr)
    if (i = 0) {
      obj.code = nowColor[0]
      obj.title = nowColor[1]
    }
    else {
      obj.otherColors[i-1] = {
        id: 10000000 + randomer(1000),
        code: nowColor[0],
        title: nowColor[1]
      }
    }
  }
  return obj;
}


for (let i = 0 ; i < 150 ; i++) {
  const itemObj =   {
    id: 10000000 + randomer(1000),
    images: [
      randomer(imageArr),
      randomer(imageArr),
      randomer(imageArr),
      randomer(imageArr),
      randomer(imageArr),
      randomer(imageArr),
      randomer(imageArr),
    ],
    name: randomer(nameArr),
    category: categoryObj(),
    sizes: sizeObj(),
    // colors: colorObj(),
    colors: {
      code: 'white',
      title: '흰색',
      otherColors: [
        {
          id: 10001010,
          image: '/Images/default2.jpeg',
          code: 'red',
        },
        {
          id: 10001011,
          image: '/Images/default.jpg',
          code: 'gold',
        },
        {
          id: 10001012,
          image: '/Images/default2.jpeg',
          code: 'navy',
        },
      ]
    },
    price: 89000 + (randomer(15) * 10000),
    date: {
      launched: 1610200000000 + randomer(7200000000),
      updated: 1614200000000 + randomer(7200000000),
    },
  };
  
  itemsData.push(itemObj)
}

module.exports = itemsData;



// let restsData = [];
// let itemsData = [
//   {
//     id: 10001010,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'running',
//         title: '러닝',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default2.jpeg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default2.jpeg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 129000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001001,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 0,
//       235: 0,
//       240: 0,
//       245: 0,
//       250: 0,
//       255: 0,
//       260: 0,
//       265: 0,
//       270: 0,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001002,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001003,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'running',
//         title: '러닝',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001004,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001005,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001006,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001009,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001020,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
//   {
//     id: 10001024,
//     images: [
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//       '/Images/default.jpg',
//     ],
//     name: '나이키 에어맥스 테일 윈드 5SP',
//     category: {
//       primary: {
//         code: 'male',
//         title: '남성',
//       },
//       secondary: {
//         code: 'shoes',
//         title: '신발',
//       },
//       tertiary: {
//         code: 'lifestyle',
//         title: '라이프스타일',
//       }
//     },
//     sizes: {
//       230: 10,
//       235: 10,
//       240: 10,
//       245: 10,
//       250: 0,
//       255: 10,
//       260: 10,
//       265: 0,
//       270: 10,
//       275: 0,
//       280: 0,
//     },
//     colors: {
//       code: 'white',
//       title: '흰색',
//       otherColors: [
//         {
//           id: 10001010,
//           image: '/Images/default.jpg',
//           code: 'red',
//         },
//         {
//           id: 10001011,
//           image: '/Images/default.jpg',
//           code: 'gold',
//         },
//         {
//           id: 10001012,
//           image: '/Images/default.jpg',
//           code: 'navy',
//         },
//       ]
//     },
//     price: 209000,
//     date: {
//       launched: 1615200000000,
//       updated: 1617200000000,
//     },
//   },
// ]
