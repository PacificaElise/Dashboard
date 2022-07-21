class ApiService {
    static send(params) {
        const {method = 'GET', data, url} = params,
        host = '...'; //здесь будет ссылка

        let encodeStr = '';

        //получаем данные с сервера
        if(method === 'POST' && data){
            let values = [];
            for(let key in data){
                values.push(`${key}=${encodeURI(data[key])}`); //кодирование русских букв
            }

            encodeStr = `?${values.join('&')}`;
        }

        let requestData;


        //отправляем данные на сервер
        if(method === 'POST'){
            requestData = JSON.stringify(data)
        }

        return fetch(`${host}${url ? `/${url}`: ''}${encodeStr}`, {
            headers: {
                'Content-type': 'json/application',
                //.....
            }
        })
    }
}

export default ApiService;