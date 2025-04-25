import axios from "axios";

class AadharServices {
    constructor(){
        this.axios = axios.create({
            baseURL: 'http://localhost:7500',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json',
            }
        })
    }

    // getAll

    async getAll(){
        try {
            const res = await this.axios.get('/aadhar');
            return res
        } catch (error) {
            return error
        }
    }

    async postData(data){
        try {
            const res = await this.axios.post('/aadhar',data);
            return res
        } catch (error) {
            return error
        }
    }

    async editData(id){
        try {
            const res = await this.axios.get(`/aadhar/${id}`);
            return res
        } catch (error) {
            return error
        }
    }

    async updateData(id,data){
        try {
            const res = await this.axios.post(`/aadhar/${id}`,data);
            return res
        } catch (error) {
            return error
        }
    }

    async deleteData(id){
        try {
            const res = await this.axios.post(`/aadhar/delete/${id}`);
            return res
        } catch (error) {
            return error
        }
    }

}

export default AadharServices