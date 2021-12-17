export const convertToRupees = async (dollars) => {
  const response = await fetch(
    `http://api.currencylayer.com/live?access_key=a5b00250dfe7b8fbe44bc95e21e01d32`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const items = data;
      return items;
    });
  //return response;
  const rupeesCurrentValue = response.quotes.USDINR;
  const RupeesValue = rupeesCurrentValue * dollars;
  return RupeesValue.toString();
};

const accessKey = "a5b00250dfe7b8fbe44bc95e21e01d32";
const baseUrl = "http://api.currencylayer.com/";

//email: malvikasen555@gmail.com
//password : currency

//eg: http://api.currencylayer.com/live?access_key=a5b00250dfe7b8fbe44bc95e21e01d32

export const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
};
