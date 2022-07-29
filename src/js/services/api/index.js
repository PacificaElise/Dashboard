import EventActions from '../actions'
class ApiService {
    static async send(params) {
        const {method = 'GET', data, url} = params,
        host = 'dashboard.ri-nelly.ru/api';

        let encodeStr = '';

        //получаем данные с сервера
        if(method !== 'POST' && data){
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


        const response = await fetch(`http://${host}/${url}${encodeStr}`, {
            headers: {
                'Content-type': 'json/application'
            },
            method,
            data: requestData
        })
        .catch(e => {
            if (!e.response) {
                return {
                    netWorkError: true,
                    message: 'Нет соединения с NestJs'
                }
            }
            return e;
        });

        if (response.netWorkError) {
            return response;
        }

        if ([200, 201].includes(response.status)) {
            const result = await response.json();
            return {
                success: true,
                data: result.data
            }
        }

        return {
            success: false,
            message: await response.json()
                .then(res => res.message)
        }
    }
}

export default ApiService;