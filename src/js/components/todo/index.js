import ApiService from "../../services/api";

class Todo {
    static async create(params) {
        const { text, markId, completeDate } = params;

        if (!(text.length && completeDate)) {
            alert('Введите верные данные');
            return;
        }

        const result = await ApiService.send({
            url: 'event',
            method: 'POST',
            data: params
        });

        alert(result.data.message)
        return result.success;
    }
}

export { Todo };