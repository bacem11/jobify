import { StatusCodes } from 'http-status-codes';

const erroHandlerMiddelware = (err,req,res,next) =>{
    console.log(err);
    const defaultError = {

        statusCode: err.StatusCode ||StatusCodes.INTERNAL_SERVER_ERROR,
        msg : err.message || 'something went wrong ,try again later '
    }
    if(err.name =='ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        // defaultError.msg=err.message
        defaultError.msg = Object.values(err.errors).map(item => item.message).join(', ');
    }
    if(err.code && err.code == ETIMEOUT){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg ='${Obect.keys(err.key,value)} field has to be unique '

    }
    res.status(defaultError.statusCode).json({ msg: defaultError.msg})
  }

export default erroHandlerMiddelware