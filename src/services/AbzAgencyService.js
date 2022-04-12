class AbzAgencyService {
    _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1';
    _offsetBase = 6;
    _page = 1;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllUsers = async (offset = this._offsetBase, page = this._page) => {
        const res = await this.getResource(`${this._apiBase}/users?page=${page}&count=${offset}`);
        return res.users.map(this._transformUser);
    }

    getPositions = async () => {
        const res = await this.getResource(`${this._apiBase}/positions`);
        return res;
    }

    getToken = async () => {
        const res = await this.getResource(`${this._apiBase}/token`);
        return res;
    }

    _transformUser = (user) => {
        return {
            id: user.id,
            photo: user.photo,
            name: user.name,
            position: user.position,
            email: user.email,
            phone: user.phone
        }
    }

}

export default AbzAgencyService;