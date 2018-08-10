const categories = deps =>{
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps //dependencia ({connection}) que foi passada no require em mysql/index.js
                connection.query('SELECT * from categories', (error, results) => {
                    if (error){
                        errorHandler(error, 'Falha ao listar as categorias', reject)
                    }
                    resolve({categories: results})
                })
            })
        },

        save: (name) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps //dependencia ({connection}) que foi passada no require em mysql/index.js
                connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
                    if (error){
                        errorHandler(error, `Falha ao salvar a categoria ${name}`, reject)
                    }
                    resolve({category: {name, id: results.insertId}})
                })
            })
        },

        update: (id, name) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps //dependencia ({connection}) que foi passada no require em mysql/index.js
                connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
                    if (error){
                        errorHandler(error, `Falha ao atualizar a categoria ${name}`, reject)
                    }
                    resolve({category: {name, id: results.insertId}})
                })
            })
        },

        del: (id) => {
            return new Promise((resolve, reject) => {
                const { connection, errorHandler } = deps //dependencia ({connection}) que foi passada no require em mysql/index.js
                connection.query('DELETE FROM categories WHERE id = ?', [id], (error, results) => {
                    if (error){
                        errorHandler(error, `Falha ao remover a categoria de id ${id}`, reject)
                    }
                    resolve({ message: 'Categoria removida com sucesso!' })
                })
            })
        }
    }
}

module.exports = categories