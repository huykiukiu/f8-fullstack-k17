function convertNumbertoString(number) {
  let result = "";
  if (number < 0 || number > 9999) {
    console.log("Số cần chuyển đổi có giá trị từ 0 đến 9999");
    return;
  }
  console.log(`Số bạn đã nhập là: ${number}`);

  //Tách từng số:
  let donVi = number % 10;
  number = (number - donVi) / 10;
  let chuc = number % 10;
  number = (number - chuc) / 10;
  let tram = number % 10;
  number = (number - tram) / 10;
  let nghin = number % 10;

  switch (nghin) {
    case 1:
      result += "Một ngàn";
      break;
    case 2:
      result += "Hai ngàn";
      break;
    case 3:
      result += "Ba ngàn";
      break;
    case 4:
      result += "Bốn ngàn";
      break;
    case 5:
      result += "Năm ngàn";
      break;
    case 6:
      result += "Sáu ngàn";
      break;
    case 7:
      result += "Bảy ngàn";
      break;
    case 8:
      result += "Tám ngàn";
      break;
    case 9:
      result += "Chín ngàn";
      break;
  }

  switch (tram) {
    case 1:
      result ? (result += " một trăm") : (result += " Một trăm");
      break;
    case 2:
      result ? (result += " hai trăm") : (result += " Hai trăm");
      break;
    case 3:
      result ? (result += " ba trăm") : (result += " Ba trăm");
      break;
    case 4:
      result ? (result += " bốn trăm") : (result += " Bốn trăm");
      break;
    case 5:
      result ? (result += " năm trăm") : (result += " Năm trăm");
      break;
    case 6:
      result ? (result += " sáu trăm") : (result += " Sáu trăm");
      break;
    case 7:
      result ? (result += " bảy trăm") : (result += " Bảy trăm");
      break;
    case 8:
      result ? (result += " tám trăm") : (result += " Tám trăm");
      break;
    case 9:
      result ? (result += " chín trăm") : (result += " Chín trăm");
      break;

    default:
      result ? (result += " không trăm") : (result += "");
      break;
  }

  switch (chuc) {
    case 1:
      result ? (result += " một") : (result += "Mười");
      break;
    case 2:
      result ? (result += " hai") : (result += "Hai mươi");
      break;
    case 3:
      result ? (result += " ba") : (result += "Ba mươi");
      break;
    case 4:
      result ? (result += " bốn") : (result += "Bốn mươi");
      break;
    case 5:
      result ? (result += " năm") : (result += "Năm mươi");
      break;
    case 6:
      result ? (result += " sáu") : (result += "Sáu mươi");
      break;
    case 7:
      result ? (result += " bảy") : (result += "Bảy mươi");
      break;
    case 8:
      result ? (result += " tám") : (result += "Tám mươi");
      break;
    case 9:
      result ? (result += " chín") : (result += "Chín mươi");
      break;
    default:
      result ? (result += " lẻ") : (result += "");
      break;
  }

  switch (donVi) {
    case 1:
      result ? (result += " một") : (result += "Một");
      break;
    case 2:
      result ? (result += " hai") : (result += "Hai");
      break;
    case 3:
      result ? (result += " ba") : (result += "Ba");
      break;
    case 4:
      result ? (result += " bốn") : (result += "Bốn");
      break;
    case 5:
      result ? (result += " năm") : (result += "Năm");
      break;
    case 6:
      result ? (result += " sáu") : (result += "Sáu");
      break;
    case 7:
      result ? (result += " bảy") : (result += "Bảy");
      break;
    case 8:
      result ? (result += " tám") : (result += "Tám");
      break;
    case 9:
      result ? (result += " chín") : (result += "Chín");
      break;
    default:
      result ? (result += " mươi") : (result += "");
  }
  console.log(result);
}
convertNumbertoString(2003);
