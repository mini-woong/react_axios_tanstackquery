import axios from "axios"

const JSON_SERVER_HOST = "http://localhost:5000/expenses"

export const getExpenses = async () => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}`);
        return response.data;
    } catch (err) {
        console.log(err);
        alert("오류")
    }
};

export const getExpense = async ({queryKey}) => {
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/${queryKey[1]}`);
        return response.data;
    } catch (err) {
        console.log(err);
        alert("오류")
    }
};

export const postExpense = async (newExpense) => {
    try {
        const { data } = await axios.post(`${JSON_SERVER_HOST}`, newExpense);
        return data;
    } catch (err) {
        console.log(err);
        alert("오류")
    }
};

export const putExpense = async (updatedExpense) => {
    const {id, ...rest} = updatedExpense;
    try {
        const { data } = await axios.put(`${JSON_SERVER_HOST}/${id}`, rest);
        return data;
    } catch (err) {
        console.log(err);
        alert("오류")
    }
};

export const deleteExpense = async (id) => {
    try {
        const { data } = await axios.delete(`${JSON_SERVER_HOST}/${id}`);
        return data;
    } catch (err) {
        console.log(err);
        alert("오류")
    }
};