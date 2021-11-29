import { $host } from '../api';

export default class UserService {
    static signin = async (userData) => {
        const { data } = await $host.post('/api/v1/security/login', userData);
        localStorage.setItem('token', data.token);
        return data;
    };
}
