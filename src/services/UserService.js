import { $host } from '../api';

export default class UserService {
    static signin = async (userData) => {
        const { data } = await $host.post('/api/v1/security/login', userData);
        console.log(data)
        localStorage.setItem('token', data.token);
        return data;
    };
}
