
export const getTime = (param) => {

    if (param) {

        let sunset1 = {
            sys: {...param.sys}
        };
        let date = new Date();
        date.setTime(sunset1.sys.sunset);
        let sunsetDate = date.getHours() + ':' + date.getMinutes();
        date.setTime(sunset1.sys.sunrise);
        let sunsetDate1 = date.getHours() + ':' + date.getMinutes();
        
        let dates = {
            sunset: sunsetDate,
            sunrise: sunsetDate1
        }

        return dates;

    }
}

export const getTemp = (param) => {
    
    if (param) {
        
        let tempK = 273;
        let temperature = {
            main: {...param.main, tempK: tempK}
        };
        return temperature;
    }
}