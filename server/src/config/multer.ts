import multer from 'multer';
import path from 'path';
import crypto from 'crypto'

//cuidando para que as imagens que os usuários mandarem não serem as mesmas

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //onde serão enviados as fotos que o usuário der upload
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const fileName = `${hash}-${file.originalname}`;//nome novo do arquivo será "hash-nomeoriginal"

            callback(null, fileName); //volta um erro (nulo) e o nome novo do arquivo
        }
    })
}