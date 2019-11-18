import API from './config';

const endpoints = {
    todo: 'all-products',
    porid: '/product/'
};

const ProductosService = {
    getAll: () => new Promise((resolve, reject)=>{
        API.get(endpoints.todo).then(
            (res) => {
                resolve(res.data);
            }
        ).catch(
            error => reject(error)
        )
    }),

    getById: (id) => new Promise((resolve, reject)=>{
        API.get(endpoints.porid+id).then(
            res => resolve(res.data)
        ).catch(
            error => reject(error)
        )
    })
};

export default ProductosService;