//app.js
App({
  onLaunch: function (options) {
    // Do something initial when launch.
    wx.setTabBarStyle({
      color: '#dbdbdb',
      selectedColor: '#d81e06',
      borderStyle: 'white'
    })
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  onPageNotFound: function (options) {

  },
  globalData: {
    userInfo: null,
    products: [
      {
        brand_id: 0,
        brand_name: '圣兹',
        brand_name_en: 'SANSE',
        logo: "https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/sanse_logo.png",
        series:[
          {
            series_id: 0,
            series_name: '沙拉酱系列',
            series_name_en: 'SALAD DRESSING',
            items: [
              {
                item_id: 0,
                item_name: '蛋黄酱',
                item_name_en: 'MATYONNAISE',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/display.jpg',
                detail: {
                  name: '蛋黄酱 MAYONNAISE',
                  series: '沙拉酱系列',
                  brand: '圣兹',
                  display_images: [
                    'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/display_00.jpg',
                    'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/display_01.jpg'
                  ],
                  detail_images: [
                    'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/detail_00.jpg',
                    'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/detail_01.jpg',
                    'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/detail_02.jpg',
                    'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/SANSE/MAYONNAISE/detail_03.jpg'
                  ],
                  product_parameters: {
                    net_content: '1000克/袋',
                    expiration_date: '9个月(270天)',
                    size: '1KG/袋*12袋/箱',
                    store: '常温避光保存，开封后使用后需密封冷藏保存。',
                    use: '圣兹蛋黄酱广泛应用于各式蔬菜水果沙拉，调理面包、汉堡热狗、披萨寿司等产品，使用简单方便，颜色自然亮泽、淡淡清香、浓稠适中、酸甜适宜······',
                    usage: '开袋即可食用，可用作面包、馒头、油炸食品、蘸食。',
                    raw_material: '水、大豆油、白砂糖、鸡蛋、食用盐、香辛料······',
                    taste: '芳香味浓、甜味适中、细滑味鲜、搭配灵活······',
                    feature: '润滑的口感中，带着一点恰到好处的鲜浓美味······'
                  },
                  nutrient_content: {
                    energy: [
                      '2592千焦(kJ)',
                      '31%'
                    ],
                    protein: [
                      '1.0克(g)',
                      '2%'
                    ],
                    fat: [
                      '66.0克(g)',
                      '110%'
                    ],
                    carbohydrate: [
                      '8.0克(g)',
                      '3%'
                    ],
                    sodium: [
                      '741毫克(mg)',
                      '37%'
                    ]
                  }
                }
              },
              {
                item_id: 1,
                item_name: '沙拉酱(烘焙型)',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 2,
                item_name: '沙拉酱(汉堡型)',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 3,
                item_name: '沙拉酱(香甜型)',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 4,
                item_name: '沙拉酱(美味型)',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              }
            ]
          },
          {
            series_id: 1,
            series_name: '番茄酱系列',
            series_name_en: 'TOMATO SAUCE',
            items: [
              {
                item_id: 0,
                item_name: '辣椒沙司',
                item_name_en: 'CHILLI SAUCE',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 1,
                item_name: '番茄沙司',
                item_name_en: 'TOMATO KETCHUP',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              }
            ]
          },
          {
            series_id: 2,
            series_name: '风味酱系列',
            items: [
              {
                item_id: 0,
                item_name: '披萨酱',
                item_name_en: 'PIZZA SAUCE',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 1,
                item_name: '甜辣酱',
                item_name_en: 'HOT KETCHUP',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              }
            ]
          },
          {
            series_id: 3,
            series_name: '果酱系列',
            items: [
              {
                item_id: 0,
                item_name: '菠萝鲜果馅',
                item_name_en: '',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 1,
                item_name: '草莓鲜果馅',
                item_name_en: '',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 1,
                item_name: '蓝莓鲜果馅',
                item_name_en: '',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              }
            ]
          }
        ]
      },
      {
        brand_id: 1,
        brand_name: '罗曼可',
        logo: "https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/romanco_logo.png",
        series: [
          {
            series_id: 0,
            series_name: '沙拉酱系列',
            series_name_en: 'SALAD DRESSING',
            items: [
              {
                item_id: 0,
                item_name: '美味沙拉酱',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 1,
                item_name: '香甜沙拉酱',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 2,
                item_name: '烘焙沙拉酱',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 3,
                item_name: '沙拉酱(香甜型)',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 4,
                item_name: '沙拉酱(美味型)',
                item_name_en: 'SALAD DRESSING',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              }
            ]
          }
        ]
      },
      {
        brand_id: 2,
        brand_name: '金点',
        logo: "https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/product/jindian_logo.png",
        series: [
          {
            series_id: 0,
            series_name: '金点果膏系列',
            series_name_en: 'FRUIT PASTE SERIES',
            items: [
              {
                item_id: 0,
                item_name: '哈密瓜味',
                item_name_en: 'BAKERY GLAZE (HAMIMELON)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 1,
                item_name: '柠檬味',
                item_name_en: 'BAKERY GLAZE (LEMON)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 2,
                item_name: '草莓味',
                item_name_en: 'BAKERY GLAZE (STRAWBERRY)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 3,
                item_name: '蓝莓味(天蓝色)',
                item_name_en: 'BAKERY GLAZE (BLUEBERRY)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 4,
                item_name: '香蕉味',
                item_name_en: 'BAKERY GLAZE (BANANA)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 5,
                item_name: '巧克力味',
                item_name_en: 'BAKERY GLAZE (CHOCOLATE)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 3,
                item_name: '蓝莓味(紫色)',
                item_name_en: 'BAKERY GLAZE (BLUEBERRY)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 7,
                item_name: '芒果味',
                item_name_en: 'BAKERY GLAZE (MANGO)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 8,
                item_name: '香橙味',
                item_name_en: 'BAKERY GLAZE (ORANGE)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              },
              {
                item_id: 9,
                item_name: '原味',
                item_name_en: 'BAKERY GLAZE (NEUTER)',
                display_image: 'https://linway-1256311343.cos.ap-guangzhou.myqcloud.com/linway.png',
              }
            ]
          }
          ]
      }
    ]
  }
})