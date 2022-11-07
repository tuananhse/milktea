import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import dayjs from 'dayjs';
import {Dimensions, Image, PixelRatio} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {SERVER_URL} from '../src/constants';
export const TIME = 'HH:mm';
export const TIME_SECOND = 'HH:mm:ss';
export const MONTH_YEAR_DATE = 'MMM YYYY';
export const LONG_DATE = 'DD MMMM YYYY';
export const LONG_DATE_TIME = 'DD MMMM YYYY • HH:mm';
export const TIME_DATE_LONG = 'HH:mm DD MMMM YYYY';
export const YEAR = 'YYYY';
export const YEAR_MONTH_DATE = 'YYYY-MM-DD';
export const LONG_DATE_SLASH = 'DD/MM/YYYY';
const STANDARD_SIZE = {
  width: 375,
};

const widthPercentageToDP = widthPercent => {
  let screenWidth = Dimensions.get('window').width;
  let elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  let screenHeight = Dimensions.get('window').height;
  let elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const getFontSize = size => {
  return (
    (parseInt(size) * Dimensions.get('window').width) / STANDARD_SIZE.width
  );
};

export const validatePhone = phone => {
  return /((09|03|07|08|05)+([0-9]{8})\b)/g.test(phone);
};

function whatDecimalSeparator(value) {
  var n = value;
  if (value) {
    n = value.toLocaleString().substring(0, 4);
  }
  return n;
}

const replaceCharacter = value => {
  let stringReplace;
  if (value) {
    stringReplace = value
      .replace(/&nbsp;/g, ' ')
      .replace('&amp;', '&')
      .replace('&gt;', '>');
  }
  return stringReplace ? stringReplace : '';
};

const chunkArray = (arr, n) => {
  if (arr?.length < 1) {
    return [];
  }
  const result = arr?.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / n);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return result;
};

const validateForm = text => {
  if (text.length < 1) {
    return false;
  }
  return;
};

const checkImageUrl = value => {
  if (value && value.includes(SERVER_URL)) {
    return value;
  }
  return SERVER_URL + value;
};
const getIsSignInStatus = async () => {
  await AsyncStorage.getItem('token').then(result => {
    if (result) {
      return true;
    }
    return false;
  });
};
export const getDeviceId = () => {
  let uniqueId = DeviceInfo.getUniqueId();
  return uniqueId ? uniqueId : '';
};

export const getUntil = dateTime => {
  var today = new Date();

  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var Hours = today.getHours();
  var Minus = today.getMinutes();
  var Second = today.getSeconds();

  today = yyyy + '-' + mm + '-' + dd + ' ' + Hours + ':' + Minus + ':' + Second;

  let getUnitInput = getUnitWithDate(dateTime);
  let getUnitCurrent = getUnitWithDate(today);
  return getUnitInput - getUnitCurrent;
};

const getUnitWithDate = dateTime => {
  if (dateTime) {
    let timeInput = dateTime.split(' ')[1];
    let hh = timeInput.split(':')[0];
    let mm = timeInput.split(':')[1];
    let ss = timeInput.split(':')[2];
    let sum = parseInt(hh) * 60 * 60 + parseInt(mm) * 60 + parseInt(ss);
    return sum ? sum : 0;
  }
  return 0;
};

export const keyExtractor = (item, index) => {
  return index?.toString();
};

export const isEmpty = obj => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const checkConnectivity = () => {
  return NetInfo.fetch().then(state => {
    return state.isConnected;
  });
};

export const capitalizeFirstLetter = str => {
  if (!str) return;
  return str[0].toUpperCase() + str.slice(1);
};

export const checkImage = url => {
  if (!url) return false;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.send();
  request.onload = function () {
    if (request.status == 200) {
      return true;
    } else {
      return false;
    }
  };
};

export const getQueryParams = (obj, prefix) => {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p,
        v = obj[p];
      str.push(
        v !== null && typeof v === 'object'
          ? serialize(v, k)
          : encodeURIComponent(k) + '=' + encodeURIComponent(v),
      );
    }
  }
  return str.join('&');
};

export const formatDate = (value, format = LONG_DATE) => {
  dayjs.locale('vi');
  if (!value) {
    return null;
  }
  let dateValue;
  if (dayjs(value).isValid()) {
    dateValue = value;
  } else {
    dateValue = new Date(value);
    if (isNaN(dateValue)) {
      return null;
    }
  }
  return dayjs(dateValue).format(format);
};

export const articleHtml = ({body}) => {
  return `
    <body >
    <meta
    name="viewport"
     content="width=device-width, initial-scale=1.0"
/>
    <style>
     img { display: block; max-width: ${'100%'}; height: auto;}
  
       </style>
        ${body}
    </body>
  `;
};

export const getDeviceHeightIOS = () => {
  const windowHeight = Dimensions.get('window').height;
  return windowHeight >= 812 ? true : false;
};

export const checkImageInvalid = url => {
  var image = new Image();
  image.onload = function () {
    if (this.width > 0) {
      console.log('image exists');
    }
  };
  image.onerror = function () {
    console.log("image doesn't exist");
  };
  image.src = url;
};

export const renderTwoCharacter = text => {
  let newText = '';

  if (!text) {
    return '';
  }

  text.split(' ').map((item, index) => {
    if (index % 2 == 1) {
      return (newText = newText + item + `\n`);
    }

    return (newText = newText + item + ' ');
  });
  return newText;
};

export default {
  winSize: Dimensions.get('window'),
  // SCALE SIZE
  w_scale: widthPercentageToDP,
  h_scale: heightPercentageToDP,
  checkImageUrl: checkImageUrl,
  getUntil: getUntil,
  replaceCharacter: replaceCharacter,
  //VALIDATION
  validatePhone: validatePhone,
  validateForm: validateForm,
  whatDecimalSeparator: whatDecimalSeparator,
  getIsSignInStatus: getIsSignInStatus,
  chunkArray: chunkArray,
  checkConnectivity: checkConnectivity,
};
