class MainApi {
    constructor(data) {
        this.baseUrl = data.baseUrl;
        this.apiKey = data.apiKey;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }


    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }




    //Получение списка сертификатов
    getAllSertCertificates() {
        return this._request(`${this.baseUrl}?MethodName=OSGetGoodList&ApiKey=011ba11bdcad4fa396660c2ec447ef14`, {
            method: 'GET',
            headers: {
                "ApiKey": `${this.apiKey}`,
                "MethodName": "OSGetGoodList"
            }
        })
    }

    //Сохранить собранные данные
    saveInfo(cert, info) {
        return this._request(`${this.baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "ApiKey": `${this.apiKey}`,
                "MethodName": "OSSale"
            },
            body: JSON.stringify({
                Id: cert.Id,
                TableName: cert.TableName,
                PrimaryKey: cert.PrimaryKey,
                Price: cert.Price,
                Summa: cert.Summa,
                ClientName: info.ClientName,
                Phone: info.Phone,
                Email: info.Email
            })
        })
    }

};

const newMainApi = new MainApi({
    baseUrl: 'https://sycret.ru/service/api/api',
    apiKey: '011ba11bdcad4fa396660c2ec447ef14'
})

export { newMainApi };