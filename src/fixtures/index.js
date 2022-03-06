// export const dummyRestrooms = [
//   {
//     _id: 0,
//     id: 0,
//     direction: 'Good when front is crowded (Bathroom at the way back)',
//     name: "Scarr's Pizza",
//     image: 'https://assets3.thrillist.com/v1/image/1827368/size/tmg-venue_carousel_mobile.jpg',
//     position: {
//       lat: 45.5017,
//       lng: -73.5673
//     },
//     // like: 43,
//     // dislike: 3
//   },
//   {
//     _id: 1,
//     id: 1,
//     direction: 'Good when front is crowded (Bathroom at the way back)',
//     name: "Scarr's Pizza",
//     image: 'https://assets3.thrillist.com/v1/image/1827368/size/tmg-venue_carousel_mobile.jpg',
//     position: {
//       lat: 40.758966, lng: -73.985602 
//     },
//     // like: 17,
//     // dislike: 5
//   }
// ]

import zIndex from "@material-ui/core/styles/zIndex"

export const dummyRestrooms = [
  {
    "name": "Scarr's Pizza",
    "position": {
      "lat": "40.7153336",
      "lng": "-73.9914222"
    },
    "image": "https://assets3.thrillist.com/v1/image/1827368/size/tmg-venue_carousel_mobile.jpg",
    "direction": "Good when front is crowded (Bathroom at the way back)"
  },
  {
    "name": "Rockefeller Center",
    "position": {
      "lat": "40.759624",
      "lng": "-73.9787329999999"
    },
    "image": "https://cdn.traveltripper.io/site-assets/192_680_8009/media/2017-10-10-074304/Rockefeller-Center.jpg",
    "direction": "Downstairs"
  },
  {
    "name": "Best Buy Midtown Manhattan (44th & 5th)",
    "position": {
      "lat": "40.7543836",
      "lng": "-73.9796053"
    },
    "image": "https://img.bbystatic.com/BestBuy_US/store/ee/2017/cam/pr/sol-10928-canon/sol-10928-canon-experts2.jpg",
    "direction": "Downstairs to the right"
  },
  {
    "name": "Port Authority Bus Terminal",
    "position": {
      "lat": "40.7568916",
      "lng": "-73.9917713999999"
    },
    "image": "https://imgs.6sqft.com/wp-content/uploads/2014/10/21022719/PortAuthority.jpg",
    "direction": "One on the second floor, I'm sure there are multiple restrooms"
  },
  {
    "name": "Grand Central Terminal",
    "position": {
      "lat": "40.7527277",
      "lng": "-73.9772352999999"
    },
    "image": "https://www.kitano.com/resourcefiles/snippet-main-img/grand-central-terminal-in-new-york-top.jpg",
    "direction": "Downstairs"
  },
  {
    "name": "The Northwest Corner Building (Columbia University)",
    "position": {
      "lat": "40.8100333",
      "lng": "-73.9620101"
    },
    "image": "https://undergrad.admissions.columbia.edu/sites/default/files/styles/template-maximum/public/sb-1022edited.jpg?itok=gSq1iSbK",
    "direction": "More than one restroom"
  },
  {
    "name": "Woorijip",
    "position": {
      "lat": "40.7474009",
      "lng": "-73.9865612"
    },
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/03/30/de/e4/woorijip.jpg",
    "direction": "All the way at the back"
  },
  {
    "name": "Washington Square Park Public Restroom",
    "position": {
      "lat": "40.7307645",
      "lng": "-73.9983533"
    },
    "image": "https://si.wsj.net/public/resources/images/BN-LX017_NYSPAC_P_20151229190250.jpg",
    "direction": "address kinda inaccurate (parks have ambiguous addresses)"
  },
  {
    "name": "Staten Island Ferry / Whitehall Terminal",
    "position": {
      "lat": "40.701009",
      "lng": "-74.0130246"
    },
    "image": "https://s3-media3.fl.yelpcdn.com/bphoto/XiiqVQZpWGBE65KhxTRT5Q/o.jpg",
    "direction": "Upstairs to the left, near entrance to ferry"
  },
  {
    "name": "Chambers St Station (Line 1)",
    "position": {
      "lat": "40.71557",
      "lng": "-74.009266"
    },
    "image": "https://bpca.ny.gov/wp-content/uploads/2015/03/Subway2_crop.jpg",
    "direction": "You need to enter subway (need Metrocard)"
  },
  {
    "name": "Pier i Cafe",
    "position": {
      "lat": "40.779809",
      "lng": "-73.9889358"
    },
    "image": "https://i.pinimg.com/originals/2d/4b/22/2d4b2262905d2481ffaf12462cd78dc3.jpg",
    "direction": "Bathroom near the restaurant"
  },
  {
    "name": "Riverbank State Park",
    "position": {
      "lat": "40.8264806",
      "lng": "-73.9560005"
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Riverbank_State_Park_jeh.JPG/1200px-Riverbank_State_Park_jeh.JPG",
    "direction": "In Athletics Building / Building #13,  6 stalls (men), 6am-11pm daily"
  },
  {
    "name": "Brass Monkey",
    "position": {
      "lat": "40.740766",
      "lng": "-74.008443"
    },
    "image": "https://brassmonkeynyc.com/wp-content/uploads/2018/05/BrassMonkeyNYC3.jpg",
    "direction": "Crowded bar so you good cuh."
  },
  {
    "name": "STK Downtown",
    "position": {
      "lat": "40.7398399",
      "lng": "-74.0071747"
    },
    "image": "https://www.meatpacking-district.com/wp-content/uploads/2015/09/stk4-e1521226121121.jpg",
    "direction": "Second floor, go straight down the hall."
  },
  {
    "name": "Whole Foods Market (Bryant Park)",
    "position": {
      "lat": "40.7547674",
      "lng": "-73.9849148999999"
    },
    "image": "https://secretnyc.co/wp-content/uploads/2017/08/10917081_10152947479671488_2626977892296391220_n.jpg",
    "direction": "Second floor to the right / 5 unisex stalls + 1 family stall / 7:00am - 11:00pm Seven days a week"
  },
  {
    "name": "Starbucks",
    "position": {
      "lat": "40.7491231",
      "lng": "-73.99145"
    },
    "image": "https://s20998.pcdn.co/wp-content/uploads/2018/03/Starbucks_cup-1024x586.jpg",
    "direction": "Password is 12345"
  },
  {
    "name": "The Plaza Food Hall",
    "position": {
      "lat": "40.7647267",
      "lng": "-73.9744989"
    },
    "image": "https://www.theplazany.com/wp-content/uploads/2016/02/Dining_TPFH_Slideshow_LukesLobster_08.jpg",
    "direction": "One of the cleanest public bathrooms in NYC"
  },
  {
    "name": "Mineral Springs Restrooms",
    "position": {
      "lat": "40.7730138",
      "lng": "-73.9745212"
    },
    "image": "https://www.centralpark.com/downloads/8730/download/mineral-springs.jpg?cb=da58683d91dbb9999f6cc644dd35c8ba&w=1200",
    "direction": "right next to Le Pain Quotidien, there is no address (imagine the intersection of 69th St & 7th Avenue)"
  },
  {
    "name": "Eataly NYC Flatiron",
    "position": {
      "lat": "40.7419930999999",
      "lng": "-73.9899357"
    },
    "image": "https://pbs.twimg.com/media/CVa5ee0WoAA86JE.jpg",
    "direction": "Next to Bookstore, near checkout / Open Daily, 9 a.m.-11 p.m."
  },
  {
    "name": "Riverbank State Park (one stall, no urinals)",
    "position": {
      "lat": "40.823512",
      "lng": "-73.957668"
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Riverbank_State_Park_jeh.JPG/1200px-Riverbank_State_Park_jeh.JPG",
    "direction": "Near tennis and basketball courts; closes at 11pm"
  },
  {
    "name": "Chelsea Market",
    "position": {
      "lat": "40.7424509",
      "lng": "-74.0059581"
    },
    "image": "https://frenchdistrict.com/new-york/wp-content/uploads/sites/3/2014/03/chelsea-market-new-york-diapo-page.jpg",
    "direction": "Downstairs to the right; 9 stalls (men)"
  },
  {
    "name": "Dos Toros Taqueria (38th St & 8th Ave)",
    "position": {
      "lat": "40.7546385",
      "lng": "-73.9920504999999"
    },
    "image": "https://newyork.seriouseats.com/images/20100112-dostoros-menu.jpg",
    "direction": "private restroom; passcode 12345"
  },
  {
    "name": "Barrow Street Ale House",
    "position": {
      "lat": "40.7324814",
      "lng": "-74.0024921"
    },
    "image": "https://d37219swed47g7.cloudfront.net/media/images/guides/nycs-best-places-to-watch-sports-on-tv/barrow%20st%20ale%20house-6516.jpg",
    "direction": "Men's: stairs to the left, go downstairs; Women's: stairs to the right, go downstairs; one stall (very tight space)"
  },
  {
    "name": "Canal Street Market",
    "position": {
      "lat": "40.719008",
      "lng": "-74.000843"
    },
    "image": "https://pixel.nymag.com/imgs/listings/restaurants/canal-stret-market/canal-stret-market-01.w1200.h630.jpg",
    "direction": "Located at the very back of the food court"
  },
  {
    "name": "The Garret East",
    "position": {
      "lat": "40.729476",
      "lng": "-73.980821"
    },
    "image": "https://media.timeout.com/images/102940500/630/472/image.jpg",
    "direction": "Good when crowded"
  },
  {
    "name": "Marshalls (Chelsea)",
    "position": {
      "lat": "40.740089",
      "lng": "-73.99461"
    },
    "image": "http://www.acc-construction.com/image/project/marshalls/3.jpg",
    "direction": "(couldn't go in because they were cleaning)"
  },
  {
    "name": "Bed Bath & Beyond (Chelsea)",
    "position": {
      "lat": "40.73976",
      "lng": "-73.994377"
    },
    "image": "https://ei.marketwatch.com/Multimedia/2016/06/14/Photos/ZH/MW-EP349_bedbat_20160614193123_ZH.jpg?uuid=1b48fb9e-3288-11e6-9827-0015c588dfa6",
    "direction": "Two restrooms total"
  },
  {
    "name": "Harmon Face Values (Chelsea)",
    "position": {
      "lat": "40.742189",
      "lng": "-73.993584"
    },
    "image": "https://cdn.vox-cdn.com/thumbor/gux3VeqgkDydqJ5QeutNVXP66Tw=/28x0:472x333/1200x800/filters:focal(28x0:472x333)/cdn.vox-cdn.com/uploads/chorus_image/image/45320676/2013_08_harmon-face-values-nail-bar-chelsea.0.jpg",
    "direction": "Two private unisex restrooms"
  },
  {
    "name": "The Shops at Columbus Circle",
    "position": {
      "lat": "40.768372",
      "lng": "-73.982606"
    },
    "image": "https://media-cdn.tripadvisor.com/media/photo-s/0d/ff/e4/30/img-20161227-wa0024-largejpg.jpg",
    "direction": "Two restrooms (possibly more?)"
  },
  {
    "name": "Century 21 (Lincoln Square)",
    "position": {
      "lat": "40.77386",
      "lng": "-73.981937"
    },
    "image": "https://www.tripsavvy.com/thmb/ntO06BMnFs_4UP42G9VTuthHYlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Century-21-56a5ee325f9b58b7d0df32c9.jpg",
    "direction": "Family restroom & women's restroom on the Lower Level (don't need passcode for family restroom)"
  },
  {
    "name": "Bryant Park Public Restroom",
    "position": {
      "lat": "40.75405",
      "lng": "-73.982686"
    },
    "image": "https://static01.nyt.com/images/2017/04/07/nyregion/07bathroom1/00bathroom1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "direction": "Long line for women"
  },
  {
    "name": "Starbucks",
    "position": {
      "lat": "40.733182",
      "lng": "-74.002733"
    },
    "image": "https://s20998.pcdn.co/wp-content/uploads/2018/03/Starbucks_cup-1024x586.jpg",
    "direction": "No password"
  },
  {
    "name": "Jollibee",
    "position": {
      "lat": "40.755767",
      "lng": "-73.991165"
    },
    "image": "https://cdn.newsday.com/polopoly_fs/1.21986916.1539637080!/httpImage/image.jpg_gen/derivatives/landscape_768/image.jpg",
    "direction": "No password; most likely have to wait in line outside though"
  },
  {
    "name": "Bloomingdale's Outlet",
    "position": {
      "lat": "40.779129",
      "lng": "-73.982219"
    },
    "image": "https://cdn.vox-cdn.com/thumbor/VT9-IBg1vC5RRvdMXFnCcbZTmOI=/244x0:4019x2831/1200x800/filters:focal(244x0:4019x2831)/cdn.vox-cdn.com/uploads/chorus_image/image/47731537/151121-340.0.0.jpg",
    "direction": "Located on lower level down the stairs to the right near baby section"
  },
  {
    "name": "Trader Joe's (72nd & Broadway)",
    "position": {
      "lat": "40.778596",
      "lng": "-73.982367"
    },
    "image": "https://cdn.newsday.com/polopoly_fs/1.10626915.1436482757!/httpImage/image.jpg_gen/derivatives/landscape_768/image.jpg",
    "direction": "Located two floors down around the corner"
  },
  {
    "name": "Whole Foods Market (Columbus Circle)",
    "position": {
      "lat": "40.7685441",
      "lng": "-73.9829539999999"
    },
    "image": "https://secretnyc.co/wp-content/uploads/2017/08/10917081_10152947479671488_2626977892296391220_n.jpg",
    "direction": "Whole Foods located on the ower concourse Level. "
  }].map((restroom, idx) => {
  return {
    ...restroom,
    position: {
      lat: Number(restroom.position.lat),
      lng: Number(restroom.position.lng)
    },
    _id: idx,
    id: zIndex
  }
});
