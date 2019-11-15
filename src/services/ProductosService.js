import API from './config';

const endpoints = {
    todo: 'posts',
    porid: 'posts/'
};

const ProductosService = {
    getAll: () => new Promise((resolve, reject)=>{
        API.get(endpoints.todo).then(
            (res) => {
                console.log(res);
                resolve(res.data);
            }
        ).catch(
            error => reject(error)
        )
    }),

    getById: (id) => new Promise((resolve, reject)=>{
        API.get(endpoints.porid+id).then(
            res => resolve(res)
        ).catch(
            error => reject(error)
        )
    })
};

export default ProductosService;