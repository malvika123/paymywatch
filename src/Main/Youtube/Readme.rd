End points for currency exchange:

1. Live: // "live" endpoint - request the most recent exchange rate data

http://api.currencylayer.com/live

    ? access_key = YOUR_ACCESS_KEY
    & source = GBP
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1

// Malvika, click on the URL above to get the most recent exchange
// rates for USD, AUD, CAD, PLN and MXN

2. Historical: // "historical" endpoint - request historical rates for a specific day

http://api.currencylayer.com/historical

    ? access_key = YOUR_ACCESS_KEY
    & date = YYYY-MM-DD
    & source = EUR
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1

// Malvika, click on the URL above to request historical data from
// 2010-12-07 for the currencies USD, AUD, CAD, PLN and MXN

3. Convert: // "convert" endpoint - convert any amount from one currency to another
// using real-time exchange rates

http://api.currencylayer.com/convert

    ? access_key = YOUR_ACCESS_KEY
    & from = USD
    & to = EUR
    & amount = 25
    & format = 1
    
  
// append an additional "date" parameter if you want to use
// historical rates for your conversion

    & date = YYYY-MM-DD

// Malvika, your current subscription does not support this API function.

4. TimeFrame :
// "timeframe" endpoint - request exchange rates for a specific period of time

http://api.currencylayer.com/timeframe

    ? access_key = YOUR_ACCESS_KEY
    & start_date = YYYY-MM-DD
    & end_date = YYYY-MM-DD
    & source = EUR
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1

// Malvika, your current subscription does not support this API function.

5. Change : // "change" endpoint - request any currency's change parameters (margin
// and percentage), optionally between two specified dates

http://api.currencylayer.com/change

    ? access_key = YOUR_ACCESS_KEY
    & source = GBP
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1
    
    
// append additional "start_date" and "end_date" parameters if you want to
// request "change" values for a specific timeframe

    & start_date = YYYY-MM-DD
    & end_date = YYYY-MM-DD

// Malvika, your current subscription does not support this API function.
 

 Step 1: Your API Access Key

This is your Access Key, your personal password for the currencylayer API.
Keep it safe! You can reset it at any time in your Account Dashboard.

a5b00250dfe7b8fbe44bc95e21e01d32
Step 2: API Endpoints

There are 5 main API Endpoints (listed below) through which you can access different kinds of data, all starting out with this Base URL:

http://api.currencylayer.com/

Simply attach your unique Access Key to one of the endpoints as a query parameter:

http://api.currencylayer.com/live?access_key=a5b00250dfe7b8fbe44bc95e21e01d32



documentation:
https://currencylayer.com/documentation